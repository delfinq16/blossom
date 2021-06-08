<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://weareuv.com/
 * @since      1.0.0
 *
 * @package    Jetaccess_Ws
 * @subpackage Jetaccess_Ws/admin/partials
 */
require_once plugin_dir_path( dirname( __DIR__ ) ) . 'admin/partials/jetaccess-ws-inventory.php';
if (isset($_GET['update_inventory'])) {
    update_inventory();
}
$query_string = '?page=jet-access&update_inventory=yes';
?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->
<div class="jetaccess">
<?php
if (isset($_GET['update_inventory'])) {
    ?>
    <p class="success-message">Inventory update succesfully.</p>
    <?php
}
?>

    <h1>Welcome to Jet Access WS</h1>
    <p>Update store inventory clicking on the sync button.</p>
    <a class="button" href="<?php echo $_SERVER['PHP_SELF'] .$query_string; ?>" role="button">Sync your inventory</a>
</div>
