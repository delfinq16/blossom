<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://weareuv.com/
 * @since      1.0.0
 *
 * @package    Jetaccess_Ws
 * @subpackage Jetaccess_Ws/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Jetaccess_Ws
 * @subpackage Jetaccess_Ws/admin
 * @author     Mark Montes <mmontes@unitedvirtualities.com>
 */
class Jetaccess_Ws_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Jetaccess_Ws_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Jetaccess_Ws_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/jetaccess-ws-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Jetaccess_Ws_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Jetaccess_Ws_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/jetaccess-ws-admin.js', array( 'jquery' ), $this->version, false );

	}

	public function display_admin_page() {
		add_submenu_page ( 
			'tools.php',
			'Jet Access WS',
			'Jet Access WS',
			'manage_options',
			'jet-access',
			array($this, 'show_page')
		);
	}

	public function show_page() {
		include plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/jetaccess-ws-admin-display.php';
	}


}
