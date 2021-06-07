<?php
/*
Plugin Name: JetAccess WS
Plugin URI:
Description: Plugin para enlazar WooCommerce con JetAccess
Version: 1.0
Author: randydelfin
Author URI:
License: GPL2
*/
if ( !defined('ABSPATH') ){
    define('ABSPATH', dirname(__FILE__) . '/');
};
require_once( ABSPATH . 'wp-load.php' );
define('JAC_ROUTE',plugin_dir_path(__FILE__));
//include(JAC_ROUTE .'includes/functions.php');
include_once('includes/functions.php');
//add_action('after_theme_setup','get_data');


/*$rfc = get_rfc($user_id);

if(empty($rfc)){
    $save_rfc = "XAXXHJFTR";
}else{
    $save_rfc = $rfc->value;
}
*/
?>