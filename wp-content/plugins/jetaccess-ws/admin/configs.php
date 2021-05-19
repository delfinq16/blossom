<?php
    if (! current_user_can ('manage_options')) wp_die (__ ('No tienes suficientes permisos para acceder a esta página.'));
?>

<div class="wrap">
	<h2><?php _e( 'JetAccess', 'jetaccess' ) ?></h2>
	Configuracion de JetAccess Web Services

	<form action="<?php echo admin_url('admin-post.php'); ?>" method="post">
  		<input type="hidden" name="action" value="my_media_update">
  		<input type="submit" value="Update inventory">
	</form>
</div>

<?php

function register_button_update(){
	//do_action();
}
?>
