<?php
function get_remote_inventory() {
    $input_data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://webservices.amentum.net/">
        <soapenv:Header/>
            <soapenv:Body>
                <web:ObtenerInventario>
                    <!--Optional:-->
                    <request>
                        <login>
                        <!--Optional:-->
                            <tradingpartner>SundayGarments</tradingpartner>
                            <!--Optional:-->
                            <password>TPSG0421</password>
                        </login>
                        <dc_name>Corporativo</dc_name>
                        <!--Optional:-->
                        <location>Despacho</location>
                    </request>
                </web:ObtenerInventario>
            </soapenv:Body>
        </soapenv:Envelope>';
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_PORT => "8081",
        CURLOPT_URL => "http://jet6.jetaccess.de:8081/WSOnlineSales",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => $input_data,
        CURLOPT_HTTPHEADER => array(
            "Cache-Control: no-cache",
            "Content-Type: application/xml"
        ),
    ));
    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        $p = xml_parser_create();
        xml_parse_into_struct($p, $response, $values, $index);
        xml_parser_free($p);
        $data = $values;
        $products = [];
        foreach ($data as $row) {
            if($row['tag']=='PRODUCTO'){
                array_push($products, $row);
            }
        }
        $test= 2;
        return $products;
    }
}
function product_exists_in_inventory($sku) {
    $args = array(
        'post_type' => 'product',
        'meta_query' => array(
            'relation' => 'AND',
            array(
                'key'       => '_sku',
                'compare'   => '=',
                'value'     => $sku,
            ),

        ),
    );
    $query = new WP_Query( $args );
    if(!empty($query->posts)) {
        return $query->posts[0]->ID;
    }
    return false;
}

function update_inventory() {
    $inventory = get_remote_inventory();
    foreach ($inventory as $product) {
        $sku = $product['attributes']['SKU'];
        $product_id = product_exists_in_inventory($sku);
        if($product_id) {
            $stock = $product['attributes']['STOCK'];
            $local_stock = get_post_meta($product_id, '_stock')[0];
            if($stock == $local_stock) continue;
            $stock_status = ($stock > 0 ) ? 'stock' : 'outofstock';
            $title = get_the_title( $product_id );
            $product_update = array(
                'ID' => $product_id,
                'post_title'   =>  $title,
                'post_type' => 'product',
                'meta_input'   => array(
                    '_stock' => $stock,
                    '_stock_status' => $stock_status
                ),
            );
            wp_update_post( $product_update );
        }
    }
}
?>