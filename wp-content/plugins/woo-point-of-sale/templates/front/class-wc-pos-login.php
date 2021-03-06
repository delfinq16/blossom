<?php
/**
 * Template Name: Login Page pos.
 *
 * Login Page Template.
 *
 * @author Webkul
 *
 * @since 1.0.0
 */

namespace WKWC_POS\Templates\Front;

use WKWC_POS\Helper;

if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('WC_Pos_Login')) {
    class WC_Pos_Login extends Helper\User\WC_Pos_User_Helper
    {
        public function __construct()
        {
            $this->wk_wc_get_pos_login_template();
        }

        public function wk_wc_get_pos_login_template()
        {
            ?>

            <!DOCTYPE html>
            <html <?php language_attributes(); ?>>
            <head>
                <title><?php echo get_bloginfo(); ?></title>
                <meta charset="<?php bloginfo('charset'); ?>">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
                <link rel="profile" href="http://gmpg.org/xfn/11">
                <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
                <link rel="manifest" href="<?php echo esc_url(site_url('/wkwcpos-manifest.json')); ?>" />
                <?php wp_head(); ?>
            </head>

            <body>
                <!-- section -->
                <?php

                // In case of a login error.
                if (isset($_GET['login']) && $_GET['login'] == 'failed') : ?>
                        <div class="pos_error">
                            <p><?php _e('FAILED: Try again!', 'wc_pos'); ?></p>
                        </div>
                    <?php
                endif;

            // If user is already logged in.
            if (is_user_logged_in()) :

                $user_id = get_current_user_id();

            $user = get_userdata($user_id);

            $user_roles = $user->roles;

            if (!empty($user_roles) && in_array('pos_user', $user_roles)) :

                    ?>
                        <!-- //react elemnent -->
                        <div id="app"></div>

                        <div class="invoice-printer" id="invoice-print">

                            <div class="invoice-body" id="invoice-body"></div>

                        </div>

                    <?php

                endif;

            // If user is not logged in.
            else :

                $pos_heading = !empty(get_option('_pos_heading_login')) ? get_option('_pos_heading_login') : 'Point Of Sale (POS) System';
            $pos_brand_name = !empty(get_option('_pos_footer_brand_name')) ? get_option('_pos_footer_brand_name') : '';
            $pos_brand_link = !empty(get_option('_pos_footer_brand_link')) ? get_option('_pos_footer_brand_link') : ''; ?>

                <section class="pos_loginForm">

                    <div class="pos-form-wrap">

                        <div class='pos-login-wrap'>

                            <div class="home-div">

                                <h2><b><?php echo esc_html($pos_heading).' '.esc_html__('(POS) System', 'wc_pos'); ?></b></h2>

                                <div class="text-center login-div">

                                    <h2><b><?php echo esc_html__('LOGIN TO YOUR ACCOUNT', 'wc_pos'); ?></b></h2>

                                    <p class="wkwcpos-login-error"><?php esc_html_e('Please enter all fields for login.', 'wc_pos'); ?></p>

                                    <?php

                                    // Login form arguments.
                                    $args = array(
                                        'echo' => true,
                                        'redirect' => home_url('/pos/'),
                                        'form_id' => 'posloginform',
                                        'label_username' => __('Username', 'wc_pos'),
                                        'label_password' => __('Password', 'wc_pos'),
                                        'label_remember' => __('Remember Me', 'wc_pos'),
                                        'label_log_in' => __('Log In', 'wc_pos'),
                                        'id_username' => 'user_login',
                                        'id_password' => 'user_pass',
                                        'id_remember' => 'rememberme',
                                        'id_submit' => 'pos-submit',
                                        'remember' => true,
                                        'value_username' => null,
                                        'value_remember' => true,
                                    );

            // Calling the login form.
            wp_login_form($args); ?>
                                </div>

                                <div class="pos-footer">
                                    <h3><?php echo esc_html__('POS System', 'wc_pos'); ?></h3>
                                    <p><?php echo esc_html__('A Product of', 'wc_pos'); ?> <a href="<?php echo $pos_brand_link; ?>" target="_blank"><b><?php echo $pos_brand_name; ?></b></a></p>
                                </div>

                            </div>


                        </div>
                    </div>

                    </section>

                <?php

            endif; ?>


            </body>

            <!-- Prompt a message in the browser if users disabled JS -->
            <noscript><?php esc_html_e('Your browser does not support JavaScript!', 'wc_pos'); ?></noscript>

            </html>

            <?php
        }
    }
}
