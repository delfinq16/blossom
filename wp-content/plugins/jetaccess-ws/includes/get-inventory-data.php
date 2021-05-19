<?php
function jac_get_inventorydata()
{
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
        xml_parse_into_struct($p, $response, $vals, $index);
        xml_parser_free($p);
        $data = $vals;

        //return json_encode($data[7], true);
        $datachida = [];
        foreach ($data as $row) {
            if($row['tag']=='PRODUCTO'){
                array_push($datachida, $row);
            }
        }
        return $datachida;
    }
}

?>