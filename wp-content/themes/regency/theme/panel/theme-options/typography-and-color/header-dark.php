<?php
/**
 * This file belongs to the YIT Framework.
 *
 * This source file is subject to the GNU GENERAL PUBLIC LICENSE (GPL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 */

/**
 * Return an array with the options for Theme Options > Typography and Color > Header Dark
 *
 * @package Yithemes
 * @author  Antonino Scarfì <antonino.scarfi@yithemes.com>
 * @since   2.0.0
 * @return mixed array
 *
 */
return array(

    /* Typography and Color > General Custom Background */
    array(
        'type' => 'title',
        'name' => __( 'Header Dark', 'yit' ),
        'desc' => __( 'Set here the style for the typography in header, when you use the "Trasparent" skin and you have a dark image in background.' )
    ),

    array(
        'id' => 'header-dark-custom-logo-image',
        'type' => 'upload',
        'name' => __( 'Logo image', 'yit' ),
        'desc' => __( 'Replace the main logo image for this style (leave empty to not replace)', 'yit' ),
        'std' => YIT_THEME_ASSETS_URL . '/images/logo-dark.png',
        'deps' => array(
            'ids' => 'header-custom-logo',
            'values' => 'yes'
        )
    ),

    array(
        'id'              => 'header-dark-logo-font',
        'type'            => 'colorpicker',
        'name'            => __( 'Logo font', 'yit' ),
        'desc'            => __( 'Select the type to use for the logo font.', 'yit' ),
        'std'             => array(
            'color' => '#fff'
        ),
        'style'           => array(
            'selectors'  => '#header.dark #logo #textual',
            'properties' => 'color'
        ),
        'deps' => array(
            'ids' => 'header-custom-logo',
            'values' => 'no'
        )
    ),

    array(
        'id'              => 'header-dark-logo-highlight-font',
        'type'            => 'colorpicker',
        'name'            => __( 'Logo font highlight', 'yit' ),
        'desc'            => __( 'Select the type to use for the logo font highlight.', 'yit' ),
        'std'             => array(
            'color' => '#f2d3a1'
        ),
        'style'           => array(
            'selectors'  => '#header.dark #logo span.title-highlight',
            'properties' => 'color'
        )
    ),

    array(
        'id'              => 'header-dark-tagline-font',
        'type'            => 'colorpicker',
        'name'            => __( 'Tagline font', 'yit' ),
        'desc'            => __( 'Select the type to use for the tagline below the logo.', 'yit' ),
        'std'             => array(
            'color' => '#eee'
        ),
        'style'           => array(
            'selectors'  => '#header.dark #tagline',
            'properties' => 'color'
        )
    ),

    array(
        'id'              => 'header-dark-tagline-highlight-font',
        'type'            => 'colorpicker',
        'name'            => __( 'Tagline font highlight', 'yit' ),
        'desc'            => __( 'Select the type to use for the tagline highlight.', 'yit' ),
        'std'             => array(
            'color' => '#f2d3a1'
        ),
        'style'           => array(
            'selectors'  => '#header.dark #tagline.highlight',
            'properties' => 'color'
        )
    ),



    /* Typography and Color > Navigation */
    array(
        'type' => 'title',
        'name' => __( 'Navigation', 'yit' ),
        'desc' => ''
    ),

    array(
        'id'         => 'header-dark-navigation-menu-link-color',
        'type'       => 'colorpicker',
        'variations' => array(
            'normal' => __( 'Links', 'yit' ),
            'hover'  => __( 'Links hover', 'yit' ),
        ),
        'name'       => __( 'Navigation Links Color', 'yit' ),
        'desc'       => __( 'Select the colors to use for the links in navigation menu', 'yit' ),
        'std'        => array(
            'color' => array(
                'normal' => '#fff',
                'hover'  => '#f2d3a1'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => '#header.dark .nav > ul > li > a,
                                 #header.dark .widget_search a.trigger-search,
                                 #header.dark .widget_product_search a.trigger-search,
                                 #header.dark .yit-mini-cart-icon .cart-items-number,
                                 #header.dark .widget_icl_lang_sel_widget li a,
                                 #header.dark > .header-nav > ul > li > a',
                'properties' => 'color'
            ),
            'hover'  => array(
                'selectors'  => '#header.dark .nav > ul > li > a:hover,
                                 #header .nav > ul > li.current_page_item,
                                 #header.dark .widget_search a.trigger-search:hover,
                                 #header.dark .widget_product_search a.trigger-search:hover,
                                 #header.dark #header-search.opened .widget_search a.trigger-search,
                                 #header.dark #header-search.opened .widget_product_search a.trigger-search,
                                 #header.dark .widget_icl_lang_sel_widget li a:hover,
                                 #header.dark .header-nav > ul > li.current-menu-ancestor > a,
                                 #header.dark .header-nav > ul > li.current_page_item > a,
                                 #header.dark > .header-nav > ul > li > a:hover',
                'properties' => 'color'
            )
        )
    ),



    /* Typography and Color > Navigation */
    array(
        'type' => 'title',
        'name' => __( 'Extra elements', 'yit' ),
        'desc' => ''
    ),

    array(
        'id' => 'header-dark-shop-mini-cart-icon',
        'type' => 'upload',
        'name' => __( 'Set Custom Mini Cart Icon', 'yit' ),
        'desc' => __( "Choose the image to display as minicart background, when the header is trasparent and the dark skin is active", 'yit' ),
        'std' => YIT_THEME_ASSETS_URL . '/images/cart-dark.png',
        'in_skin' => true
    ),


);
