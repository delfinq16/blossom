<?php
/**
 * WooCommerce POS API setup.
 *
 * @author   Webkul
 *
 * @category API
 *
 * @since    3.2.0
*/

namespace WKWC_POS\Api\Includes\Orders;

use WKWC_POS\Api\Inc\WKWCPOS_API_Error_Handler;
use WKWC_POS\Api\Includes\WKWCPOS_API_Authentication;
use WKWC_POS\Includes\Woo_Coupon;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

class WKWCPOS_API_Coupon_Check {
    /**
     * Base Name.
     *
     * @var string the route base
     */
    public $base = 'check-coupon';

    /**
     * Namespace Name.
     *
     * @var string the route namespace
     */
    public $namespace = 'pos/v1';

    /**
     * Constructor.
     */
    public function __construct()
    {
        $this->error = new WKWCPOS_API_Error_Handler();
        $this->authentication = new WKWCPOS_API_Authentication();
    }

    /**
     * API Callback.
     */
    public function check_coupon_online($request)
    {
        try {

            $user_id = $request['logged_in_user_id'];

			$validate_auth_key = $this->authentication->wkwcpos_authenticate_request( $user_id );

            if ( $validate_auth_key != 'ok' ) {
                return array(
                    'session_id'  => $validate_auth_key,
                    'status'      => 401,
                    'invalid_auth_key_error' => __( 'Please provide valid Auth Key.', 'wc_pos' ),
                    'success'     => false,
                );
            }

            if (isset($request['coupon_code'])) {
                $res = array();

                $ccode = strip_tags($request['coupon_code']);

                $customer_email = $request['customer'][0]['id'];

                if (!empty($ccode)) {

                    $woo_coupon = new Woo_Coupon();

                    $coup_code = $woo_coupon->get_coupon_by_code($ccode);

                    $WC_Coupon_Data_Store_CPT = new \WC_Coupon_Data_Store_CPT();

                    $coup_obj = new \WC_Coupon($ccode);

                    $used_by_customer = $WC_Coupon_Data_Store_CPT->get_usage_by_user_id( $coup_obj, $customer_email );
                    
                    $total_usage_by_customer = $coup_obj->get_usage_limit_per_user();

                    if( empty( $total_usage_by_customer ) || ( $total_usage_by_customer - $used_by_customer ) > 0 ){
                        
                        if (is_array($coup_code) && !empty($coup_code['coupon'])) {

                            if( empty( $coup_code['coupon']['date_expires'] ) || strtotime( current_time( 'Y-m-d' ) ) <= strtotime( $coup_code['coupon']['date_expires']->date( 'Y-m-d' ) ) ) {
    
                                $res['coupon'] = array(
                                    'code'               => $coup_code['coupon']['code'],
                                    'price'              => $coup_code['coupon']['amount'],
                                    'type'               => $coup_code['coupon']['type'],
                                    'product_ids'        => $coup_code['coupon']['product_ids'],
                                    'product_categories' => $coup_code['coupon']['product_categories'],
                                );
    
                                $res['coupon'] = apply_filters( 'wkwcpos_modify_applied_coupon_at_pos', $res['coupon'], $user_id, $ccode );
    
                                $res['success'] = true;
    
                            } else {
                                $res['error'] = esc_html__( 'Sorry, Coupon Expired. Try another one!', 'wc_pos' );
                            }
                        } elseif (is_object($coup_code) && isset($coup_code->errors)) {
                            $res['error'] = $coup_code->errors['woocommerce_api_invalid_coupon_code'][0];
                        } else {
                            $res['error'] = esc_html__('Invalid Coupon Code', 'wc_pos');
                        }
                    }else{
                        $res['error'] = esc_html__( 'Sorry, Coupon already used at limit by this customer.', 'wc_pos' );
                    }


                } else {
                    $res['msg'] = esc_html__('Invalid Coupon', 'wc_pos');
                }

                return $res;
            }
        } catch (Exception $e) {
            return $this->error->set('exception', $e);
        }
    }

}
