<?php
/**
 * Content wrappers
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/global/wrapper-start.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @author      WooThemes
 * @package     WooCommerce/Templates
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

$template = wc_get_theme_slug_for_templates();

switch( $template ) {
	case 'twentyeleven' :
		echo '<div id="primary"><div id="content" role="main">';
		break;
	case 'twentytwelve' :
		echo '<div id="primary" class="site-content"><div id="content" role="main">';
		break;
	case 'twentythirteen' :
		echo '<div id="primary" class="site-content"><div id="content" role="main" class="entry-content twentythirteen">';
		break;
	case 'twentyfourteen' :
		echo '<div id="primary" class="content-area"><div id="content" role="main" class="site-content twentyfourteen"><div class="tfwc">';
		break;
	default :
		yit_get_template( 'primary/start-primary.php' );

        $sidebar = yit_get_sidebars();
        $content_cols = 12;
        $content_order = '';


        if ( $sidebar['layout'] == 'sidebar-left' ) {
            $content_cols -= 3;
            $content_order = ' col-sm-push-3';
        }
        elseif ( $sidebar['layout'] == 'sidebar-right' ) {
            $content_cols -= 3;
        }
        elseif ( $sidebar['layout'] == 'sidebar-double' && $sidebar['sidebar-left'] != '-1' ) {
            $content_cols -= 6;
            $content_order = ' col-sm-push-3';
        }

        ?>

        <!-- START CONTENT -->
        <div class="content col-sm-<?php echo $content_cols ?><?php echo $content_order ?> clearfix" role="main">

        <?php
        if ( YIT_Layout()->show_breadcrumb == 1 ){
            do_action( 'yit_single_page_breadcrumb' );
        }
        ?>

        <?php
		break;
}
