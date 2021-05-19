<?php
function jac_create_customer()
{
    $input_data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://webservices.amentum.net/">
    <soapenv:Header/>
    <soapenv:Body>
       <web:CrearOrdenVenta>
          <!--Optional:-->
          <request>
             <login>
                <!--Optional:-->
                <tradingpartner>SundayGarments</tradingpartner>
                <!--Optional:-->
                <password>TPSG0421</password>
             </login>
             <!--Optional:-->
             <compania>Encom</compania>
             <!--Optional:-->
             <rfc>LOME923719MN0</rfc>
             <!--Optional:-->
             <orden_venta></orden_venta>
             <!--Optional:-->
             <usuario>System</usuario>
             <!--Optional:-->
             <fecha_venta>20210506</fecha_venta>
             <!--Optional:-->
             <productos>
                <!--1 or more repetitions:-->
                <producto idProducto="3633" cantidad="1" precio="1" descuento="0.00" iva="16.00" fechaEnvio="20210506"/>
             </productos>
             <requiere_factura>y</requiere_factura>
             <!--Optional:-->
             <tipo_documento>0</tipo_documento>
             <!--Optional:-->
             <tipo_envio>Terrestre</tipo_envio>
             <!--Optional:-->
             <detalle>?</detalle>
             <!--Optional:-->
             <po_type>?</po_type>
          </request>
       </web:CrearOrdenVenta>
    </soapenv:Body>
 </soapenv:Envelope>
    ';
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