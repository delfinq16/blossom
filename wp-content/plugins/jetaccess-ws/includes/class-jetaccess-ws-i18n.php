<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://weareuv.com/
 * @since      1.0.0
 *
 * @package    Jetaccess_Ws
 * @subpackage Jetaccess_Ws/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Jetaccess_Ws
 * @subpackage Jetaccess_Ws/includes
 * @author     Mark Montes <mmontes@unitedvirtualities.com>
 */
class Jetaccess_Ws_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'jetaccess-ws',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
