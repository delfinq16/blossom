<?php
// Top level plugin menu
function jac_menu_admin()
{
 add_menu_page('JetAcccess-config','JetAccess','manage_options',JAC_ROUTE . '/admin/configs.php');
}


?>