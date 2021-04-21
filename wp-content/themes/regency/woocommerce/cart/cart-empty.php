<?php
/**
 * Empty cart page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart-empty.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

?>

<div class="cart-empty col-sm-12">

    <h2 class="empty-message"><?php _e( 'Your cart is currently empty', 'yit' ) ?></h2>

    <p><?php _e( 'Your have not added any items in your shopping cart', 'yit' ) ?></p>

    <?php

    	wc_print_notices();

		/**
		 * @hooked wc_empty_cart_message - 10
		 */
		do_action( 'woocommerce_cart_is_empty' );

    ?>

    <div class="empty-button">
        <p>
            <a class="btn btn-ghost" href="<?php echo esc_url( apply_filters( 'woocommerce_return_to_shop_redirect', wc_get_page_permalink( 'shop' ) ) ); ?>">
            	<?php _e( 'Return to shop', 'woocommerce' ) ?>
            </a>
        </p>
    </div>

</div>
