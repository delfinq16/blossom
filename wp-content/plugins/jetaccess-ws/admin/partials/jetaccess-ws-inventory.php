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
        return $products;
    }
}
function get_local_inventory() {
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => -1,
    );
    $query = new WP_Query( $args );
    if(!empty($query->posts)) {
        return $query->posts;
    }
    return false;
}

function organize_remote_inventory() {
    $inventory = get_remote_inventory();
    $organized_inventory = array();
    foreach ($inventory as $product) {
        if(isset($organized_inventory[$product['attributes']['SKU']])) {
            $organized_inventory[$product['attributes']['SKU']] +=  $product['attributes']['STOCK'];
        } else {
            $organized_inventory[$product['attributes']['SKU']] =  intval($product['attributes']['STOCK']);
        }
        
    }
    return $organized_inventory;
}

function compare_stocks($sku, $remote_inventory) {
    return isset($remote_inventory[$sku]) ? $remote_inventory[$sku] : false;
}

function update_inventory() {
    $remote_inventory = organize_remote_inventory();
    $local_inventory = get_local_inventory();
    foreach ($local_inventory as $product) {
        $product_id = $product->ID;
        $product = wc_get_product( $product_id );
        $product_sku = $product->get_sku();
        $product_variants = $product->get_children();
        //Update product
        $product_found = compare_stocks($product_sku, $remote_inventory);
        if($product_found  !== false) {
            $product_stock = ($product_found > 0) ? 'stock' : 'outofstock';
            update_post_meta( $product_id, '_stock', $product_found );
            if($product_found > 0 ) {
                update_post_meta( $product_id, '_stock_status', $product_stock );
            }
        }
        //Update variants
        foreach($product_variants as $variant) {
            $variant_sku = get_post_meta( $variant, '_sku', true );
            $variant_found = compare_stocks($variant_sku, $remote_inventory);
            if($variant_found !== false) {
                $variant_stock = ($variant_found > 0) ? 'stock' : 'outofstock';
                update_post_meta( $variant, '_stock', $variant_found);
                if($variant_found > 0 ) {
                    update_post_meta( $variant, '_stock_status', $variant_stock );
                }
            }
        }
    }
}
?>