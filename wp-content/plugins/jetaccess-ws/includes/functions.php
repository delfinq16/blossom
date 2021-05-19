<?php
//echo(phpinfo());

include_once('get-inventory-data.php');
//include_once('get-customer-data.php');
//include_once('create-customer.php');
//include_once('jac-options.php');

//Load menu in admin sidebar
//add_action( 'admin_menu', 'jac_menu_admin' );
$data = jac_get_inventorydata();

var_dump(json_decode(json_encode($data)));
//functions for Jetaccess plugin
/*

function jac_create_order() {}

function jac_get_product() {}

*/

//Create customer callbacks
//$user = get_userdata(98223);

// custom args for hook
/*
add_action( 'user_register', 'myplugin_registration_save', 10, 1 );

function myplugin_registration_save( $user_id ) {

    if ( isset( $_POST['first_name'] ) ){
        $first_name = $_POST['first_name'];
    }
    if (isset( $_POST)){
        $post_data = $_POST;
    }
    return $post_data;

}*/


function get_inventory() {
    //update media files title and alt tags here
    //
    // at the end redirect to target page
}
//add_action( 'admin_post_my_media_update', 'get_inventory' );
//add_action( 'profile_update', 'jac_create_customer', 10, 2 );

//var_dump(jac_create_customer());
//var_dump(jac_get_inventory_data());
//var_dump(jac_get_customer_data());

?>