<?php
/*
Plugin Name: Video Player & Video Background WordPress Plugin
Description: This plugin can be used as Fixed Width/Full Width Video Player and as Full Screen Video Background
Version: 1.8.5
Author: Lambert Group
Author URI: https://codecanyon.net/user/lambertgroup?ref=LambertGroup
*/

ini_set('display_errors', 0);
//$wpdb->show_errors();
$universal_video_player_and_bg_path = trailingslashit(dirname(__FILE__));  //empty

//all the messages
$universal_video_player_and_bg_messages = array(
		'version' => '<div class="error">Video Player & Video Background WordPress Plugin requires WordPress 3.0 or newer. <a href="https://codex.wordpress.org/Upgrading_WordPress">Please update!</a></div>',
		'empty_img' => 'Image - required',
		'invalid_request' => 'Invalid Request!',
		'generate_for_this_player' => 'You can start customizing this player.',
		'data_saved' => 'Data Saved!'
	);


global $wp_version;

if ( !version_compare($wp_version,"3.0",">=")) {
	die ($universal_video_player_and_bg_messages['version']);
}




function universal_video_player_and_bg_activate() {
	//db creation, create admin options etc.
	global $wpdb;

	//$wpdb->show_errors();

	$universal_video_player_and_bg_collate = ' COLLATE utf8_general_ci';

	$sql0 = "CREATE TABLE `" . $wpdb->prefix . "universal_video_player_and_bg_players` (
			`id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
			`name` VARCHAR( 255 ) NOT NULL ,
			PRIMARY KEY ( `id` )
			) ENGINE=MyISAM  DEFAULT CHARSET=utf8";

	$sql1 = "CREATE TABLE `" . $wpdb->prefix . "universal_video_player_and_bg_settings` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `width` smallint(5) unsigned NOT NULL DEFAULT '960',
  `height` smallint(5) unsigned NOT NULL DEFAULT '540',
  `width100Proc` varchar(8) NOT NULL DEFAULT 'false',
  `height100Proc` varchar(8) NOT NULL DEFAULT 'false',
  `skin` varchar(255) NOT NULL DEFAULT 'thumbs',
  `randomizeVideos` varchar(8) NOT NULL DEFAULT 'false',
  `showTooltip` varchar(8) NOT NULL DEFAULT 'false',
  `firstImg` smallint(5) unsigned NOT NULL DEFAULT '0',
  `initialVolume` float unsigned NOT NULL DEFAULT '1',
  `loop` varchar(8) NOT NULL DEFAULT 'true',
  `setAsBg` varchar(8) NOT NULL DEFAULT 'false',
  `texturePath` text,
  `borderWidth` smallint(5) unsigned NOT NULL DEFAULT '0',
  `borderColor` varchar(8) NOT NULL DEFAULT 'FFFFFF',
  `responsive` varchar(8) NOT NULL DEFAULT 'false',
  `responsiveRelativeToBrowser` varchar(8) NOT NULL DEFAULT 'true',
  `numberOfThumbsPerScreen` smallint(5) unsigned NOT NULL DEFAULT '0',
  `bottomNavPos` varchar(8) NOT NULL DEFAULT 'center',
  `bottomNavLateralMargin` smallint(5) unsigned NOT NULL DEFAULT '0',
  `thumbsWrapperMinHeight` smallint(5) unsigned NOT NULL DEFAULT '25',
  `thumbsWrapperMarginTop` smallint(5) NOT NULL DEFAULT '-85',
  `thumbsWrapperTopPadding` smallint(5) unsigned NOT NULL DEFAULT '10',
  `thumbsWrapperBottomPadding` smallint(5) unsigned NOT NULL DEFAULT '10',
  `thumbsWrapperBgImage` text,
  `thumbsWrapperBgHexa` varchar(20) NOT NULL DEFAULT 'transparent',
  `thumbsBorderColorON` varchar(20) NOT NULL DEFAULT '000000',
  `thumbsBorderColorOFF` varchar(20) NOT NULL DEFAULT '7a7a7a',
  `thumbsBgOffColor` varchar(20) NOT NULL DEFAULT '000000',
  `thumbsBgOffImgOpacity` smallint(5) unsigned NOT NULL DEFAULT '100',
  `thumbsBgOnColor` varchar(20) NOT NULL DEFAULT 'cc181e',
  `thumbsBgOnImgOpacity` smallint(5) unsigned NOT NULL DEFAULT '100',
  `showBottomNav` varchar(8) NOT NULL DEFAULT 'true',
  `showOnInitBottomNav` varchar(8) NOT NULL DEFAULT 'true',
  `autoHideBottomNav` varchar(8) NOT NULL DEFAULT 'false',
  `showVideoControls` varchar(8) NOT NULL DEFAULT 'true',
  `suggestedQuality` varchar(100) NOT NULL DEFAULT 'default',
  `autoPlayFirstVideo` varchar(8) NOT NULL DEFAULT 'true',
	`autoPlayOnMobile` varchar(8) NOT NULL DEFAULT 'false',
  `youtubeJsUrl` varchar(100) NOT NULL DEFAULT 'https://www.youtube.com/iframe_api',
  `vimeoJsUrl` varchar(100) NOT NULL DEFAULT 'https://player.vimeo.com/api/player.js',
  `videoProportionWidth` smallint(5) unsigned NOT NULL DEFAULT '16',
  `videoProportionHeight` smallint(5) unsigned NOT NULL DEFAULT '9',
  `origThumbImgW` smallint(5) unsigned NOT NULL DEFAULT '110',
  `origThumbImgH` smallint(5) unsigned NOT NULL DEFAULT '65',
  `fallbackImage` varchar(255) DEFAULT '',
	  PRIMARY KEY  (`id`)
	) ENGINE=MyISAM  DEFAULT CHARSET=utf8";

	$sql2 = "CREATE TABLE `". $wpdb->prefix . "universal_video_player_and_bg_playlist` (
	  `id` int(10) unsigned NOT NULL auto_increment,
	  `playerid` int(10) unsigned NOT NULL,
	  `data-bottom-thumb` text,
	  `data-youtube` varchar(255),
	  `data-vimeo` varchar(255),
	  `data-selfhostedMP4` text,
	  `data-selfhostedWEBM` text,
	  `data-videoProportionWidth` smallint(5),
	  `data-title` text,
	  `ord` int(10) unsigned NOT NULL,
	  PRIMARY KEY  (`id`)
	) ENGINE=MyISAM  DEFAULT CHARSET=utf8";



	require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
	dbDelta($sql0.$universal_video_player_and_bg_collate);
	dbDelta($sql1.$universal_video_player_and_bg_collate);
	dbDelta($sql2.$universal_video_player_and_bg_collate);


	//initialize the players table with the first banner type
	$rows_count = $wpdb->get_var( "SELECT COUNT(*) FROM ". $wpdb->prefix ."universal_video_player_and_bg_players;" );
	if (!$rows_count) {
		$wpdb->insert(
			$wpdb->prefix . "universal_video_player_and_bg_players",
			array(
				'name' => 'First Player'
			),
			array(
				'%s'
			)
		);
	}

	// initialize the settings
	$rows_count = $wpdb->get_var( "SELECT COUNT(*) FROM ". $wpdb->prefix ."universal_video_player_and_bg_settings;" );
	if (!$rows_count) {
		universal_video_player_and_bg_insert_settings_record(1);
	}

	//echo $wpdb->last_query;

}


function universal_video_player_and_bg_uninstall() {
	global $wpdb;
	mysql_query("DROP TABLE `" . $wpdb->prefix . "universal_video_player_and_bg_settings`" );
	mysql_query("DROP TABLE `" . $wpdb->prefix . "universal_video_player_and_bg_playlist`" );
	mysql_query("DROP TABLE `" . $wpdb->prefix . "universal_video_player_and_bg_players`" );
}

function universal_video_player_and_bg_insert_settings_record($banner_id) {
	global $wpdb;
	$wpdb->insert(
			$wpdb->prefix . "universal_video_player_and_bg_settings",
			array(
				'width' => 960,
				'height' => 540
			),
			array(
				'%d',
				'%d'
			)
		);
}


function universal_video_player_and_bg_init_sessions() {
	global $wpdb;
	if (is_admin()) {
		if (!session_id()) {
			session_start();

			//initialize the session
			if (!isset($_SESSION['xid'])) {
				$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_and_bg_players) LIMIT 0, 1";
				$row = $wpdb->get_row($safe_sql,ARRAY_A);
				//$row=universal_video_player_and_bg_unstrip_array($row);
				$_SESSION['xid'] = $row['id'];
				$_SESSION['xname'] = $row['name'];

				$_SESSION['duplicate_layer']=0;
			}
		}
	}
}


function universal_video_player_and_bg_load_styles() {
	global $wpdb;
	if(strpos($_SERVER['PHP_SELF'], 'wp-admin') !== false) {
		$page = (isset($_GET['page'])) ? $_GET['page'] : '';
		if(preg_match('/VIDEO_PLAYER_AND_VIDEO_BACKGROUND/i', $page)) {
			//wp_enqueue_style('universal_video_player_and_bg_jquery-custom_css', plugins_url('css/custom-theme/jquery-ui-1.8.10.custom.css', __FILE__));
			wp_enqueue_style('lbg-jquery-ui-custom_css', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/pepper-grinder/jquery-ui.min.css');
			wp_enqueue_style('universal_video_player_and_bg_css', plugins_url('css/styles.css', __FILE__));
			wp_enqueue_style('universal_video_player_and_bg_colorpicker_css', plugins_url('css/colorpicker/colorpicker.css', __FILE__));


			wp_enqueue_style('thickbox');

			wp_enqueue_style('universal_video_player_and_bg_site_css', plugins_url('universal_video_background/universal_video_background.css', __FILE__));

		}
	} else if (!is_admin()) { //loads css in front-end
		wp_enqueue_style('universal_video_player_and_bg_site_css', plugins_url('universal_video_background/universal_video_background.css', __FILE__));
	}
}

function universal_video_player_and_bg_load_scripts() {
	global $is_IE;
	$page = (isset($_GET['page'])) ? $_GET['page'] : '';
	if(preg_match('/VIDEO_PLAYER_AND_VIDEO_BACKGROUND/i', $page)) {
		//loads scripts in admin
		//if (is_admin()) {
			//wp_deregister_script('jquery');
			/*wp_register_script('lbg-admin-jquery', plugins_url('js/jquery-1.5.1.js', __FILE__));
			wp_enqueue_script('lbg-admin-jquery');*/
			/*wp_deregister_script('jquery-ui-core');
			wp_deregister_script('jquery-ui-widget');
			wp_deregister_script('jquery-ui-mouse');
			wp_deregister_script('jquery-ui-accordion');
			wp_deregister_script('jquery-ui-autocomplete');
			wp_deregister_script('jquery-ui-slider');
			wp_deregister_script('jquery-ui-tabs');
			wp_deregister_script('jquery-ui-sortable');
			wp_deregister_script('jquery-ui-draggable');
			wp_deregister_script('jquery-ui-droppable');
			wp_deregister_script('jquery-ui-selectable');
			wp_deregister_script('jquery-ui-position');
			wp_deregister_script('jquery-ui-datepicker');
			wp_deregister_script('jquery-ui-resizable');
			wp_deregister_script('jquery-ui-dialog');
			wp_deregister_script('jquery-ui-button');		*/

			wp_enqueue_script('jquery');

			//wp_register_script('lbg-admin-jquery-ui-min', plugins_url('js/jquery-ui-1.8.10.custom.min.js', __FILE__));
			//wp_register_script('lbg-admin-jquery-ui-min', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js');
			/*wp_register_script('lbg-admin-jquery-ui-min', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js');
			wp_enqueue_script('lbg-admin-jquery-ui-min');*/

			wp_enqueue_script('jquery-ui-core');
			wp_enqueue_script('jquery-ui-widget');
			wp_enqueue_script('jquery-ui-mouse');
			wp_enqueue_script('jquery-ui-accordion');
			wp_enqueue_script('jquery-ui-autocomplete');
			wp_enqueue_script('jquery-ui-slider');
			wp_enqueue_script('jquery-ui-tabs');
			wp_enqueue_script('jquery-ui-sortable');
			wp_enqueue_script('jquery-ui-draggable');
			wp_enqueue_script('jquery-ui-droppable');
			wp_enqueue_script('jquery-ui-selectable');
			wp_enqueue_script('jquery-ui-position');
			wp_enqueue_script('jquery-ui-datepicker');
			wp_enqueue_script('jquery-ui-resizable');
			wp_enqueue_script('jquery-ui-dialog');
			wp_enqueue_script('jquery-ui-button');/***************************/

			wp_enqueue_script('jquery-form');
			wp_enqueue_script('jquery-color');
			wp_enqueue_script('jquery-masonry');
			wp_enqueue_script('jquery-ui-progressbar');
			wp_enqueue_script('jquery-ui-tooltip');

			wp_enqueue_script('jquery-effects-core');
			wp_enqueue_script('jquery-effects-blind');
			wp_enqueue_script('jquery-effects-bounce');
			wp_enqueue_script('jquery-effects-clip');
			wp_enqueue_script('jquery-effects-drop');
			wp_enqueue_script('jquery-effects-explode');
			wp_enqueue_script('jquery-effects-fade');
			wp_enqueue_script('jquery-effects-fold');
			wp_enqueue_script('jquery-effects-highlight');
			wp_enqueue_script('jquery-effects-pulsate');
			wp_enqueue_script('jquery-effects-scale');
			wp_enqueue_script('jquery-effects-shake');
			wp_enqueue_script('jquery-effects-slide');
			wp_enqueue_script('jquery-effects-transfer');

			wp_register_script('my-colorpicker', plugins_url('js/colorpicker/colorpicker.js', __FILE__));
			wp_enqueue_script('my-colorpicker');

			wp_register_script('lbg-admin-toggle', plugins_url('js/myToggle.js', __FILE__));
			wp_enqueue_script('lbg-admin-toggle');


			wp_enqueue_script('media-upload'); // before w.p 3.5
			wp_enqueue_media();// from w.p 3.5
			wp_enqueue_script('thickbox');




		//}

		//wp_enqueue_script('jquery');
		//wp_enqueue_script('jquery-ui-core');
		//wp_enqueue_script('jquery-ui-sortable');
		//wp_enqueue_script('thickbox');
		//wp_enqueue_script('media-upload');
		//wp_enqueue_script('farbtastic');
	} else if (!is_admin()) { //loads scripts in front-end
			/*wp_deregister_script('jquery-ui-core');
			wp_deregister_script('jquery-ui-widget');
			wp_deregister_script('jquery-ui-mouse');
			wp_deregister_script('jquery-ui-accordion');
			wp_deregister_script('jquery-ui-autocomplete');
			wp_deregister_script('jquery-ui-slider');
			wp_deregister_script('jquery-ui-tabs');
			wp_deregister_script('jquery-ui-sortable');
			wp_deregister_script('jquery-ui-draggable');
			wp_deregister_script('jquery-ui-droppable');
			wp_deregister_script('jquery-ui-selectable');
			wp_deregister_script('jquery-ui-position');
			wp_deregister_script('jquery-ui-datepicker');
			wp_deregister_script('jquery-ui-resizable');
			wp_deregister_script('jquery-ui-dialog');
			wp_deregister_script('jquery-ui-button');*/

		wp_enqueue_script('jquery');

		//wp_enqueue_script('jquery-ui-core');

		//wp_register_script('lbg-jquery-ui-min', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js');
		/*wp_register_script('lbg-jquery-ui-min', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js');
		wp_enqueue_script('lbg-jquery-ui-min');*/

			wp_enqueue_script('jquery-ui-core');

			//wp_enqueue_script('jquery-ui-widget');
			//wp_enqueue_script('jquery-ui-mouse');
			//wp_enqueue_script('jquery-ui-accordion');
			//wp_enqueue_script('jquery-ui-autocomplete');
			//wp_enqueue_script('jquery-ui-slider');
			//wp_enqueue_script('jquery-ui-tabs');
			//wp_enqueue_script('jquery-ui-sortable');
			//wp_enqueue_script('jquery-ui-draggable');
			//wp_enqueue_script('jquery-ui-droppable');
			//wp_enqueue_script('jquery-ui-selectable');
			//wp_enqueue_script('jquery-ui-position');
			//wp_enqueue_script('jquery-ui-datepicker');
			//wp_enqueue_script('jquery-ui-resizable');
			//wp_enqueue_script('jquery-ui-dialog');
			//wp_enqueue_script('jquery-ui-button');

			//wp_enqueue_script('jquery-form');
			//wp_enqueue_script('jquery-color');
			//wp_enqueue_script('jquery-masonry');
			//wp_enqueue_script('jquery-ui-progressbar');
			wp_enqueue_script('jquery-ui-tooltip');

			//wp_enqueue_script('jquery-effects-core');
			//wp_enqueue_script('jquery-effects-blind');
			//wp_enqueue_script('jquery-effects-bounce');
			//wp_enqueue_script('jquery-effects-clip');
			wp_enqueue_script('jquery-effects-drop');
			/*wp_enqueue_script('jquery-effects-explode');
			wp_enqueue_script('jquery-effects-fade');
			wp_enqueue_script('jquery-effects-fold');
			wp_enqueue_script('jquery-effects-highlight');
			wp_enqueue_script('jquery-effects-pulsate');
			wp_enqueue_script('jquery-effects-scale');
			wp_enqueue_script('jquery-effects-shake');
			wp_enqueue_script('jquery-effects-slide');
			wp_enqueue_script('jquery-effects-transfer');*/


		//wp_register_script('lbg-vimeo', 'http://a.vimeocdn.com/js/froogaloop2.min.js');
		wp_register_script('lbg-vimeo', 'https://player.vimeo.com/api/player.js');
		wp_enqueue_script('lbg-vimeo');

		wp_register_script('lbg-universal_video_player_and_bg', plugins_url('universal_video_background\js\universal_video_background.js', __FILE__));
		wp_enqueue_script('lbg-universal_video_player_and_bg');

	}




}



// adds the menu pages
function universal_video_player_and_bg_plugin_menu() {
	add_menu_page('VIDEO_PLAYER_AND_VIDEO_BACKGROUND Admin Interface', 'VIDEO PLAYER & VIDEO BACKGROUND', 'edit_posts', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND', 'universal_video_player_and_bg_overview_page',
	plugins_url('images/plg_icon.png', __FILE__));
	add_submenu_page( 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND Overview', 'Overview', 'edit_posts', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND', 'universal_video_player_and_bg_overview_page');
	add_submenu_page( 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND Manage Players', 'Manage Players', 'edit_posts', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Manage_Players', 'universal_video_player_and_bg_manage_players_page');
	add_submenu_page( 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND Manage Players Add New', 'Add New', 'edit_posts', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Add_New', 'universal_video_player_and_bg_manage_players_add_new_page');
	add_submenu_page( 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Manage_Players', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND Player Settings', 'Player Settings', 'edit_posts', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Settings', 'universal_video_player_and_bg_settings_page');
	add_submenu_page( 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Manage_Players', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND Player Playlist', 'Playlist', 'edit_posts', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Playlist', 'universal_video_player_and_bg_playlist_page');
	add_submenu_page( 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND Help', 'Help', 'edit_posts', 'VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Help', 'universal_video_player_and_bg_help_page');
}


//HTML content for overview page
function universal_video_player_and_bg_overview_page()
{
	global $universal_video_player_and_bg_path;
	include_once($universal_video_player_and_bg_path . 'tpl/overview.php');
}

//HTML content for Manage players
function universal_video_player_and_bg_manage_players_page()
{
	global $wpdb;
	global $universal_video_player_and_bg_messages;
	global $universal_video_player_and_bg_path;

	//delete banner
	if (isset($_GET['id'])) {




		//delete from wp_universal_video_player_and_bg_players
		$wpdb->query($wpdb->prepare("DELETE FROM ".$wpdb->prefix."universal_video_player_and_bg_players WHERE id = %d",$_GET['id']));

		//delete from wp_universal_video_player_and_bg_settings
		$wpdb->query($wpdb->prepare("DELETE FROM ".$wpdb->prefix."universal_video_player_and_bg_settings WHERE id = %d",$_GET['id']));

		//delete from wp_universal_video_player_and_bg_playlist
		$wpdb->query($wpdb->prepare("DELETE FROM ".$wpdb->prefix."universal_video_player_and_bg_playlist WHERE playerid = %d",$_GET['id']));

		//initialize the session
		$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_and_bg_players) ORDER BY id";
		$row = $wpdb->get_row($safe_sql,ARRAY_A);
		$row=universal_video_player_and_bg_unstrip_array($row);
		if ($row['id']) {
			$_SESSION['xid']=$row['id'];
			$_SESSION['xname']=$row['name'];
		}
	}


	if ($_GET['duplicate_id']!='') {
			//players
			$safe_sql=$wpdb->prepare( "INSERT INTO ".$wpdb->prefix ."universal_video_player_and_bg_players ( `name` ) SELECT `name` FROM (".$wpdb->prefix ."universal_video_player_and_bg_players) WHERE id = %d",$_GET['duplicate_id'] );
			$wpdb->query($safe_sql);
			$playerid=$wpdb->insert_id;

			//settings
			$safe_sql=$wpdb->prepare( "INSERT INTO ".$wpdb->prefix ."universal_video_player_and_bg_settings (`width`, `height`, `width100Proc`, `height100Proc`, `skin`, `randomizeVideos`, `showTooltip`, `firstImg`, `initialVolume`, `loop`, `setAsBg`, `texturePath`, `borderWidth`, `borderColor`, `responsive`, `responsiveRelativeToBrowser`, `numberOfThumbsPerScreen`, `bottomNavPos`, `bottomNavLateralMargin`, `thumbsWrapperMinHeight`, `thumbsWrapperMarginTop`, `thumbsWrapperTopPadding`, `thumbsWrapperBottomPadding`, `thumbsWrapperBgImage`, `thumbsWrapperBgHexa`, `thumbsBorderColorON`, `thumbsBorderColorOFF`, `thumbsBgOffColor`, `thumbsBgOffImgOpacity`, `thumbsBgOnColor`, `thumbsBgOnImgOpacity`, `showBottomNav`, `showOnInitBottomNav`, `autoHideBottomNav`, `showVideoControls`, `suggestedQuality`, `autoPlayFirstVideo`, `autoPlayOnMobile`, `youtubeJsUrl`, `vimeoJsUrl`, `videoProportionWidth`, `videoProportionHeight`, `origThumbImgW`, `origThumbImgH` ) SELECT `width`, `height`, `width100Proc`, `height100Proc`, `skin`, `randomizeVideos`, `showTooltip`, `firstImg`, `initialVolume`, `loop`, `setAsBg`, `texturePath`, `borderWidth`, `borderColor`, `responsive`, `responsiveRelativeToBrowser`, `numberOfThumbsPerScreen`, `bottomNavPos`, `bottomNavLateralMargin`, `thumbsWrapperMinHeight`, `thumbsWrapperMarginTop`, `thumbsWrapperTopPadding`, `thumbsWrapperBottomPadding`, `thumbsWrapperBgImage`, `thumbsWrapperBgHexa`, `thumbsBorderColorON`, `thumbsBorderColorOFF`, `thumbsBgOffColor`, `thumbsBgOffImgOpacity`, `thumbsBgOnColor`, `thumbsBgOnImgOpacity`, `showBottomNav`, `showOnInitBottomNav`, `autoHideBottomNav`, `showVideoControls`, `suggestedQuality`, `autoPlayFirstVideo`, `autoPlayOnMobile`, `youtubeJsUrl`, `vimeoJsUrl`, `videoProportionWidth`, `videoProportionHeight`, `origThumbImgW`, `origThumbImgH` FROM (".$wpdb->prefix ."universal_video_player_and_bg_settings) WHERE id = %d",$_GET['duplicate_id'] );
			$wpdb->query($safe_sql);

			//playlist
			$safe_sql=$wpdb->prepare( "SELECT * FROM (".$wpdb->prefix ."universal_video_player_and_bg_playlist) WHERE playerid = %d",$_GET['duplicate_id'] );
			$result = $wpdb->get_results($safe_sql,ARRAY_A);
			foreach ( $result as $row_playlist ) {
				$row_playlist=universal_video_player_and_bg_unstrip_array($row_playlist);

				$safe_sql=$wpdb->prepare( "INSERT INTO ".$wpdb->prefix ."universal_video_player_and_bg_playlist ( `playerid` ,`data-bottom-thumb` ,`data-youtube` ,`data-vimeo` ,`data-selfhostedMP4` ,`data-selfhostedWEBM` ,`data-videoProportionWidth` ,`data-title` ,`ord` ) SELECT ".$playerid." ,`data-bottom-thumb` ,`data-youtube` ,`data-vimeo` ,`data-selfhostedMP4` ,`data-selfhostedWEBM` ,`data-videoProportionWidth` ,`data-title` ,`ord` FROM (".$wpdb->prefix ."universal_video_player_and_bg_playlist) WHERE id = %d",$row_playlist['id'] );
				$wpdb->query($safe_sql);
				$photoid=$wpdb->insert_id;
				//echo $wpdb->last_query;

			}

	}

	$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_and_bg_players) ORDER BY id";
	$result = $wpdb->get_results($safe_sql,ARRAY_A);
	include_once($universal_video_player_and_bg_path . 'tpl/players.php');

}


//HTML content for Manage players - Add New
function universal_video_player_and_bg_manage_players_add_new_page()
{
	global $wpdb;
	global $universal_video_player_and_bg_messages;
	global $universal_video_player_and_bg_path;

	if($_POST['Submit'] == 'Add New') {
		$errors_arr=array();
		if (empty($_POST['name']))
			$errors_arr[]=$universal_video_player_and_bg_messages['empty_name'];

		if (count($errors_arr)) {
				include_once($universal_video_player_and_bg_path . 'tpl/add_player.php'); ?>
				<div id="error" class="error"><p><?php echo implode("<br>", $errors_arr);?></p></div>
		  	<?php } else { // no errors
					$wpdb->insert(
						$wpdb->prefix . "universal_video_player_and_bg_players",
						array(
							'name' => $_POST['name']
						),
						array(
							'%s'
						)
					);
					//insert default Player Settings for this new Player
					universal_video_player_and_bg_insert_settings_record($wpdb->insert_id);
					?>
						<div class="wrap">
							<div id="lbg_logo">
								<h2>Manage Players - Add New Player</h2>
				 			</div>
							<div id="message" class="updated"><p><?php echo $universal_video_player_and_bg_messages['data_saved'];?></p><p><?php echo $universal_video_player_and_bg_messages['generate_for_this_player'];?></p></div>
							<div>
								<p>&raquo; <a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Add_New">Add New (Player)</a></p>
								<p>&raquo; <a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Manage_Players">Back to Manage Players</a></p>
							</div>
						</div>
		  	<?php }
	} else {
		include_once($universal_video_player_and_bg_path . 'tpl/add_player.php');
	}

}


//HTML content for playersettings
function universal_video_player_and_bg_settings_page()
{
	global $wpdb;
	global $universal_video_player_and_bg_messages;
	global $universal_video_player_and_bg_path;

	if (isset($_GET['id']) && isset($_GET['name'])) {
		$_SESSION['xid']=$_GET['id'];
		$_SESSION['xname']=$_GET['name'];
	}

	//$wpdb->show_errors();
	/*if (check_admin_referer('universal_video_player_and_bg_settings_update')) {
		echo "update";
	}*/


	if($_POST['Submit'] == 'Update Player Settings') {
		$_GET['xmlf']='';
		$except_arr=array('Submit','name','pll_ajax_backend','page_scroll_to_id_instances');

			$wpdb->update(
				$wpdb->prefix .'universal_video_player_and_bg_players',
				array(
				'name' => $_POST['name']
				),
				array( 'id' => $_SESSION['xid'] )
			);
			$_SESSION['xname']=stripslashes($_POST['name']);


			foreach ($_POST as $key=>$val){
				if (in_array($key,$except_arr)) {
					unset($_POST[$key]);
				}
			}

			$wpdb->update(
				$wpdb->prefix .'universal_video_player_and_bg_settings',
				$_POST,
				array( 'id' => $_SESSION['xid'] )
			);

			?>
			<div id="message" class="updated"><p><?php echo $universal_video_player_and_bg_messages['data_saved'];?></p></div>
	<?php

	}



	//echo "WP_PLUGIN_URL: ".WP_PLUGIN_URL;
	$safe_sql=$wpdb->prepare( "SELECT * FROM (".$wpdb->prefix ."universal_video_player_and_bg_settings) WHERE id = %d",$_SESSION['xid'] );
	$row = $wpdb->get_row($safe_sql,ARRAY_A);
	$row=universal_video_player_and_bg_unstrip_array($row);
	$_POST = $row;
	//$_POST['existingWatermarkPath']=$_POST['watermarkPath'];
	$_POST=universal_video_player_and_bg_unstrip_array($_POST);

	//echo "width: ".$row['width'];
	include_once($universal_video_player_and_bg_path . 'tpl/settings_form.php');

}

function universal_video_player_and_bg_playlist_page()
{
	global $wpdb;
	global $universal_video_player_and_bg_messages;
	global $universal_video_player_and_bg_path;
	//$wpdb->show_errors();

	if (isset($_GET['id']) && isset($_GET['name'])) {
		$_SESSION['xid']=$_GET['id'];
		$_SESSION['xname']=$_GET['name'];
	}


	if ($_GET['xmlf']=='add_playlist_record') {
		if($_POST['Submit'] == 'Add Record') {
			$errors_arr=array();
			/*if (empty($_POST['img']))
				 $errors_arr[]=$universal_video_player_and_bg_messages['empty_img'];*/


		if (count($errors_arr)) {
			include_once($universal_video_player_and_bg_path . 'tpl/add_playlist_record.php'); ?>
			<div id="error" class="error"><p><?php echo implode("<br>", $errors_arr);?></p></div>
	  	<?php } else { // no upload errors
				$max_ord = 1+$wpdb->get_var( $wpdb->prepare( "SELECT max(ord) FROM ". $wpdb->prefix ."universal_video_player_and_bg_playlist WHERE playerid = %d",$_SESSION['xid'] ) );

				$wpdb->insert(
					$wpdb->prefix . "universal_video_player_and_bg_playlist",
					array(
						'playerid' => $_POST['playerid'],
						'data-bottom-thumb' => $_POST['data-bottom-thumb'],
						'data-youtube' => $_POST['data-youtube'],
						'data-vimeo' => $_POST['data-vimeo'],
						'data-selfhostedMP4' => $_POST['data-selfhostedMP4'],
						'data-selfhostedWEBM' => $_POST['data-selfhostedWEBM'],
						'data-videoProportionWidth' => $_POST['data-videoProportionWidth'],
						'data-title' => $_POST['data-title'],
						'ord' => $max_ord
					),
					array(
						'%d',
						'%s',
						'%s',
						'%s',
						'%s',
						'%s',
						'%d',
						'%s',
						'%d'
					)
				);

	  			if (isset($_POST['setitfirst'])) {
					$sql_arr=array();
					$ord_start=$max_ord;
					$ord_stop=1;
					$elem_id=$wpdb->insert_id;
					$ord_direction='+1';

					$sql_arr[]="UPDATE ".$wpdb->prefix."universal_video_player_and_bg_playlist SET ord=ord+1  WHERE playerid = ".$_SESSION['xid']." and ord>=".$ord_stop." and ord<".$ord_start;
					$sql_arr[]="UPDATE ".$wpdb->prefix."universal_video_player_and_bg_playlist SET ord=".$ord_stop." WHERE id=".$elem_id;

					//echo "elem_id: ".$elem_id."----ord_start: ".$ord_start."----ord_stop: ".$ord_stop;
					foreach ($sql_arr as $sql)
						$wpdb->query($sql);
				}
				?>
					<div class="wrap">
						<div id="lbg_logo">
							<h2>Playlist for Player: <span style="color:#FF0000; font-weight:bold;"><?php echo strip_tags($_SESSION['xname'])?> - ID #<?php echo strip_tags($_SESSION['xid'])?></span> - Add New</h2>
			 			</div>
						<div id="message" class="updated"><p><?php echo $universal_video_player_and_bg_messages['data_saved'];?></p></div>
						<div>
							<p>&raquo; <a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Playlist&xmlf=add_playlist_record">Add New</a></p>
							<p>&raquo; <a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Playlist">Back to Playlist</a></p>
						</div>
					</div>
	  	<?php }
		} else {
			include_once($universal_video_player_and_bg_path . 'tpl/add_playlist_record.php');
		}

	} else {
		if ($_GET['duplicate_id']!='') {
			$max_ord = 1+$wpdb->get_var( $wpdb->prepare( "SELECT max(ord) FROM ". $wpdb->prefix ."universal_video_player_and_bg_playlist WHERE playerid = %d",$_SESSION['xid'] ) );
			$safe_sql=$wpdb->prepare( "INSERT INTO ".$wpdb->prefix ."universal_video_player_and_bg_playlist ( `playerid` ,`data-bottom-thumb` ,`data-youtube` ,`data-vimeo` ,`data-selfhostedMP4` ,`data-selfhostedWEBM` ,`data-videoProportionWidth` ,`data-title` ,`ord` ) SELECT `playerid` ,`data-bottom-thumb` ,`data-youtube` ,`data-vimeo` ,`data-selfhostedMP4` ,`data-selfhostedWEBM` ,`data-videoProportionWidth` ,`data-title` ,".$max_ord." FROM (".$wpdb->prefix ."universal_video_player_and_bg_playlist) WHERE id = %d",$_GET['duplicate_id'] );
			$wpdb->query($safe_sql);
			$lastID=$wpdb->insert_id;
			//echo $wpdb->last_query;



			echo "<script>location.href='?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Playlist&id=".$_SESSION['xid']."&name=".$_SESSION['xname']."'</script>";

		}

		$safe_sql=$wpdb->prepare( "SELECT * FROM (".$wpdb->prefix ."universal_video_player_and_bg_playlist) WHERE playerid = %d ORDER BY ord",$_SESSION['xid'] );
		$result = $wpdb->get_results($safe_sql,ARRAY_A);

		/*$safe_sql=$wpdb->prepare( "SELECT width,height FROM (".$wpdb->prefix ."universal_video_player_and_bg_settings) WHERE id = %d",$_SESSION['xid'] );
		$row_settings = $wpdb->get_row($safe_sql);		*/

		//$_POST=universal_video_player_and_bg_unstrip_array($_POST);
		include_once($universal_video_player_and_bg_path . 'tpl/playlist.php');
	}
}





function universal_video_player_and_bg_help_page()
{
	//include_once(plugins_url('tpl/help.php', __FILE__));
	global $universal_video_player_and_bg_path;
	include_once($universal_video_player_and_bg_path . 'tpl/help.php');
}

function universal_video_player_and_bg_generate_preview_code($playerID) {
	global $wpdb;

	$safe_sql=$wpdb->prepare( "SELECT * FROM (".$wpdb->prefix ."universal_video_player_and_bg_settings) WHERE id = %d",$playerID );
	$row = $wpdb->get_row($safe_sql,ARRAY_A);
	$row=universal_video_player_and_bg_unstrip_array($row);
	//echo $wpdb->last_query;


	$safe_sql=$wpdb->prepare( "SELECT * FROM (".$wpdb->prefix ."universal_video_player_and_bg_playlist) WHERE playerid = %d ORDER BY ord",$playerID );
	$result = $wpdb->get_results($safe_sql,ARRAY_A);
	$playlist_str='';
	foreach ( $result as $row_playlist ) {

		$row_playlist=universal_video_player_and_bg_unstrip_array($row_playlist);


		$playlist_str.='<li data-bottom-thumb="'.$row_playlist['data-bottom-thumb'].'" data-title="'.$row_playlist['data-title'].'" data-youtube="'.$row_playlist['data-youtube'].'" data-vimeo="'.$row_playlist['data-vimeo'].'" data-selfhostedMP4="'.$row_playlist['data-selfhostedMP4'].'" data-selfhostedWEBM="'.$row_playlist['data-selfhostedWEBM'].'" '.(($row_playlist['data-videoProportionWidth']>0)?'data-videoProportionWidth="'.$row_playlist['data-videoProportionWidth'].'"':'').' >'.$img_over.$row_playlist['content'].'</li>';

	}


	$thumbsWrapperBg_aux='';
	if ($row["thumbsWrapperBgHexa"]!='')
		$thumbsWrapperBg_aux='#'.$row["thumbsWrapperBgHexa"];
	if ($row["thumbsWrapperBgImage"]!='')
		$thumbsWrapperBg_aux='url('.$row["thumbsWrapperBgImage"].')';

	$thumbsWrapperMarginTop_aux=0;
	if ($row["thumbsWrapperMarginTop"]<0) {
		$thumbsWrapperMarginTop_aux=(-1)*$row["thumbsWrapperMarginTop"];
	}
	$setAsBg_aux='';
	if ($row["setAsBg"]=='false') {
		$setAsBg_aux='<br style="clear:both;"><div style="height:'.$thumbsWrapperMarginTop_aux.'px; max-height:100%;">&nbsp;</div>';
	}



	$str_to_return = '<script>
		jQuery(function() {
			function getOS() {
					  var ua = navigator.userAgent;
					  var uaindex;
					  var to_return;

					  /* determine OS*/
					  if ( ua.match(/iPad/i) || ua.match(/iPhone/i) )
					  {
						to_return = "iOS";
						uaindex = ua.indexOf( "OS " );
					  }
					  else if ( ua.match(/Android/i) )
					  {
						to_return = "Android";
						uaindex = ua.indexOf( "Android " );
					  }
					  else
					  {
						to_return = "unknown";
					  }

					  return to_return;

			}
			var my_os=getOS();
			if ("'.$row["fallbackImage"].'"!="" && "'.$row["setAsBg"].'"=="true" && (my_os=="iOS" || my_os=="Android")) {
				jQuery("#universal_video_background_'.$row["id"].'").css({"display":"block"});
				jQuery("#universal_video_background_'.$row["id"].'").html(\'<div class="setAsBg_onlyImage" style="background-image:url('.$row["fallbackImage"].');"></div>\');
			} else {
						jQuery("#universal_video_background_'.$row["id"].'").universal_video_background({
							skin:"'.$row["skin"].'",
							responsive:'.$row["responsive"].',
							responsiveRelativeToBrowser:'.((is_admin())?'false':$row["responsiveRelativeToBrowser"]).',
							width:'.$row["width"].',
							height:'.$row["height"].',
							width100Proc:'.$row["width100Proc"].',
							height100Proc:'.$row["height100Proc"].',
							randomizeVideos:'.$row["randomizeVideos"].',
							showTooltip:'.$row["showTooltip"].',
							firstImg:'.$row["firstImg"].',
							initialVolume:'.$row["initialVolume"].',
							loop:'.$row["loop"].',
							setAsBg:'.((is_admin())?'false':$row["setAsBg"]).',
							autoPlayFirstVideo:'.$row["autoPlayFirstVideo"].',
							autoPlayOnMobile:'.$row["autoPlayOnMobile"].',
							texturePath:"'.$row["texturePath"].'",
							borderWidth:'.$row["borderWidth"].',
							borderColor:"#'.$row["borderColor"].'",
							bottomNavPos:"'.$row["bottomNavPos"].'",
							bottomNavLateralMargin:'.$row["bottomNavLateralMargin"].',
							numberOfThumbsPerScreen:'.$row["numberOfThumbsPerScreen"].',
							thumbsWrapperMinHeight:'.$row["thumbsWrapperMinHeight"].',
							thumbsWrapperMarginTop:'.$row["thumbsWrapperMarginTop"].',
							thumbsWrapperTopPadding:'.$row["thumbsWrapperTopPadding"].',
							thumbsWrapperBottomPadding:'.$row["thumbsWrapperBottomPadding"].',
							thumbsWrapperBg:"'.$thumbsWrapperBg_aux.'",
							thumbsBorderColorON:"#'.$row["thumbsBorderColorON"].'",
							thumbsBorderColorOFF:"#'.$row["thumbsBorderColorOFF"].'",
							thumbsBgOffColor:"#'.$row["thumbsBgOffColor"].'",
							thumbsBgOffImgOpacity:'.$row["thumbsBgOffImgOpacity"].',
							thumbsBgOnColor:"#'.$row["thumbsBgOnColor"].'",
							thumbsBgOnImgOpacity:'.$row["thumbsBgOnImgOpacity"].',
							showBottomNav:'.$row["showBottomNav"].',
							autoHideBottomNav:'.$row["autoHideBottomNav"].',
							showOnInitBottomNav:'.$row["showOnInitBottomNav"].',
							showVideoControls:'.$row["showVideoControls"].',
							suggestedQuality:"'.$row["suggestedQuality"].'",
							videoProportionWidth:'.$row["videoProportionWidth"].',
							origThumbImgW:'.$row["origThumbImgW"].',
							origThumbImgH:'.$row["origThumbImgH"].'
						});
			}
		});
	</script>
            <div id="universal_video_background_'.$row["id"].'" style="display:none;"><ul class="universal_video_background_list">'.$playlist_str.'</ul></div>'.$setAsBg_aux;

    return str_replace("\r\n", '', $str_to_return);
}


function universal_video_player_and_bg_shortcode($atts, $content=null) {
	global $wpdb;

	shortcode_atts( array('settings_id'=>''), $atts);
	if ($atts['settings_id']=='')
		$atts['settings_id']=1;

	return universal_video_player_and_bg_generate_preview_code($atts['settings_id']);

}



function universal_video_player_and_bg_add_meta_box() {

	$screens = array( 'post', 'page' );

	foreach ( $screens as $screen ) {

		add_meta_box(
			'universal_video_player_and_bg_sectionid',
			__( 'Fullscreen Background Selection', 'universal_video_player_and_bg_textdomain' ),
			'universal_video_player_and_bg_meta_box_callback',
			$screen
		);
	}
}
add_action( 'add_meta_boxes', 'universal_video_player_and_bg_add_meta_box' );


register_activation_hook(__FILE__,"universal_video_player_and_bg_activate"); //activate plugin and create the database
register_uninstall_hook(__FILE__, 'universal_video_player_and_bg_uninstall'); // on unistall delete all databases
add_action('init', 'universal_video_player_and_bg_init_sessions');	// initialize sessions
add_action('init', 'universal_video_player_and_bg_load_styles');	// loads required styles
add_action('init', 'universal_video_player_and_bg_load_scripts');			// loads required scripts
add_action('admin_menu', 'universal_video_player_and_bg_plugin_menu'); // create menus
add_shortcode('universal_video_player_and_bg', 'universal_video_player_and_bg_shortcode');				// universal_video_player_and_bg shortcode



/**
 * Prints the box content.
 *
 * @param WP_Post $post The object for the current post/page.
 */
function universal_video_player_and_bg_meta_box_callback( $post ) {

	// Add an nonce field so we can check for it later.
	wp_nonce_field( 'universal_video_player_and_bg_meta_box', 'universal_video_player_and_bg_meta_box_nonce' );

	/*
	 * Use get_post_meta() to retrieve an existing value
	 * from the database and use the value for the form.
	 */
	$value = get_post_meta( $post->ID, '_my_meta_value_key', true );

	echo '<label for="universal_video_player_and_bg_page_shortcode">';
	_e( 'Add Shortcode Here: ', 'universal_video_player_and_bg_textdomain' );
	echo '</label> ';
	echo '<input type="text" id="universal_video_player_and_bg_page_shortcode" name="universal_video_player_and_bg_page_shortcode" value="' . esc_attr( $value ) . '" size="50" />';
}


/**
 * When the post is saved, saves our custom data.
 *
 * @param int $post_id The ID of the post being saved.
 */
function universal_video_player_and_bg_save_meta_box_data( $post_id ) {

	/*
	 * We need to verify this came from our screen and with proper authorization,
	 * because the save_post action can be triggered at other times.
	 */

	// Check if our nonce is set.
	if ( ! isset( $_POST['universal_video_player_and_bg_meta_box_nonce'] ) ) {
		return;
	}

	// Verify that the nonce is valid.
	if ( ! wp_verify_nonce( $_POST['universal_video_player_and_bg_meta_box_nonce'], 'universal_video_player_and_bg_meta_box' ) ) {
		return;
	}

	// If this is an autosave, our form has not been submitted, so we don't want to do anything.
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	// Check the user's permissions.
	if ( isset( $_POST['post_type'] ) && 'page' == $_POST['post_type'] ) {

		if ( ! current_user_can( 'edit_page', $post_id ) ) {
			return;
		}

	} else {

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}
	}

	/* OK, it's safe for us to save the data now. */

	// Make sure that it is set.
	if ( ! isset( $_POST['universal_video_player_and_bg_page_shortcode'] ) ) {
		return;
	}

	// Sanitize user input.
	$my_data = sanitize_text_field( $_POST['universal_video_player_and_bg_page_shortcode'] );

	// Update the meta field in the database.
	update_post_meta( $post_id, '_my_meta_value_key', $my_data );
}
add_action( 'save_post', 'universal_video_player_and_bg_save_meta_box_data' );



function add_background() {
	global $post;
	$my_meta = get_post_meta($post->ID,'_my_meta_value_key',TRUE);
	if ($my_meta) {
		echo do_shortcode($my_meta);
	}
}
add_action( 'wp_head','add_background' );




/** OTHER FUNCTIONS **/

//stripslashes for an entire array
function universal_video_player_and_bg_unstrip_array($array){
	if (is_array($array)) {
		foreach($array as &$val){
			if(is_array($val)){
				$val = unstrip_array($val);
			} else {
				$val = stripslashes($val);

			}
		}
	}
	return $array;
}




/* ajax update playlist record */

add_action('admin_head', 'universal_video_player_and_bg_update_playlist_record_javascript');

function universal_video_player_and_bg_update_playlist_record_javascript() {
	global $wpdb;
	//Set Your Nonce
	$universal_video_player_and_bg_update_playlist_record_ajax_nonce = wp_create_nonce("universal_video_player_and_bg_update_playlist_record-special-string");
	$universal_video_player_and_bg_preview_record_ajax_nonce = wp_create_nonce("universal_video_player_and_bg_preview_record-special-string");
	$universal_video_player_and_bg_duplicate_record_ajax_nonce = wp_create_nonce("universal_video_player_and_bg_duplicate_record-special-string");

	if(strpos($_SERVER['PHP_SELF'], 'wp-admin') !== false) {
		$page = (isset($_GET['page'])) ? $_GET['page'] : '';
		if(preg_match('/VIDEO_PLAYER_AND_VIDEO_BACKGROUND/i', $page)) {
?>




<script type="text/javascript" >

//delete the entire record
function universal_video_player_and_bg_delete_entire_record (delete_id) {
	if (confirm('Are you sure?')) {
		jQuery("#universal_video_player_and_bg_sortable").sortable('disable');
		jQuery("#"+delete_id).css("display","none");
		//jQuery("#universal_video_player_and_bg_sortable").sortable('refresh');
		jQuery("#universal_video_player_and_bg_updating_witness").css("display","block");
		var data = "action=universal_video_player_and_bg_update_playlist_record&security=<?php echo $universal_video_player_and_bg_update_playlist_record_ajax_nonce; ?>&updateType=universal_video_player_and_bg_delete_entire_record&delete_id="+delete_id;
		// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		jQuery.post(ajaxurl, data, function(response) {
			jQuery("#universal_video_player_and_bg_sortable").sortable('enable');
			jQuery("#universal_video_player_and_bg_updating_witness").css("display","none");
			//alert('Got this from the server: ' + response);
		});
	}
}




function universal_video_player_and_bg_duplicate(action_type,recordID) {
	var data ="action=universal_video_player_and_bg_duplicate_record&security=<?php echo $universal_video_player_and_bg_duplicate_record_ajax_nonce; ?>&action_type="+action_type+"&recordID="+recordID;

	// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
	jQuery.post(ajaxurl, data, function(response) {
		//alert ("ok");
		jQuery('#form-elements-universal_video_player_and_bg').submit();
	});
}


function showDialogPreview(thePlayerID) {  //load content and open dialog
	var data ="action=universal_video_player_and_bg_preview_record&security=<?php echo $universal_video_player_and_bg_preview_record_ajax_nonce; ?>&thePlayerID="+thePlayerID;

	// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
	jQuery.post(ajaxurl, data, function(response) {
		//jQuery("#previewDialog").html(response);
		jQuery('#previewDialogIframe').attr('src','<?php echo plugins_url("tpl/preview.html?d=".time(), __FILE__)?>');
		jQuery("#previewDialog").dialog("open");
	});
}



jQuery(document).ready(function($) {
	/*PREVIEW DIALOG BOX*/
	jQuery( "#previewDialog" ).dialog({
	  minWidth:1200,
	  minHeight:500,
	  title:"Player Preview",
	  modal: true,
	  autoOpen:false,
	  hide: "fade",
	  resizable: false,
	  open: function() {
		//jQuery( this ).html();
	  },
	  close: function() {
		//jQuery("#previewDialog").html('');
		jQuery('#previewDialogIframe').attr('src','');
	  }
	});

	/* THE PLAYLIST */
	if (jQuery('#universal_video_player_and_bg_sortable').length) {
		jQuery( '#universal_video_player_and_bg_sortable' ).sortable({
			placeholder: "ui-state-highlight",
			start: function(event, ui) {
	            ord_start = ui.item.prevAll().length + 1;
	        },
			update: function(event, ui) {
	        	jQuery("#universal_video_player_and_bg_sortable").sortable('disable');
	        	jQuery("#universal_video_player_and_bg_updating_witness").css("display","block");
				var ord_stop=ui.item.prevAll().length + 1;
				var elem_id=ui.item.attr("id");
				//alert (ui.item.attr("id"));
				//alert (ord_start+' --- '+ord_stop);
				var data = "action=universal_video_player_and_bg_update_playlist_record&security=<?php echo $universal_video_player_and_bg_update_playlist_record_ajax_nonce; ?>&updateType=change_ord&ord_start="+ord_start+"&ord_stop="+ord_stop+"&elem_id="+elem_id;
				// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
				jQuery.post(ajaxurl, data, function(response) {
					jQuery("#universal_video_player_and_bg_sortable").sortable('enable');
					jQuery("#universal_video_player_and_bg_updating_witness").css("display","none");
					//alert('Got this from the server: ' + response);
				});
			}
		});
	}

/* THE LAYERS */
	if (jQuery('#universal_video_player_and_bg_layers_sortable').length) {
		jQuery( '#universal_video_player_and_bg_layers_sortable' ).sortable({
			placeholder: "ui-state-highlight",
			start: function(event, ui) {
	            ord_start = ui.item.prevAll().length + 1;
	        },
			update: function(event, ui) {
	        	jQuery("#universal_video_player_and_bg_layers_sortable").sortable('disable');
	        	jQuery("#universal_video_player_and_bg_updating_witness").css("display","block");
				var ord_stop=ui.item.prevAll().length + 1;
				var elem_id=ui.item.attr("id");
				var photoid=ui.item.attr("data-photoid");
				//alert (elem_id+' --- '+photoid+' --- '+ord_start+' --- '+ord_stop);

				var lis = jQuery('#universal_video_player_and_bg_layers_sortable').children();
				var i=0;
				lis.each(function() {
					i++;
				   currentLi = jQuery(this);
				   //new order
				   jQuery('input[name=ord_input_'+currentLi.attr('id')+']').val(i);

				   //new z-index
				    jQuery('#draggable'+currentLi.attr('id')).css({
						'zIndex':100-i
					});
					//alert (currentLi.attr('id')+'  ---  '+jQuery('#draggable'+currentLi.attr('id')).css('zIndex'));
				});


				var data = "action=universal_video_player_and_bg_update_playlist_record&security=<?php echo $universal_video_player_and_bg_update_playlist_record_ajax_nonce; ?>&updateType=change_layers_ord&ord_start="+ord_start+"&ord_stop="+ord_stop+"&photoid="+photoid+"&elem_id="+elem_id;
				// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
				jQuery.post(ajaxurl, data, function(response) {
					jQuery("#universal_video_player_and_bg_layers_sortable").sortable('enable');
					jQuery("#universal_video_player_and_bg_updating_witness").css("display","none");
					//alert('Got this from the server: ' + response);
				});
			}
		});
	}


	<?php
		$rows_count = $wpdb->get_var( "SELECT COUNT(*) FROM ". $wpdb->prefix . "universal_video_player_and_bg_playlist;" );
		for ($i=1;$i<=$rows_count;$i++) {
	?>


				jQuery('#upload_img_button_universal_video_player_and_bg_<?php echo $i?>').click(function(event) {
						var file_frame;
						event.preventDefault();
						// If the media frame already exists, reopen it.
						if ( file_frame ) {
							file_frame.open();
							return;
						}
						// Create the media frame.
						file_frame = wp.media.frames.file_frame = wp.media({
							title: jQuery( this ).data( 'uploader_title' ),
							button: {
							text: jQuery( this ).data( 'uploader_button_text' ),
							},
							multiple: false // Set to true to allow multiple files to be selected
						});
						// When an image is selected, run a callback.
						file_frame.on( 'select', function() {
							// We set multiple to false so only get one image from the uploader
							attachment = file_frame.state().get('selection').first().toJSON();
							// Do something with attachment.id and/or attachment.url here
							//alert (attachment.url);
							document.forms["form-playlist-universal_video_player_and_bg-"+<?php echo $i?>]['data-bottom-thumb'].value=attachment.url;
							jQuery('#data-bottom-thumb_'+<?php echo $i?>).attr('src',attachment.url);
						});
						// Finally, open the modal
						file_frame.open();
				});



				jQuery('#upload_selfhostedMP4_<?php echo $i?>').click(function(event) {
						var file_frame;
						event.preventDefault();
						// If the media frame already exists, reopen it.
						if ( file_frame ) {
							file_frame.open();
							return;
						}
						// Create the media frame.
						file_frame = wp.media.frames.file_frame = wp.media({
							title: jQuery( this ).data( 'uploader_title' ),
							button: {
							text: jQuery( this ).data( 'uploader_button_text' ),
							},
							multiple: false // Set to true to allow multiple files to be selected
						});
						// When an image is selected, run a callback.
						file_frame.on( 'select', function() {
							// We set multiple to false so only get one image from the uploader
							attachment = file_frame.state().get('selection').first().toJSON();
							// Do something with attachment.id and/or attachment.url here
							//alert (attachment.url);
							document.forms["form-playlist-universal_video_player_and_bg-"+<?php echo $i?>]['data-selfhostedMP4'].value=attachment.url;
							//jQuery('#data-selfhostedMP4_'+<?php echo $i?>).attr('src',attachment.url);
						});
						// Finally, open the modal
						file_frame.open();
				});



				jQuery('#upload_selfhostedWEBM_<?php echo $i?>').click(function(event) {
						var file_frame;
						event.preventDefault();
						// If the media frame already exists, reopen it.
						if ( file_frame ) {
							file_frame.open();
							return;
						}
						// Create the media frame.
						file_frame = wp.media.frames.file_frame = wp.media({
							title: jQuery( this ).data( 'uploader_title' ),
							button: {
							text: jQuery( this ).data( 'uploader_button_text' ),
							},
							multiple: false // Set to true to allow multiple files to be selected
						});
						// When an image is selected, run a callback.
						file_frame.on( 'select', function() {
							// We set multiple to false so only get one image from the uploader
							attachment = file_frame.state().get('selection').first().toJSON();
							// Do something with attachment.id and/or attachment.url here
							//alert (attachment.url);
							document.forms["form-playlist-universal_video_player_and_bg-"+<?php echo $i?>]['data-selfhostedWEBM'].value=attachment.url;
							//jQuery('#data-selfhostedWEBM_'+<?php echo $i?>).attr('src',attachment.url);
						});
						// Finally, open the modal
						file_frame.open();
				});





/*		jQuery('#upload_img_button_universal_video_player_and_bg_<?php echo $i?>').click(function() {
		 formfield = 'data-bottom-thumb';
		 the_i=<?php echo $i?>;
		 tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
		 return false;
		});

		jQuery('#upload_selfhostedMP4_<?php echo $i?>').click(function() {
		 formfield = 'data-selfhostedMP4';
		 the_i=<?php echo $i?>;
		 tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
		 return false;
		});

		jQuery('#upload_selfhostedWEBM_<?php echo $i?>').click(function() {
		 formfield = 'data-selfhostedWEBM';
		 the_i=<?php echo $i?>;
		 tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
		 return false;
		});*/



	jQuery("#form-playlist-universal_video_player_and_bg-<?php echo $i?>").submit(function(event) {

		/* stop form from submitting normally */
		event.preventDefault();

		//show loading image
		jQuery('#ajax-message-<?php echo $i?>').html('<img src="<?php echo plugins_url('universal_video_player_and_bg/images/ajax-loader.gif', dirname(__FILE__))?>" />');
		var data ="action=universal_video_player_and_bg_update_playlist_record&security=<?php echo $universal_video_player_and_bg_update_playlist_record_ajax_nonce; ?>&"+jQuery("#form-playlist-universal_video_player_and_bg-<?php echo $i?>").serialize();

		// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		jQuery.post(ajaxurl, data, function(response) {
			//alert('Got this from the server: ' + response);
			//alert(jQuery("#form-playlist-universal_video_player_and_bg-<?php echo $i?>").serialize());
			var new_img = '';
			if (document.forms["form-playlist-universal_video_player_and_bg-<?php echo $i?>"]['data-bottom-thumb'].value!='')
				new_img=document.forms["form-playlist-universal_video_player_and_bg-<?php echo $i?>"]['data-bottom-thumb'].value;
			jQuery('#top_image_'+document.forms["form-playlist-universal_video_player_and_bg-<?php echo $i?>"].id.value).attr('src',new_img);
			jQuery('#ajax-message-<?php echo $i?>').html(response);
		});
	});
	<?php } ?>

});
</script>
<?php

		}
	}
}

//universal_video_player_and_bg_update_playlist_record is the action=universal_video_player_and_bg_update_playlist_record

add_action('wp_ajax_universal_video_player_and_bg_update_playlist_record', 'universal_video_player_and_bg_update_playlist_record_callback');

function universal_video_player_and_bg_update_playlist_record_callback() {

	check_ajax_referer( 'universal_video_player_and_bg_update_playlist_record-special-string', 'security' ); //security=<?php echo $universal_video_player_and_bg_update_playlist_record_ajax_nonce;
	global $wpdb;
	global $universal_video_player_and_bg_messages;
	$errors_arr=array();
	//$wpdb->show_errors();

	//delete entire record
	if ($_POST['updateType']=='universal_video_player_and_bg_delete_entire_record') {
		$delete_id=$_POST['delete_id'];
		$safe_sql=$wpdb->prepare("SELECT * FROM ".$wpdb->prefix."universal_video_player_and_bg_playlist WHERE id = %d",$delete_id);
		$row = $wpdb->get_row($safe_sql, ARRAY_A);
		$row=universal_video_player_and_bg_unstrip_array($row);

		//delete the entire record
		$wpdb->query($wpdb->prepare("DELETE FROM ".$wpdb->prefix."universal_video_player_and_bg_playlist WHERE id = %d",$delete_id));
		//update the order for the rest ord=ord-1 for > ord
		$wpdb->query($wpdb->prepare("UPDATE ".$wpdb->prefix."universal_video_player_and_bg_playlist SET ord=ord-1 WHERE playerid = %d and  ord>".$row['ord'],$_SESSION['xid']));
	}

	//update elements order
	if ($_POST['updateType']=='change_ord') {
		$sql_arr=array();
		$ord_start=$_POST['ord_start'];
		$ord_stop=$_POST['ord_stop'];
		$elem_id=(int)$_POST['elem_id'];
		$ord_direction='+1';
		if ($ord_start<$ord_stop)
			$sql_arr[]="UPDATE ".$wpdb->prefix."universal_video_player_and_bg_playlist SET ord=ord-1  WHERE playerid = ".$_SESSION['xid']." and ord>".$ord_start." and ord<=".$ord_stop;
		else
			$sql_arr[]="UPDATE ".$wpdb->prefix."universal_video_player_and_bg_playlist SET ord=ord+1  WHERE playerid = ".$_SESSION['xid']." and ord>=".$ord_stop." and ord<".$ord_start;
		$sql_arr[]="UPDATE ".$wpdb->prefix."universal_video_player_and_bg_playlist SET ord=".$ord_stop." WHERE id=".$elem_id;

		//echo "elem_id: ".$elem_id."----ord_start: ".$ord_start."----ord_stop: ".$ord_stop;
		foreach ($sql_arr as $sql)
			$wpdb->query($sql);
	}





	//submit update
	/*if (empty($_POST['img']))
		$errors_arr[]=$universal_video_player_and_bg_messages['empty_img'];*/

	$theid=isset($_POST['id'])?$_POST['id']:0;
	if($theid>0 && !count($errors_arr)) {
		/*$except_arr=array('Submit'.$theid,'id','ord','action','security','updateType','uniqueUploadifyID');
		foreach ($_POST as $key=>$val){
			if (in_array($key,$except_arr)) {
				unset($_POST[$key]);
			}
		}*/
		//update playlist
		/*$wpdb->update(
			$wpdb->prefix .'universal_video_player_and_bg_playlist',
				array(
				  'data-bottom-thumb' => $_POST['data-bottom-thumb'],
				  'data-youtube' => $_POST['data-youtube'],
				  'data-vimeo' => $_POST['data-vimeo'],
				  'data-selfhostedMP4' => $_POST['data-selfhostedMP4'],
				  'data-selfhostedWEBM' => $_POST['data-selfhostedWEBM'],
				  'data-videoProportionWidth' => $_POST['data-videoProportionWidth']
				),
			array( 'id' => $theid )
		);*/

		$except_arr=array('Submit'.$theid,'id','ord','action','security','updateType','pll_ajax_backend','page_scroll_to_id_instances');
		foreach ($_POST as $key=>$val){
			if (in_array($key,$except_arr)) {
				unset($_POST[$key]);
			}
		}

		$wpdb->update(
			$wpdb->prefix .'universal_video_player_and_bg_playlist',
			$_POST,
			array( 'id' => $theid )
		);
		?>
			<div id="message" class="updated"><p><?php echo $universal_video_player_and_bg_messages['data_saved'];?></p></div>
	<?php
	} else if (!isset($_POST['updateType'])) {
		$errors_arr[]=$universal_video_player_and_bg_messages['invalid_request'];
	}
    //echo $theid;

	if (count($errors_arr)) { ?>
		<div id="error" class="error"><p><?php echo implode("<br>", $errors_arr);?></p></div>
	<?php }

	die(); // this is required to return a proper result
}









add_action('wp_ajax_universal_video_player_and_bg_preview_record', 'universal_video_player_and_bg_preview_record_callback');

function universal_video_player_and_bg_preview_record_callback() {
	check_ajax_referer( 'universal_video_player_and_bg_preview_record-special-string', 'security' );

	//echo universal_video_player_and_bg_generate_preview_code($_POST['thePlayerID']);
	$aux_val='<html>
					<head>
						<link href="'.plugins_url('universal_video_background/universal_video_background.css', __FILE__).'" rel="stylesheet" type="text/css">

						<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" type="text/javascript"></script>
						<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
						<script src="https://player.vimeo.com/api/player.js"></script>
						<script src="'.plugins_url('universal_video_background/js/universal_video_background.js', __FILE__).'" type="text/javascript"></script>
					</head>
					<body style="padding:0px;margin:0px; width:100%; height:100%;">';

	$aux_val.=universal_video_player_and_bg_generate_preview_code($_POST['thePlayerID']);
	$aux_val.="</body>
				</html>";
	$filename=plugin_dir_path(__FILE__) . 'tpl/preview.html';
	$fp = fopen($filename, 'w+');
	$fwrite = fwrite($fp, $aux_val);

	echo $fwrite;

	die(); // this is required to return a proper result
}



?>
