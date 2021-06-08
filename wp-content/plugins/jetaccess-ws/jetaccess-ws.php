<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://weareuv.com/
 * @since             1.0.0
 * @package           Jetaccess_Ws
 *
 * @wordpress-plugin
 * Plugin Name:       JetAccess WS2
 * Plugin URI:        https://weareuv.com/
 * Description:       Connect wp with jetAccess API for update inventory
 * Version:           1.1.0
 * Author:            Mark Montes
 * Author URI:        https://weareuv.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       jetaccess-ws
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'JETACCESS_WS_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-jetaccess-ws-activator.php
 */
function activate_jetaccess_ws() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-jetaccess-ws-activator.php';
	Jetaccess_Ws_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-jetaccess-ws-deactivator.php
 */
function deactivate_jetaccess_ws() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-jetaccess-ws-deactivator.php';
	Jetaccess_Ws_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_jetaccess_ws' );
register_deactivation_hook( __FILE__, 'deactivate_jetaccess_ws' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-jetaccess-ws.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_jetaccess_ws() {

	$plugin = new Jetaccess_Ws();
	$plugin->run();

}
run_jetaccess_ws();
