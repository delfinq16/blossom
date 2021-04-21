<?php

/**
 * @author Webkul
 * @implements Assets_Interface
 */

namespace WKWC_POS\Includes\Front;

use WKWC_POS\Helper\Invoice\WKWCPOS_Invoice_Helper;

if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('WC_Pos_Script_Loader')) {

    class WC_Pos_Script_Loader implements Util\Assets_Interface
    {
        public function wk_wc_pos_Init()
        {
            add_action('admin_enqueue_scripts', array($this, 'wk_wc_pos_EnqueueScripts_Admin'));
            add_action('wp_enqueue_scripts', array($this, 'wk_wc_pos_EnqueueScripts_Front'));
        }

        /**
         * Admin scripts and style enqueue.
         */
        public function wk_wc_pos_EnqueueScripts_Admin()
        {

            $pages = [ 'pos-system', 'pos-outlets', 'pos-products', 'pos-orders', 'wc-pos-reports', 'wc-pos-invoice-templates', 'wc-pos-settings' ];

            if ( ! empty( $_GET[ 'page' ] ) && in_array( $_GET[ 'page' ], $pages ) ) {
    
                wp_enqueue_media();
    
                wp_enqueue_style('wk-wc-pos-style', WK_WC_POS_API . 'assets/css/admin.css');
    
                wp_enqueue_script('wk-wc-pos-select2-js', plugins_url() . '/woocommerce/assets/js/select2/select2.min.js', array('jquery'));
    
                wp_enqueue_style('wk-wc-pos-select2-css', plugins_url() . '/woocommerce/assets/css/select2.css');
    
                wp_enqueue_style('wk-wc-pos-woocommerce-admin-styles', WC()->plugin_url() . '/assets/css/admin.css', array(), WK_WC_POS_VERSION);
    
                wp_enqueue_style('wk-wc-pos-jquery-ui-style', WC()->plugin_url() . '/assets/css/jquery-ui/jquery-ui.min.css', array(), WK_WC_POS_VERSION);
    
                wp_enqueue_script('wk-wc-pos-admin-script', WK_WC_POS_API . '/assets/js/plugin-pos.js', array('jquery'), WK_WC_POS_VERSION);
    
                wp_register_script('wkwcpos-outlet-import', WK_WC_POS_API . '/assets/js/outlet-import.js', array('jquery'), WK_WC_POS_VERSION, true);
    
                wp_localize_script('wk-wc-pos-admin-script', 'wk_wc_apipos_script', array('api_admin_ajax' => admin_url('admin-ajax.php'), 'pos_api_nonce' => wp_create_nonce('api-ajaxnonce'), 'site_url' => site_url()));
    
                $dependencies = array( 'wp-components', 'wc-components', 'wkwcpos-navigation', 'wp-date', 'wp-i18n', 'moment', 'react', 'react-dom', 'wp-hooks', 'wp-util' );
                $dependencies = array( 'wp-components', 'wp-i18n', 'react', 'react-dom', 'wp-hooks' );
    
                wp_register_script('wkwcpos-invoice-script', WK_WC_POS_API . '/assets/dist/invoice/index.js', $dependencies, WK_WC_POS_VERSION, true);
    
                wp_register_style('wkwcpos-invoice-style', WK_WC_POS_API . '/assets/dist/invoice/style.css', [], WK_WC_POS_VERSION);
    
                wp_set_script_translations( 'wkwcpos-invoice-script', 'wc_pos' );

            }

        }

        public function wk_wc_pos_EnqueueScripts_Front()
        {

            global $wp;

            $query_vars = $wp->query_vars;

            if (array_key_exists('pos', $wp->query_vars) || (array_key_exists('pagename', $query_vars) && $query_vars['pagename'] == 'pos')) {

                wp_enqueue_style('wk-wc-pos-login-css', WK_WC_POS_API . '/assets/css/min/pos-login.min.css', array(), WK_WC_POS_VERSION);

                wp_enqueue_script('wk-wc-pos-login', WK_WC_POS_API . 'assets/js/min/pos-login.min.js', array('jquery'), WK_WC_POS_VERSION);

                if (is_user_logged_in()) {

                    ?>

                    <script type="text/javascript">
                        var wkwcpos_variables = {
                            HOME_URL: "<?php echo esc_url(WKWCPOS_HOME_URL); ?>",
                            WKWCPOS_SITE_URL: "<?php echo esc_url(WKWCPOS_SITE_URL); ?>",
                            WK_GET_SESSION_ID_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/get-session-id'); ?>",
                            WK_GET_ORDERS_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/get-orders'); ?>",
                            WK_GET_ALL_PRODUCTS_IDS_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/get-products-id'); ?>",
                            WK_GET_POPULAR_PRODUCTS_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/get-products'); ?>",
                            WK_CREATE_CUSTOMER_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/create-customer'); ?>",
                            WK_GET_CUSTOMERS_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/get-customers'); ?>",
                            WK_DELETE_CUSTOMER_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/delete-customer'); ?>",
                            WK_CREATE_ORDER_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/create-order'); ?>",
                            WK_CREATE_OFFLINE_ORDER_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/create-offline-order'); ?>",
                            WK_CHECK_STOCK_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/check-stock'); ?>",
                            WK_CHECK_COUPON_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/check-coupon'); ?>",
                            WK_GET_TAX_DETAILS_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/get-tax-details'); ?>",
                            WK_GET_ALL_CATEGORIES_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/get-all-categories'); ?>",
                            WK_UPDATE_MANAGER_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/update-manager'); ?>",
                            WK_GET_COUNTRIES_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/get-countries'); ?>",
                            WK_GET_STATES_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/get-states'); ?>",
                            WK_GET_ALL_CURRENCIES_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/currencies'); ?>",
                            WK_GET_SALE_HISTORY_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/get-sale-history'); ?>",
                            WK_CREATE_DRAWER_PERDAY_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/create-drawer-perday'); ?>",
                            WK_GET_INVOICE_TEMPLATE_ENDPOINT: "<?php echo esc_url(WKWCPOS_SITE_URL . '/wp-json/pos/v1/get-invoice-template'); ?>",
                            WK_USER_PKEY: "<?php echo !empty(get_option("wkwcpos_api_username")) ? esc_attr(base64_encode(get_option("wkwcpos_api_username"))) : ''; ?>",
                            WK_USER_PHASH: "<?php echo !empty(get_option("wkwcpos_api_password")) ? esc_attr(base64_encode(get_option("wkwcpos_api_password"))) : ''; ?>"
                        };
                    </script>

                    <?php

                    global $wpdb;

                    $url = esc_attr($_SERVER['REQUEST_URI']);

                    $dir = wp_upload_dir();
                    $user_id = get_current_user_id();

                    $user_data = get_userdata($user_id);
                    $fname = $user_data->user_firstname;
                    $lname = $user_data->user_lastname;
                    $email = $user_data->user_email;
                    $profile_pic = get_user_meta($user_id, 'shr_pic', true);

                    if (!empty($profile_pic)) {
                        $url = $dir['baseurl'];

                        $profile_pic = $url . $profile_pic;
                    }

                    $outlet_id = $wpdb->get_var( $wpdb->prepare( "SELECT outlet_id FROM {$wpdb->prefix}woocommerce_pos_outlet_map WHERE user_id=%d", $user_id ) );

                    $outlet_data = $wpdb->get_row($wpdb->prepare("SELECT * from {$wpdb->prefix}woocommerce_pos_outlets WHERE id = %d", $outlet_id), ARRAY_A);

                    if ( ! empty( $outlet_data ) ) {
                        $outlet_payment = ! empty( $outlet_data[ 'outlet_payment' ] ) ? $outlet_data[ 'outlet_payment' ] : [];

                        if( !empty( $outlet_payment ) ) {
                            $outlet_payment = implode( ', ', maybe_unserialize( $outlet_payment ) );
                            $outlet_payment = $wpdb->get_results("SELECT id, payment_slug, payment_name from {$wpdb->prefix}woocommerce_pos_payments WHERE id IN ( $outlet_payment )", ARRAY_A);
                            $outlet_payment = maybe_unserialize( $outlet_payment );

                        } else {
                            $outlet_payment = [];
                        }

                    }

                    $value = array(
                        'id' => '0',
                        'payment_slug' => 'card',
                        'payment_name' => __( 'Card Payment', 'wc_pos' ),
                    );

                    array_push( $outlet_payment, (object) $value );

                    $logo_invoice = get_option('_pos_invoice_logo');

                    if (!empty($logo_invoice)) {
                        $logo_invoice = $dir['baseurl'].$logo_invoice;
                    } else {
                        $logo_invoice = WK_WC_POS_API. '/assets/images/17241-200.png';
                    }

                    $user = apply_filters( 'wkwcpos_modify_default_user_data', array(
                        'user_id'          => $user_id,
                        'outlet_id'        => $outlet_id,
                        'outlet_data'      => $outlet_data,
                        'pos_user_phone'   => get_user_meta($user_id, 'billing_phone', true),
                        'pos_user'         => $user_data,
                        'logo_invoice'     => $logo_invoice,
                        'fname'            => $fname,
                        'lname'            => $lname,
                        'email'            => $email,
                        'profile_pic'      => $profile_pic,
                        'payment_option'   => maybe_unserialize( $outlet_payment ),
                        'tax_type'         => get_option('woocommerce_prices_include_tax'),
                        'current_date'     => date_i18n('D M j, Y'),
                        'difference'       => !empty(get_option('_define_difference_after_absolute')) ? intval(get_option('_define_difference_after_absolute')) : 5,
                        'tax_display_cart' => get_option( 'woocommerce_tax_display_cart' ),
                    ) );

                    $pos_variable_arr = wkwcpos_get_all_pos_variable();

                    $logout_url = wp_logout_url(home_url('/pos'));

                    wp_enqueue_style('wk-wc-pos-fontstyle-style', WK_WC_POS_API . 'assets/css/min/font-awesome.min.css');

                    wp_enqueue_style('wk-wc-pos-basic-style', WK_WC_POS_API . 'assets/css/min/basic.min.css');

                    wp_enqueue_style('wk-wc-pos-notifier-style', WK_WC_POS_API . 'assets/css/min/jquery-confirm.min.css');

                    wp_enqueue_script('wk-wc-pos-notifier-script', WK_WC_POS_API . 'assets/js/min/jquery-confirm.min.js', array('jquery'), WK_WC_POS_VERSION);

                    $centralized_inventory_enabled = apply_filters('wk_wc_pos_enable_centralized_inventory', false);

                    $order_process_type = !empty( get_option( '_pos_type_of_orders' ) ) ? get_option( '_pos_type_of_orders' ) : 'online';

                    wp_register_script(
                        'wc-csv',
                        self::get_url( 'csv-export/index', 'js' ),
                        array( 'moment' ),
                        WK_WC_POS_VERSION,
                        true
                    );

                    wp_register_script(
                        'wc-currency',
                        self::get_url( 'currency/index', 'js' ),
                        array( 'wc-number' ),
                        WK_WC_POS_VERSION,
                        true
                    );

                    wp_set_script_translations( 'wc-currency', 'woocommerce' );

                    wp_register_script(
                        'wc-date',
                        self::get_url( 'date/index', 'js' ),
                        array( 'moment', 'wp-date', 'wp-i18n' ),
                        WK_WC_POS_VERSION,
                        true
                    );

                    wp_register_script(
                        'wc-number',
                        self::get_url( 'number/index', 'js' ),
                        array(),
                        WK_WC_POS_VERSION,
                        true
                    );

                    wp_set_script_translations( 'wc-date', 'woocommerce' );

                    wp_register_script(
                        'wc-components',
                        self::get_url( 'components/index', 'js' ),
                        array(
                            'moment',
                            'wp-api-fetch',
                            'wp-data',
                            'wp-element',
                            'wp-hooks',
                            'wp-html-entities',
                            'wp-i18n',
                            'wp-keycodes',
                            'wc-csv',
                            'wc-currency',
                            'wc-date',
                            'wkwcpos-navigation',
                            'wc-number',
                        ),
                        WK_WC_POS_VERSION,
                        true
                    );

                    wp_set_script_translations( 'wc-components', 'woocommerce' );

                    wp_register_style(
                        'wc-components',
                        self::get_url( 'components/style', 'css' ),
                        array(),
                        WK_WC_POS_VERSION
                    );
                    wp_style_add_data( 'wc-components', 'rtl', 'replace' );

                    wp_register_style(
                        'wc-components-ie',
                        self::get_url( 'components/ie', 'css' ),
                        array(),
                        WK_WC_POS_VERSION
                    );
                    wp_style_add_data( 'wc-components-ie', 'rtl', 'replace' );

                    wp_register_script(
                        'wkwcpos-navigation',
                        WK_WC_POS_API . 'assets/dist/navigation/index.js',
                        array(),
                        WK_WC_POS_VERSION
                    );

                    wp_set_script_translations( 'wkwcpos-navigation', 'wc_pos' );

                    $dependencies = apply_filters( 'wkwcpos_manage_script_dependencies', array( 'wp-components', 'wc-components', 'wkwcpos-navigation', 'wp-date', 'wp-i18n', 'moment', 'react', 'react-dom', 'wp-hooks', 'wp-util' ) );

                    // $dependencies = apply_filters( 'wkwcpos_manage_script_dependencies', array( 'wp-components','react', 'wkwcpos-navigation', 'react-dom', 'wp-hooks', 'wp-util' ) );

                    wp_enqueue_script(
                        'wk-wc-pos-script',
                        WK_WC_POS_API . 'assets/dist/app/index.js',
                        $dependencies,
                        WK_WC_POS_VERSION
                    );

                    wp_set_script_translations( 'wk-wc-pos-script', 'wc_pos' );

                    wp_enqueue_style('wk-wc-pos-css', WK_WC_POS_API . 'assets/dist/app/style.css', array('wp-components', 'wc-components', 'wc-components-ie'), WK_WC_POS_VERSION);

                    $localize_array = array(
                        'api_admin_ajax'                 => admin_url( 'admin-ajax.php' ),
                        'pos_api_nonce'                  => wp_create_nonce( 'api-ajaxnonce' ),
                        'logged_in'                      => $user,
                        'logout_url'                     => $logout_url,
                        'pos_tr'                         => $pos_variable_arr,
                        'assets'                         => WK_WC_POS_API . '/assets',
                        'wk_pos_validate_product_at_pay' => $centralized_inventory_enabled,
                        'order_process_type'             => $order_process_type,
                        'currency_format_num_decimals'   => esc_attr( wc_get_price_decimals() ),
                        'currency_format_symbol'         => get_woocommerce_currency_symbol(),
                        'currency_format_decimal_sep'    => esc_attr( wc_get_price_decimal_separator() ),
                        'currency_format_thousand_sep'   => esc_attr( wc_get_price_thousand_separator() ),
                        'currency_format'                => esc_attr( str_replace( array( '%1$s', '%2$s' ), array( '%s', '%v' ), get_woocommerce_price_format() ) ),   // For accounting JS.
                    );

                    wp_localize_script( 'wk-wc-pos-script', 'apif_script', $localize_array );

                    add_action( 'wp_enqueue_scripts', function () {
                        global $wp_styles;

                        foreach ( $wp_styles->queue as $s ) {
                            $pos_styles = [ 'wk-wc-pos-login-css', 'wk-wc-pos-fontstyle-style', 'wk-wc-pos-notifier-style', 'wk-wc-pos-css', 'wk-wc-pos-basic-style', 'wkposaddon-style', 'wkposaddon-flatpicker-style', 'wcpos-style', 'wc-components', 'wc-components-ie', 'wp-components' ];
                            $pos_styles = apply_filters( 'wkwcpos_add_custom_css', $pos_styles );
                            if ( ! in_array( $s, $pos_styles, true ) ) {
                                if (isset( $wp_styles->registered[ $s ] ) && $wp_styles->registered[ $s ] ) {
                                    wp_deregister_style( $wp_styles->registered[$s]->handle );
                                }
                            }
                        }
                    }, 10000 );

                    do_action( 'wkwcpos_enqueue_pos_scripts' );

                }

            }
        }

        public static function get_url( $file, $ext ) {
            $suffix = '';

            return plugins_url( self::get_path( $ext ) . $file . $suffix . '.' . $ext, WC_ADMIN_PLUGIN_FILE );
        }

        private static function get_path( $ext ) {
            return ( 'css' === $ext ) ? WC_ADMIN_DIST_CSS_FOLDER : WC_ADMIN_DIST_JS_FOLDER;
        }
    }
}
