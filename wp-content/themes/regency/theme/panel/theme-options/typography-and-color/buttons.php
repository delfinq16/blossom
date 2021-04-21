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
 * Return an array with the options for Theme Options > Typography and Color > Buttons
 *
 * @package Yithemes
 * @author  Andrea Grillo <andrea.grillo@yithemes.com>
 * @author  Antonio La Rocca <antonio.larocca@yithemes.it>
 * @since   2.0.0
 * @return mixed array
 *
 */
return array(

    /* Typography and Color > Buttons */

    array(
        'type' => 'title',
        'name' => __( 'Buttons Black Flat', 'yit' ),
        'desc' => ''
    ),

        array(
        'id'              => 'button-flat-black-font',
        'type'            => 'typography',
        'name'            => __( 'Buttons Typography', 'yit' ),
        'desc'            => __( 'Select the typography for buttons text.', 'yit' ),
        'min'             => 1,
        'max'             => 80,
        'default_font_id' => 'typography-website-title',
        'std'             => array(
            'size'      => 12,
            'unit'      => 'px',
            'family'    => 'default',
            'style'     => '400',
            'transform' => 'uppercase',
        ),
        'style'           => array(
            'selectors'  => '.btn-flat, a.btn-flat, .blog input[type="submit"], #buddypress input[type=submit], input[type=submit]#place_order,
                             #yith-ywraq-form input.button, #yith-ywraq-mail-form input.button.raq-send-request,
                             .wc-proceed-to-checkout a.checkout-button.button.alt.wc-forward',

            'properties' => 'font-size,
                              font-family,
                              font-weight,
                              text-transform'
        )
    ),

    array(
        'id'         => 'button-flat-black-text-color',
        'type'       => 'colorpicker',
        'name'       => __( 'Buttons Text color', 'yit' ),
        'desc'       => __( 'Select the color of the text for the buttons of every page', 'yit' ),
        'variations' => array(
            'normal' => __( 'Text color', 'yit' ),
            'hover'  => __( 'Text hover color', 'yit' )
        ),
        'std'        => array(
            'color' => array(
                'normal' => '#ffffff',
                'hover'  => '#ffffff'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => '.btn-flat, a.btn-flat, a.btn-flat.added,
                                .btn.btn-flat i.fa,
                                #nav .menu-item .highlight-alternative,
                                .call-to-action-two .call-btn .btn-alternative,
                                .blog input[type="submit"],
                                #buddypress input[type=submit],
                                input[type=submit]#place_order,
                                #yith-ywraq-form input.button, #yith-ywraq-mail-form input.button.raq-send-request,
                                .wc-proceed-to-checkout a.checkout-button.button.alt.wc-forward',

                'properties' => 'color'
            ),
            'hover'  => array(
                'selectors'  => '.btn-flat:hover, a.btn-flat:hover,
                                .btn.btn-flat:hover i.fa,
                                .btn.btn-flat i.fa:hover,
                                .call-to-action-two .call-btn .btn-alternative:hover,
                                .blog input[type="submit"]:hover,
                                #buddypress input[type=submit]:hover,
                                input[type=submit]#place_order:hover,
                                #yith-ywraq-form input.button:hover, #yith-ywraq-mail-form input.button.raq-send-request:hover,
                                .wc-proceed-to-checkout a.checkout-button.button.alt.wc-forward:hover',

                'properties' => 'color'
            )
        )
    ),

    array(
        'id'         => 'button-flat-black-border-color',
        'type'       => 'colorpicker',
        'variations' => array(
            'normal' => __( 'Border color', 'yit' ),
            'hover'  => __( 'Border hover color', 'yit' )
        ),
        'name'       => __( 'Buttons border color', 'yit' ),
        'desc'       => __( 'Select a color for the buttons border of all pages.', 'yit' ),
        'std'        => array(
            'color' => array(
                'normal' => '#454545',
                'hover'  => '#6f6f6f'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => '.btn-flat, a.btn-flat,
                                .blog input[type="submit"],
                                #buddypress input[type=submit],
                                input[type=submit]#place_order,
                                #yith-ywraq-form input.button, #yith-ywraq-mail-form input.button.raq-send-request,
                                .wc-proceed-to-checkout a.checkout-button.button.alt.wc-forward',

                'properties' => 'border-color'
            ),
            'hover'  => array(
                'selectors'  => '.btn-flat:hover, a.btn-flat:hover,
                                .blog input[type="submit"]:hover,
                                #buddypress input[type=submit]:hover,
                                input[type=submit]#place_order:hover,
                                #yith-ywraq-form input.button:hover, #yith-ywraq-mail-form input.button.raq-send-request:hover,
                                .wc-proceed-to-checkout a.checkout-button.button.alt.wc-forward:hover',
                'properties' => 'border-color'
            )
        )
    ),

    array(
        'id'         => 'button-flat-black-background-color',
        'type'       => 'colorpicker',
        'variations' => array(
            'normal' => __( 'Background color', 'yit' ),
            'hover'  => __( 'Background hover color', 'yit ' )
        ),
        'name'       => __( 'Buttons background color', 'yit' ),
        'desc'       => __( 'Select a color for the buttons background of all pages.', 'yit' ),
        'std'        => array(
            'color' => array(
                'normal' => '#454545',
                'hover'  => '#6f6f6f'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => '.btn-flat, a.btn-flat,
                                .call-to-action-two .call-btn .btn-alternative,
                                .blog input[type="submit"],
                                #nav .menu-item .highlight-alternative,
                                #buddypress input[type=submit],
                                input[type=submit]#place_order,
                                #yith-ywraq-form input.button, #yith-ywraq-mail-form input.button.raq-send-request,
                                .wc-proceed-to-checkout a.checkout-button.button.alt.wc-forward',

                'properties' => 'background-color, background'
            ),
            'hover'  => array(
                'selectors'  => '.btn-flat:hover, a.btn-flat:hover,
                                .blog input[type="submit"]:hover,
                                .call-to-action-two .call-btn .btn-alternative:hover,
                                .widget_price_filter .ui-slider .ui-slider-handle,
                                .widget_price_filter .ui-slider .ui-slider-range,
                                #buddypress input[type=submit]:hover,
                                input[type=submit]#place_order:hover,
                                #yith-ywraq-form input.button:hover, #yith-ywraq-mail-form input.button.raq-send-request:hover,
                                .wc-proceed-to-checkout a.checkout-button.button.alt.wc-forward:hover',

                'properties' => 'background-color, background'
            )
        )
    ),

    /* ========= Ghost Button =========== */

    array(
        'type' => 'title',
        'name' => __( 'Ghost Black Button', 'yit' ),
        'desc' => ''
    ),

    array(
        'id'              => 'button-black-ghost-font',
        'type'            => 'typography',
        'name'            => __( 'Black Ghost Buttons Typography', 'yit' ),
        'desc'            => __( 'Select the typography for ghost buttons text.', 'yit' ),
        'min'             => 1,
        'max'             => 80,
        'default_font_id' => 'typography-website-title',
        'std'             => array(
            'size'      => 12,
            'unit'      => 'px',
            'family'    => 'default',
            'style'     => 'regular',
            'transform' => 'uppercase',
        ),
        'style'           => array(
            'selectors'  => '.btn-ghost,
                             a.btn-ghost,
                             .price-table .btn.btn-alternative,
                             .blog .more-link,
                             .blog .read-more,
                             .blog a.read-more,
                             button.single_add_to_cart_button.button,
                             .widget_search #searchsubmit,
                             #commentform #submit,
                             ul.products li.product.list .product-action-button a,
                             .wishlist_table .add_to_cart.button,
                             a.yith-wcan-reset-navigation.button,
                             .woocommerce.widget_product_search input[type="submit"],
                             .widget_price_filter .button,
                             #buddypress div.generic-button a,
                             #buddypress a.button,
                             #buddypress #group-creation-previous,
                             #buddypress #delete_inbox_messages,
                             #buddypress #delete_sentbox_messages,
                             #buddypress div.activity-meta a.button,
                             #buddypress div.activity-meta a.button span,
                             #my-account-content input[type="submit"],
                             .woocommerce-MyAccount-content input[type="submit"],
                             .woocommerce-message .button.wc-forward,
                             li.eg-item-skin-1-wrapper .btn-eg a,
                             .woocommerce .login-form-checkout .button,
                             #bbpress-forums button,
                             #bbp-search-form #bbp_search_submit,
                             .bp-login-widget-user-logout a,
                             .bbp_widget_login a.button,
                             .bbp-submit-wrapper button,
                             #bp-login-widget-submit,
                             .woocommerce.widget.widget_product_search #searchform #searchsubmit,
                             #searchsubmit,
                             a.comment-reply-link.button,
                             .woocommerce li.product .add-request-quote-button.button, .woocommerce .summary .add-request-quote-button.button,
                             .my_account_orders td.order-actions a.track-button,
                             .woocommerce-cart-notice a.button,
                            .variations_button .single_add_to_cart_button.button.alt',
            'properties' => 'font-size,
                             font-family,
                             font-weight,
                             text-transform'
        )
    ),

    array(
        'id'         => 'button-black-hover-color-ghost',
        'type'       => 'colorpicker',
        'name'       => __( 'Black Ghost Buttons Text Color', 'yit' ),
        'desc'       => __( 'Select the color of the text for the ghost buttons of every page', 'yit' ),
        'variations' => array(
            'normal' => __( 'Text color', 'yit' ),
            'hover'  => __( 'Text hover color', 'yit ' )
        ),
        'std'        => array(
            'color' => array(
                'normal' => '#000000',
                'hover'  => '#ffffff'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => '.btn-ghost, a.btn-ghost,
                                 .blog .more-link, .blog a.read-more,
                                 .price-table .btn.btn-alternative,
                                 .btn.btn-ghost i.fa,
                                 #commentform #submit,
                                  #nav .menu-item .highlight,
                                 .single_add_to_cart_button .button,
                                 .widget_search #searchsubmit,
                                 .blog .more-link, .blog a.read-more, .btn.btn-ghost i.fa,
                                 ul.products li.product.list .product-action-button a,
                                 .wishlist_table .add_to_cart.button,
                                 a.yith-wcan-reset-navigation.button,
                                 .woocommerce.widget_product_search input[type="submit"],
                                 .widget_price_filter .button,
                                 #buddypress div.generic-button a,
                                 #buddypress a.button,
                                 #buddypress #group-creation-previous,
                                 #buddypress #delete_inbox_messages,
                                 #buddypress #delete_sentbox_messages,
                                 #buddypress div.activity-meta a.button,
                                 #buddypress div.activity-meta a.button span,
                                 li.eg-item-skin-1-wrapper .btn-eg a,
                                 #my-account-content input[type="submit"],
                                 .woocommerce-MyAccount-content input[type="submit"],
                                 .woocommerce-message .button.wc-forward,
                                 .woocommerce .login-form-checkout .button,
                                 #bbpress-forums button,
                                 .woocommerce.widget.widget_product_search #searchform #searchsubmit,
                                 #bbp-search-form #bbp_search_submit,
                                 .bp-login-widget-user-logout a,
                                 .bbp_widget_login a.button,
                                 .bbp-submit-wrapper button,
                                 #bp-login-widget-submit,
                                 #searchsubmit,
                                 a.comment-reply-link.button,
                                 .woocommerce li.product .add-request-quote-button.button, .woocommerce .summary .add-request-quote-button.button,
                                 .my_account_orders td.order-actions a.track-button,
                                 .woocommerce-cart-notice a.button,
                                .variations_button .single_add_to_cart_button.button.alt',
                 'properties' => 'color'
            ),
            'hover'  => array(
                'selectors'  => '.btn-ghost:hover,
                                a.btn-ghost:hover,
                                .btn.btn-ghost i.fa:hover,
                                .btn.btn-ghost:hover i.fa,
                                .blog .more-link:hover, .blog a.read-more:hover,
                                #commentform #submit:hover,
                                button.single_add_to_cart_button.button:hover,
                                .widget_search #searchsubmit:hover,
                                .blog .more-link:hover, .blog a.read-more:hover,
                                .price-table .btn.btn-alternative:hover,
                                ul.products li.product.list .product-action-button a:hover,
                                .wishlist_table .add_to_cart.button:hover,
                                a.yith-wcan-reset-navigation.button:hover,
                                .woocommerce.widget_product_search input[type="submit"]:hover,
                                .widget_price_filter .button:hover,
                                #buddypress div.generic-button a:hover,
                                #buddypress a.button:hover,
                                #buddypress #group-creation-previous:hover,
                                #buddypress #delete_inbox_messages:hover,
                                #buddypress #delete_sentbox_messages:hover,
                                #buddypress div.activity-meta a.button:hover,
                                #buddypress div.activity-meta a.button:hover span,
                                li.eg-item-skin-1-wrapper .btn-eg a:hover,
                                li.eg-item-skin-1-wrapper:hover .btn-eg a,
                                #my-account-content input[type="submit"]:hover,
                                .woocommerce-MyAccount-content input[type="submit"]:hover,
                                .woocommerce-message .button.wc-forward:hover,
                                .woocommerce .login-form-checkout .button:hover,
                                .woocommerce.widget.widget_product_search #searchform #searchsubmit:hover,
                                #bbpress-forums button:hover,
                                #bbp-search-form #bbp_search_submit:hover,
                                .bp-login-widget-user-logout a:hover,
                                .bbp_widget_login a.button:hover,
                                .bbp-submit-wrapper button:hover,
                                #bp-login-widget-submit:hover,
                                #searchsubmit:hover,
                                a.comment-reply-link.button:hover,
                                .woocommerce li.product .add-request-quote-button.button:hover, .woocommerce .summary .add-request-quote-button.button:hover,
                                .my_account_orders td.order-actions a.track-button:hover,
                                .woocommerce-cart-notice a.button:hover,
                                .variations_button .single_add_to_cart_button.button.alt:hover',
                'properties' => 'color'
            )
        )
    ),

    array(
        'id'         => 'button-black-border-color-ghost',
        'type'       => 'colorpicker',
        'variations' => array(
            'normal' => __( 'Border color', 'yit' ),
            'hover'  => __( 'Border hover color', 'yit' )
        ),
        'linked_to'  => array(
            'normal' => 'theme-color-2'
        ),
        'name'       => __( 'Black Ghost Buttons border color', 'yit' ),
        'desc'       => __( 'Select a color for the ghost buttons border of all pages.', 'yit' ),
        'std'        => array(
            'color' => array(
                'normal' => '#454545 ',
                'hover'  => '#454545 '
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => '.btn-ghost, a.btn-ghost,
                                 .blog .more-link, .blog a.read-more,
                                 .widget_search #searchsubmit,
                                 .price-table div.button-container a.btn-alternative,
                                 .pricing_box.price-table.large div.button-container a,
                                 button.single_add_to_cart_button.button,
                                 #commentform #submit,
                                 ul.products li.product.list .product-action-button a,
                                 .wishlist_table .add_to_cart.button,
                                 a.yith-wcan-reset-navigation.button,
                                 .woocommerce.widget_product_search input[type="submit"],
                                 .widget_price_filter .button,
                                 li.eg-item-skin-1-wrapper .btn-eg a,
                                 #buddypress div.generic-button a,
                                 #buddypress a.button,
                                 #buddypress #group-creation-previous,
                                 #buddypress #delete_inbox_messages,
                                 #buddypress #delete_sentbox_messages,
                                 #buddypress div.activity-meta a.button,
                                 .yit_shortcodes.recent-post .blog .read-more,
                                 #my-account-content input[type="submit"],
                                 .woocommerce-MyAccount-content input[type="submit"],
                                 .woocommerce-message .button.wc-forward,
                                 .woocommerce .login-form-checkout .button,
                                 .woocommerce.widget.widget_product_search #searchform #searchsubmit,
                                 #bbpress-forums button,
                                 #bbp-search-form #bbp_search_submit,
                                 .bp-login-widget-user-logout a,
                                 .bbp_widget_login a.button,
                                 .bbp-submit-wrapper button,
                                 #bp-login-widget-submit,
                                 #searchsubmit,
                                 a.comment-reply-link.button,
                                 .woocommerce li.product .add-request-quote-button.button, .woocommerce .summary .add-request-quote-button.button,
                                 .my_account_orders td.order-actions a.track-button,
                                 .woocommerce-cart-notice a.button,
                                .variations_button .single_add_to_cart_button.button.alt',
                'properties' => 'border-color'
            ),
            'hover'  => array(
                'selectors'  => '.btn-ghost:hover,
                                 .blog .more-link:hover, .blog a.read-more:hover,
                                 .widget_search #searchsubmit:hover,
                                 .price-table div.button-container a.btn-alternative:hover,
                                 .pricing_box.price-table.large div.button-container a:hover,
                                 button.single_add_to_cart_button.button:hover,
                                 #commentform #submit:hover,
                                 ul.products li.product.list .product-action-button a:hover,
                                 .wishlist_table .add_to_cart.button:hover,
                                 a.yith-wcan-reset-navigation.button:hover,
                                 .woocommerce.widget_product_search input[type="submit"]:hover,
                                 .widget_price_filter .button:hover,
                                 .yit_shortcodes.recent-post .blog .read-more:hover,
                                 #buddypress div.generic-button a:hover,
                                 #buddypress a.button:hover,
                                 #buddypress #group-creation-previous:hover,
                                 #buddypress #delete_inbox_messages:hover,
                                 #buddypress #delete_sentbox_messages:hover,
                                 #buddypress div.activity-meta a.button:hover,
                                 #my-account-content input[type="submit"]:hover,
                                 .woocommerce-MyAccount-content input[type="submit"]:hover,
                                 li.eg-item-skin-1-wrapper .btn-eg a:hover,
                                 li.eg-item-skin-1-wrapper:hover .btn-eg a,
                                 .woocommerce-message .button.wc-forward:hover,
                                 .woocommerce .login-form-checkout .button:hover,
                                 #bbpress-forums button:hover,
                                 .woocommerce.widget.widget_product_search #searchform #searchsubmit:hover,
                                 #bbp-search-form #bbp_search_submit:hover,
                                 .bp-login-widget-user-logout a.logout:hover,
                                 .bbp_widget_login a.button:hover,
                                 .bbp-submit-wrapper button:hover,
                                 #bp-login-widget-submit:hover,
                                 #searchsubmit:hover,
                                 a.comment-reply-link.button:hover,
                                 .woocommerce li.product .add-request-quote-button.button:hover, .woocommerce .summary .add-request-quote-button.button:hover,
                                 .my_account_orders td.order-actions a.track-button:hover,
                                 .woocommerce-cart-notice a.button:hover,
                                .variations_button .single_add_to_cart_button.button.alt:hover',
                'properties' => 'border-color'
            )
        )
    ),

    array(
        'id'         => 'button-black-background-color-ghost',
        'type'       => 'colorpicker',
        'variations' => array(
            'normal' => __( 'Background color', 'yit' ),
            'hover'  => __( 'Background hover color', 'yit ' )
        ),
        'linked_to'  => array(
            'hover' => 'theme-color-3'
        ),
        'name'       => __( 'Black Ghost Buttons background color', 'yit' ),
        'desc'       => __( 'Select a color for the ghost buttons background of all pages.', 'yit' ),
        'std'        => array(
            'color' => array(
                'normal' => 'transparent',
                'hover'  => '#454545'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => 'a.btn-ghost, .btn-ghost,
                                .blog .more-link, .blog a.read-more,
                                #commentform #submit,
                                .widget_search #searchsubmit,
                                .blog .more-link, .blog a.read-more,
                                button.single_add_to_cart_button.button,
                                .price-table .btn.btn-alternative,
                                ul.products li.product.list .product-action-button a,
                                .wishlist_table .add_to_cart.button,
                                a.yith-wcan-reset-navigation.button,
                                .woocommerce.widget_product_search input[type="submit"],
                                .widget_price_filter .button,
                                #my-account-content input[type="submit"],
                                .woocommerce-MyAccount-content input[type="submit"],
                                li.eg-item-skin-1-wrapper .btn-eg a,
                                #buddypress div.generic-button a,
                                #buddypress a.button,
                                #buddypress #group-creation-previous,
                                #buddypress #delete_inbox_messages,
                                #buddypress #delete_sentbox_messages,
                                #buddypress div.activity-meta a.button,
                                .woocommerce-message .button.wc-forward,
                                .woocommerce .login-form-checkout .button,
                                .woocommerce.widget.widget_product_search #searchform #searchsubmit,
                                #bbpress-forums button,
                                #bbp-search-form #bbp_search_submit,
                                .bp-login-widget-user-logout a,
                                .bbp_widget_login a.button,
                                .bbp-submit-wrapper button,
                                #bp-login-widget-submit,
                                #searchsubmit,
                                a.comment-reply-link.button,
                                .woocommerce li.product .add-request-quote-button.button, .woocommerce .summary .add-request-quote-button.button,
                                .my_account_orders td.order-actions a.track-button,
                                .woocommerce-cart-notice a.button,
                                .variations_button .single_add_to_cart_button.button.alt',
                'properties' => 'background-color, background'
            ),
            'hover'  => array(
                'selectors'  => '.btn-ghost:hover,
                                .blog .more-link:hover, .blog a.read-more:hover,
                                #commentform #submit:hover,
                                 a.btn-ghost:hover,
                                .widget_search #searchsubmit:hover,
                                .price-table .btn.btn-alternative:hover,
                                button.single_add_to_cart_button.button:hover,
                                .blog .more-link:hover, .blog a.read-more:hover,
                                ul.products li.product.list .product-action-button a:hover,
                                .wishlist_table .add_to_cart.button:hover,
                                a.yith-wcan-reset-navigation.button:hover,
                                .woocommerce.widget_product_search input[type="submit"]:hover,
                                .widget_price_filter .button:hover,
                                #my-account-content input[type="submit"]:hover,
                                .woocommerce-MyAccount-content input[type="submit"]:hover,
                                li.eg-item-skin-1-wrapper:hover .btn-eg a,
                                li.eg-item-skin-1-wrapper .btn-eg a:hover,
                                #buddypress a.button:hover,
                                #buddypress #group-creation-previous:hover,
                                #buddypress #delete_inbox_messages,
                                #buddypress #delete_sentbox_messages,
                                #buddypress div.activity-meta a.button:hover,
                                #buddypress div.generic-button a:hover,
                                .woocommerce-message .button.wc-forward:hover,
                                .woocommerce .login-form-checkout .button:hover,
                                .woocommerce.widget.widget_product_search #searchform #searchsubmit:hover,
                                #bbpress-forums button:hover,
                                #bbp-search-form #bbp_search_submit:hover,
                                .bp-login-widget-user-logout a:hover,
                                .bbp_widget_login a.button:hover,
                                .bbp-submit-wrapper button:hover,
                                #bp-login-widget-submit:hover,
                                #searchsubmit:hover,
                                a.comment-reply-link.button:hover,
                                .woocommerce li.product .add-request-quote-button.button:hover, .woocommerce .summary .add-request-quote-button.button:hover,
                                .my_account_orders td.order-actions a.track-button:hover,
                                .woocommerce-cart-notice a.button:hover,
                                .variations_button .single_add_to_cart_button.button.alt:hover',
                'properties' => 'background-color, background'
            )
        )
    ),

    array(
        'type' => 'title',
        'name' => __( 'Ghost White Button', 'yit' ),
        'desc' => ''
    ),

    array(
        'id'              => 'button-white-ghost-font',
        'type'            => 'typography',
        'name'            => __( 'White Ghost Buttons Typography', 'yit' ),
        'desc'            => __( 'Select the typography for ghost buttons text.', 'yit' ),
        'min'             => 1,
        'max'             => 80,
        'default_font_id' => 'typography-website-title',
        'std'             => array(
            'size'      => 12,
            'unit'      => 'px',
            'family'    => 'default',
            'style'     => 'regular',
            'transform' => 'uppercase',
        ),
        'style'           => array(
            'selectors'  => '.btn-ghost-white,
                             a.btn-ghost-white',
            'properties' => 'font-size,
                             font-family,
                             font-weight,
                             text-transform'
        )
    ),

    array(
        'id'         => 'button-white-hover-color-ghost',
        'type'       => 'colorpicker',
        'name'       => __( 'White Ghost Buttons Text Color', 'yit' ),
        'desc'       => __( 'Select the color of the text for the ghost buttons of every page', 'yit' ),
        'variations' => array(
            'normal' => __( 'Text color', 'yit' ),
            'hover'  => __( 'Text hover color', 'yit ' )
        ),
        'std'        => array(
            'color' => array(
                'normal' => '#ffffff',
                'hover'  => '#000000'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => '.btn-ghost-white, a.btn-ghost-white, .btn.btn-ghost-white i.fa',
                 'properties' => 'color'
            ),
            'hover'  => array(
                'selectors'  => '.btn-ghost-white:hover,
                                a.btn-ghost-white:hover,
                                .btn.btn-ghost-white i.fa:hover,
                                .btn.btn-ghost-white:hover i.fa',
                'properties' => 'color'
            )
        )
    ),

    array(
        'id'         => 'button-white-border-color-ghost',
        'type'       => 'colorpicker',
        'variations' => array(
            'normal' => __( 'Border color', 'yit' ),
            'hover'  => __( 'Border hover color', 'yit' )
        ),
        'linked_to'  => array(
            'normal' => 'theme-color-2'
        ),
        'name'       => __( 'Ghost Buttons border color', 'yit' ),
        'desc'       => __( 'Select a color for the ghost buttons border of all pages.', 'yit' ),
        'std'        => array(
            'color' => array(
                'normal' => '#ffffff',
                'hover'  => '#ffffff'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => '.btn-ghost-white, a.btn-ghost-white',
                'properties' => 'border-color'
            ),
            'hover'  => array(
                'selectors'  => '.btn-ghost-white:hover',
                'properties' => 'border-color'
            )
        )
    ),

    array(
        'id'         => 'button-white-background-color-ghost',
        'type'       => 'colorpicker',
        'variations' => array(
            'normal' => __( 'Background color', 'yit' ),
            'hover'  => __( 'Background hover color', 'yit ' )
        ),
        'linked_to'  => array(
            'hover' => 'theme-color-3'
        ),
        'name'       => __( 'White Ghost Buttons background color', 'yit' ),
        'desc'       => __( 'Select a color for the ghost buttons background of all pages.', 'yit' ),
        'std'        => array(
            'color' => array(
                'normal' => 'transparent',
                'hover'  => '#ffffff'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => 'a.btn-ghost-white, .btn-ghost-white',
                'properties' => 'background-color, background'
            ),
            'hover'  => array(
                'selectors'  => '.btn-ghost-white:hover,
                                a.btn-ghost-white:hover',
                'properties' => 'background-color, background'
            )
        )
    ),

    array(
        'type' => 'title',
        'name' => __( 'Ghost Red Button', 'yit' ),
        'desc' => ''
    ),

    array(
        'id'              => 'button-ghost-red-font',
        'type'            => 'typography',
        'name'            => __( 'Red Ghost Buttons Typography', 'yit' ),
        'desc'            => __( 'Select the typography for alternative ghost buttons text.', 'yit' ),
        'min'             => 1,
        'max'             => 80,
        'default_font_id' => 'typography-website-title',
        'std'             => array(
            'size'      => 12,
            'unit'      => 'px',
            'family'    => 'default',
            'style'     => '400',
            'transform' => 'uppercase',
        ),
        'style'           => array(
            'selectors'  => '.btn-ghost-red,
                            .btn-alternative,
                            #buddypress div.item-list-tabs ul li a span,
                            a.btn-ghost-red,
                            a.stop-reply.button',
            'properties' => 'font-size,
                             font-family,
                             font-weight,
                             text-transform'
        )
    ),

    array(
        'id'         => 'button-ghost-red-color',
        'type'       => 'colorpicker',
        'name'       => __( 'Red Ghost Buttons Text Color', 'yit' ),
        'desc'       => __( 'Select the color of the text for the ghost alternative buttons of every page', 'yit' ),
        'variations' => array(
            'normal' => __( 'Text color', 'yit' ),
            'hover'  => __( 'Text hover color', 'yit ' )
        ),
        'std'        => array(
            'color' => array(
                'normal' => '#871818',
                'hover'  => '#ffffff '
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => 'a.btn-ghost-red, .btn-ghost-red,  .btn.btn-ghost-red i.fa,
                .btn-alternative,
                a.stop-reply.button',
                'properties' => 'color'
            ),
            'hover'  => array(
                'selectors'  => 'a.btn-ghost-red:hover, .btn-ghost-red:hover, .btn.btn-ghost-red:hover i.fa,
                                .btn-alternative:hover,
                                #buddypress div.item-list-tabs ul li a span:hover,
                                #buddypress div.item-list-tabs ul li a span,
                                #nav .menu-item .highlight-inverse,
                                .btn.btn-ghost-red i.fa:hover,
                                a.stop-reply.button:hover',
                'properties' => 'color'
            )
        )
    ),

    array(
        'id'         => 'button-border-color-ghost-red',
        'type'       => 'colorpicker',
        'variations' => array(
            'normal' => __( 'Border color', 'yit' ),
            'hover'  => __( 'Border hover color', 'yit' )
        ),
        'name'       => __( 'Red Ghost Buttons border color', 'yit' ),
        'desc'       => __( 'Select a color for the ghost alternative buttons border of all pages.', 'yit' ),
        'std'        => array(
            'color' => array(
                'normal' => '#871818 ',
                'hover'  => '#871818 '
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => 'a.btn-ghost-red, .btn-ghost-red, .btn-alternative,a.stop-reply.button',
                'properties' => 'border-color'
            ),
            'hover'  => array(
                'selectors'  => 'a.btn-ghost-red, .btn-ghost-red:hover, .btn-alternative:hover, a.stop-reply.button:hover',
                'properties' => 'border-color'
            )
        )
    ),

    array(
        'id'         => 'button-background-color-ghost-red',
        'type'       => 'colorpicker',
        'variations' => array(
            'normal' => __( 'Background color', 'yit' ),
            'hover'  => __( 'Background hover color', 'yit ' )
        ),
        'name'       => __( 'Red Ghost Buttons background color', 'yit' ),
        'desc'       => __( 'Select a color for the ghost alternative buttons background of all pages.', 'yit' ),
        'std'        => array(
            'color' => array(
                'normal' => 'transparent',
                'hover'  => '#871818'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => 'a.btn-ghost-red, .btn-ghost-red, .btn-alternative,a.stop-reply.button',
                'properties' => 'background-color, background'
            ),
            'hover'  => array(
                'selectors'  => 'a.btn-ghost-red:hover, .btn-ghost-red:hover, .btn-alternative:hover,
                #nav .menu-item .highlight-inverse,
                #buddypress div.item-list-tabs ul li a:hover span,
                #buddypress div.item-list-tabs ul li.current a span,
                #buddypress div.item-list-tabs ul li.selected a span,
                #buddypress div.item-list-tabs ul li a span,
                #buddypress div.item-list-tabs ul li a span:hover,
                a.stop-reply.button:hover',
                'properties' => 'background-color, background'
            )
        )
    ),

    array(
        'type' => 'title',
        'name' => __( 'Ghost Grey Button', 'yit' ),
        'desc' => ''
    ),

    array(
        'id'              => 'button-grey-ghost-font',
        'type'            => 'typography',
        'name'            => __( 'Grey Ghost Buttons Typography', 'yit' ),
        'desc'            => __( 'Select the typography for ghost buttons text.', 'yit' ),
        'min'             => 1,
        'max'             => 80,
        'default_font_id' => 'typography-website-title',
        'std'             => array(
            'size'      => 12,
            'unit'      => 'px',
            'family'    => 'default',
            'style'     => '600',
            'transform' => 'uppercase',
        ),
        'style'           => array(
            'selectors'  => '.btn-ghost-grey, .comment-reply-link',
            'properties' => 'font-size,
                             font-family,
                             font-weight,
                             text-transform'
        )
    ),

    array(
        'id'         => 'button-grey-hover-color-ghost',
        'type'       => 'colorpicker',
        'name'       => __( 'Grey Ghost Buttons Text Color', 'yit' ),
        'desc'       => __( 'Select the color of the text for the ghost buttons of every page', 'yit' ),
        'variations' => array(
            'normal' => __( 'Text color', 'yit' ),
            'hover'  => __( 'Text hover color', 'yit ' )
        ),
        'std'        => array(
            'color' => array(
                'normal' => '#b1b1b1',
                'hover'  => '#ffffff'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => '.btn-ghost-grey, .comment-reply-link, .comment-reply-link:visited',
                 'properties' => 'color'
            ),
            'hover'  => array(
                'selectors'  => '.btn-ghost-grey:hover, .comment-reply-link:hover',
                'properties' => 'color'
            )
        )
    ),

    array(
        'id'         => 'button-grey-border-color-ghost',
        'type'       => 'colorpicker',
        'variations' => array(
            'normal' => __( 'Border color', 'yit' ),
            'hover'  => __( 'Border hover color', 'yit' )
        ),
        'linked_to'  => array(
            'normal' => 'theme-color-3'
        ),
        'name'       => __( 'Grey Ghost Buttons border color', 'yit' ),
        'desc'       => __( 'Select a color for the ghost buttons border of all pages.', 'yit' ),
        'std'        => array(
            'color' => array(
                'normal' => '#adadad ',
                'hover'  => '#adadad '
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => '.btn-ghost-grey, .comment-reply-link',
                'properties' => 'border-color'
            ),
            'hover'  => array(
                'selectors'  => '.btn-ghost-grey:hover, .comment-reply-link:hover',
                'properties' => 'border-color'
            )
        )
    ),

    array(
        'id'         => 'button-grey-background-color-ghost',
        'type'       => 'colorpicker',
        'variations' => array(
            'normal' => __( 'Background color', 'yit' ),
            'hover'  => __( 'Background hover color', 'yit ' )
        ),
        'linked_to'  => array(
            'hover' => 'theme-color-3'
        ),
        'name'       => __( 'Grey Ghost Buttons background color', 'yit' ),
        'desc'       => __( 'Select a color for the ghost buttons background of all pages.', 'yit' ),
        'std'        => array(
            'color' => array(
                'normal' => 'transparent',
                'hover'  => '#adadad'
            )
        ),
        'style'      => array(
            'normal' => array(
                'selectors'  => '.btn-ghost-grey, .comment-reply-link',
                'properties' => 'background-color, background'
            ),
            'hover'  => array(
                'selectors'  => '.btn-ghost-grey:hover, .comment-reply-link:hover',
                'properties' => 'background-color, background'
            )
        )
    ),
);

