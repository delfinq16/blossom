<?php

namespace WKWC_POS\Includes\Admin\Menu;

use WKWC_POS\Templates\Admin;
use WKWC_POS\Helper\Outlet\Importer\WKWCPOS_Outlet_Importer_Controller;

if ( !defined( 'ABSPATH' ) ) {
  exit;
}

if( ! class_exists( 'WC_Pos_Admin_Menu_Template' ) ) {

  /**
   *
   */
  class WC_Pos_Admin_Menu_Template {
    /**
    * Add Menu in Backend
    */

    function __construct() {

      $hook = add_menu_page( __( "Point of Sale", 'wc_pos' ), __( "Point of Sale", 'wc_pos' ), 'manage_woocommerce', 'pos-system', array( $this, 'wk_wc_pos_list_users' ), 'dashicons-networking', 55 );

      add_submenu_page('pos-system', __('Users', 'wc_pos'), __('Users', 'wc_pos'), 'manage_woocommerce', 'pos-system', array($this, 'wk_wc_pos_list_users'));
      
      add_submenu_page( 'pos-system', __("Outlets", 'wc_pos'), __("Outlets", 'wc_pos'), apply_filters( 'change_user_access_for_outlet_menu', 'manage_woocommerce' ), 'pos-outlets', array( $this, 'wk_wc_pos_outlets' ) );

      add_submenu_page( 'pos-system', __("Products", 'wc_pos'), __("Products", 'wc_pos'), 'manage_woocommerce', 'pos-products', array( $this, 'wk_wc_pos_products' ) );

      add_submenu_page( 'pos-system', __("Orders ", 'wc_pos'), __("Orders", 'wc_pos'), 'manage_woocommerce', 'pos-orders', array( $this, 'wk_wc_pos_orders' ) );

      add_submenu_page( 'pos-system', __("Reports", 'wc_pos'), __("Reports", 'wc_pos'), 'manage_woocommerce', 'wc-pos-reports', array( $this, 'wk_wc_pos_report_sales_by_date' ) );

      add_submenu_page( 'pos-system', __("Invoice Templates", 'wc_pos'), __("Invoice Templates", 'wc_pos'), 'manage_woocommerce', 'wc-pos-invoice-templates', array( $this, 'wkwcpos_get_invoice_templates' ) );

      do_action( 'wkwcpos_manage_submenus' );

      add_submenu_page( 'pos-system', __("Settings", 'wc_pos'), __("Settings", 'wc_pos'), 'manage_woocommerce', 'wc-pos-settings', array( $this, 'wk_wc_pos_settings' ) );

      add_action( 'load-'.$hook, array( $this, 'wk_wc_pos_screen_option' ) );

    }

    public function wk_wc_pos_list_users() {

      if( isset( $_GET['action'] ) && ( $_GET['action'] == 'add' || $_GET['action'] == 'edit' ) ) {
        new Admin\User\WC_Pos_Add_User();
      } else {
        new Admin\User\WC_Pos_User_List();
      }

    }

    public function wk_wc_pos_outlets() {

      if( ( isset( $_GET['action'] ) && $_GET['action'] == 'add' ) || ( isset( $_GET['outlet_action'] ) && $_GET['outlet_action'] == 'edit' ) ) {
        new Admin\Outlet\WC_Pos_Outlet_Tab_Manager();
      } else if( isset( $_GET['action'] ) && $_GET['action'] == 'outlet-import' ) {
        /**
         * The product importer.
         *
         * This has a custom screen - the Tools > Import item is a placeholder.
         * If we're on that screen, redirect to the custom one.
         */
          if ( defined( 'WP_LOAD_IMPORTERS' ) ) {
            wp_safe_redirect( admin_url( 'admin.php?&page=pos-outlets&action=outlet-import' ) );
            exit;
          }

          include_once WC_ABSPATH . 'includes/import/class-wc-product-csv-importer.php';

          $importer = new WKWCPOS_Outlet_Importer_Controller();
          $importer->dispatch();
      }
      else {
        new Admin\Outlet\WC_Pos_Outlet_List();
      }

    }

    public function wk_wc_pos_products() {

      new Admin\WC_Pos_Products_List();

    }

    public function wk_wc_pos_orders() {

      new Admin\WC_Pos_Outlet_Order_List();

    }

    public function wk_wc_pos_report_sales_by_date() {

      new Admin\Reports\WC_Pos_Report_Tab_Manager_Template();

    }

    public function wkwcpos_get_invoice_templates() {

      if( isset( $_GET['action'] ) && ( $_GET['action'] == 'add' || $_GET['action'] == 'edit' ) ) {
        new Admin\Invoice\WKWCPOS_Manage_Invoice_Template();
      } else {
        new Admin\Invoice\WKWCPOS_Invoice_Template_list();
      }

    }

    public function wk_wc_pos_settings() {

      new Admin\WC_Pos_Settings_Template();

    }

    public function wk_wc_pos_screen_option() {

      $options = 'per_page';

      $args = array(
        'label'		=> __('Options Per Page', 'wc_pos'),
        'default'	=> 20,
        'option'	=> 'wc_pos_per_page'
      );

      add_screen_option( $options, $args );

    }

  }

}
