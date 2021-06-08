<?php
function jac_create_customer()
{
    get_user_data($user_id);


    $input_data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://webservices.amentum.net/">
    <soapenv:Header/> <soapenv:Body>
    <web:CrearCliente> <!--Optional:--> <request>
    <login>
    <!--Optional:-->
    <tradingpartner>SundayGarments</tradingpartner> <!--Optional:-->
    <password>TPSG0421</password>
    </login>
    <cliente rfc="LOME923719MN0" nombre="Emilia Lopez" razonSocial="Encom" telefono="9876543210" correoElectronico="emilialopez23@gmail.com" terminoPago="Crédito 30 días" comision="0" diasPago="30" metodoPago="Cheque" moneda="Pesos" limiteCredito="0" grupoCliente="No Aplica" vendedor="5" modoEnvio="Terrestre" incoterms="EXWorks" referenciaPago="No Identificado">
    <domicilio_fiscal direccion="Villa Montalvo 34" colonia="Cantera" ciudad="Tepic" estado="Nayarit" pais="Mexico" codigoPostal="63173"/>
    <!--Optional:--> <domicilios_embarque>
    <nombre_corto>Emilia Lopez</nombre_corto>
    <!--1 or more repetitions:-->
    <domicilio_embarque direccion="Villa Montalvo 34" colonia="Cantera"
    ciudad="Tepic" estado="Nayarit" pais="Mexico" codigoPostal="63173"/>
    </domicilios_embarque>
    </cliente> </request>
    </web:CrearCliente> </soapenv:Body>
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