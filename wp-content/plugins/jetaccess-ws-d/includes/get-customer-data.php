<?php
function jac_get_customer_data()
{
    $input_data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://webservices.amentum.net/">
    <soapenv:Header/>
    <soapenv:Body>
    <web:ObtenerCliente> <!--Optional:-->
    <request>
    <login>
    <!--Optional:-->
    <tradingpartner>SundayGarments</tradingpartner> <!--Optional:-->
    <password>TPSG0421</password>
    </login> <!--Optional:-->
    <razon_social></razon_social> <!--Optional:--> <rfc>DEQR9702166H0</rfc>
    </request>
    </web:ObtenerCliente>
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

        return $data;
    }
}

?>