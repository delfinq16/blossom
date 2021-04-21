<?php
/**
 * Checkout coupon form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-coupon.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

if ( ! wc_coupons_enabled() ) {
    return;
}

?>

<div class="coupon-form-checkout">

    <p class="coupon_link">
        <?php echo apply_filters( 'woocommerce_checkout_coupon_message', __( 'Have a coupon?', 'yit' ) . '<a href="#" class="showcoupon">' . __( 'Click here to enter your code', 'yit' ) . '</a>' ); ?>
    </p>

    <form class="checkout_coupon" method="post" style="display:none">

        <p class="form-row form-row-wide">
            <input type="text" name="coupon_code" class="input-text" placeholder="<?php _e( 'Coupon code', 'yit' ); ?>" id="coupon_code" value="" />
        </p>

        <p class="form-row form-row-wide input-button">
            <input type="submit" class="btn btn-ghost" name="apply_coupon" value="<?php _e( 'Apply Coupon', 'yit' ); ?>" />
        </p>

        <div class="clear"></div>
    </form>

</div>