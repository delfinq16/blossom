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
 * Return an array with the options for Theme Options > Shop > Single Product Page
 *
 * @package Yithemes
 * @author Andrea Grillo <andrea.grillo@yithemes.com>
 * @author Antonio La Rocca <antonio.larocca@yithemes.it>
 * @author Francesco Licandro <francesco.licandro@yithemes.it>
 * @since 2.0.0
 * @return mixed array
 *
 */

$is_contact_form_installed = function_exists( 'YIT_Contact_Form' );
$is_multi_vendor_installed = function_exists( 'YITH_Vendors' );

return array(

    /* Shop > Single Product Page Settings */
    array(
        'type' => 'title',
        'name' => __( 'Single Product Page', 'yit' ),
        'desc' => ''
    ),

    array(
        'id' => 'shop-single-product-nav',
        'type' => 'onoff',
        'name' => __( 'Show nav prev/next link', 'yit' ),
        'desc' => __( 'Say if you want to show product navigation', 'yit' ),
        'std' => 'yes'
    ),

    array(
        'id' => 'shop-nav-in-category',
        'type' => 'onoff',
        'name' => __( 'Nav in same category', 'yit' ),
        'desc' => __( 'Select it to navigate in the same product category of the displayed product', 'yit' ),
        'std' => 'no',
        'deps' => array(
            'ids' => 'shop-single-product-nav',
            'values' => 'yes'
        )
    ),

    array(
        'id' => 'shop-single-product-name',
        'type' => 'onoff',
        'name' => __( 'Show name', 'yit' ),
        'desc' => __( 'Say if you want to show product name', 'yit' ),
        'std' => 'yes'
    ),

    array(
        'id' => 'shop-single-product-price',
        'type' => 'onoff',
        'name' => __( 'Show price', 'yit' ),
        'desc' => __( 'Select if you want to show price.', 'yit' ),
        'std' => 'yes'
    ),

    array(
        'id' => 'shop-single-add-to-cart',
        'type' => 'onoff',
        'name' => __( 'Show button add to cart', 'yit' ),
        'desc' => __( 'Select if you want to show purchase button.', 'yit' ),
        'std' => 'yes'
    ),

    array(
        'id' =>'shop-single-show-wishlist',
        'type' => 'onoff',
        'name' => __( 'Show wishlist button', 'yit' ),
        'desc' => __( 'Say if you want to show wishlist button.', 'yit' ),
        'std' => 'yes'
    ),

    array(
        'id' => 'shop-single-share',
        'type' => 'onoff',
        'name' => __( 'Show share link', 'yit' ),
        'desc' => __( 'Say if you want to show link for sharing product.', 'yit' ),
        'std' => 'yes'
    ),

    array(
        'id' => 'shop-single-metas',
        'type' => 'onoff',
        'name' => __( 'Show product metas (categories and tags)', 'yit' ),
        'desc' => __( 'Say if you want to show product metas in your single product page. It also remove Brands if you are using WooCommerce Brands Addon.', 'yit' ),
        'std' => 'yes'
    ),

    array(
        'id' => 'shop-remove-reviews',
        'type' => 'onoff',
        'name' => __( 'Remove reviews tab', 'yit' ),
        'desc' => __( 'Say if you want to remove reviews tab from all products', 'yit' ),
        'std' => 'no'
    ),

    /* Shop > Related Products Settings */

    array(
        'type' => 'title',
        'name' => __( 'Related products', 'yit' ),
        'desc' => ''
    ),

    array(
        'id' => 'shop-show-related',
        'type' => 'onoff',
        'name' => __( 'Show related products', 'yit' ),
        'desc' => __( 'Select if you want to display Related Products.', 'yit' ),
        'std' => 'yes'
    ),

    array(
        'id' => 'shop-related-slider',
        'type' => 'onoff',
        'name' => __( 'Enable related slider', 'yit' ),
        'desc' => __( 'Select if you want to show related products as slider.' ,'yit' ),
        'std' => 'no',
        'deps' => array(
            'ids' => 'shop-show-related',
            'values' => 'yes'
        )
    ),

    array(
        'id' => 'shop-show-custom-related',
        'type' => 'onoff',
        'name' => __( 'Custom Related Products number', 'yit' ),
        'desc' => __( 'Select if you want to customize the number of Related Products. Note: if you are already using a custom filter to do that, please don\'t enable this option', 'yit' ),
        'std' => 'no',
        'deps' => array(
            'ids' => 'shop-show-related',
            'values' => 'yes'
        )
    ),

    array(
        'id' => 'shop-number-related',
        'type' => 'number',
        'name' => __( 'Number of Related Products', 'yit' ),
        'desc' => __( 'Set the total numbers of the related products displayed, on the product detail page. Note: related products are displayed randomly from Woocommerce. Sometimes the number of related products could be less than the number of items selected. This number depends from the query plugin, not from the theme.', 'yit' ),
        'std' => 3,
        'deps' => array(
            'ids' => 'shop-show-custom-related',
            'values' => 'yes'
        )
    ),

    array(
        'id' => 'shop-price-format',
        'type' => 'onoff',
        'name' => __( 'Enable WooCommerce price format for variable product', 'yit' ),
        'desc' => __( 'Select if you don\' t want to change the WooCommerce price format' ,'yit' ),
        'std' => 'no',
    ),

    ! $is_contact_form_installed ? false : array(
        'type' => 'title',
        'name' => __( 'Inquiry Form Options', 'yit' ),
        'desc' => ''
    ),

    ! $is_contact_form_installed ? false : array(
        'id' => 'shop-inquiry-title',
        'type' => 'text',
        'name' => __( 'Inquiry box title', 'yit' ),
        'desc' => __( 'Set inquiry box title', 'yit' ),
        'std' => __( 'Send an inquiry for this item', 'yit' )
    ),

    ! $is_contact_form_installed ? false : array(
        'id'      => 'shop-inquiry-title-icon',
        'type'    => 'select-icon',
        'options' => array(
            'select' => array(
                'icon'   => __( 'Theme Icon', 'yit' ),
                'custom' => __( 'Custom Icon', 'yit' ),
                'none'   => __( 'None', 'yit' )
            ),
            'icon'   => YIT_Plugin_Common::get_awesome_icons(),
        ),
        'name'    => __( 'Show inquiry icon', 'yit' ),
        'desc'    => __( 'Select the icon for inquiry box title. Note: Custom icon size will be scaled to 25x25', 'yit' ),
        'std'     => array(
            'select' => 'icon',
            'icon'   => 'envelope-o',
            'custom' => ''
        )
    ),

    ! $is_contact_form_installed ? false : array(
        'id' => 'shop-single-product-contact-form',
        'type' => 'select',
        'name' => __( 'Inquiry form', 'yit' ),
        'desc' => __( 'Select contact form type. Note: First you must create one contact form on plugin YIT Contact Form', 'yit' ),
        'options' => apply_filters( 'yit_get_contact_forms', array() ),
        'std' => false
    )  ,

    ( ! $is_contact_form_installed || ! $is_multi_vendor_installed ) ? false : array(
        'id' => 'send-email-to-vendor',
        'type' => 'onoff',
        'name' => __( 'Send Email to product vendor', 'yit' ),
        'desc' => __( 'Select if you want to send the email to the product vendor instead of administrator.', 'yit' ),
        'std' => 'no',

    ),

);

