<?php
/*
Plugin Name: Universal Video Player - YouTube, Vimeo and Self-Hosted Videos
Description: This plugin will allow you to insert an advanced HTML5 Video Player With Playlist, Categories and Search
Version: 2.9
Author: Lambert Group
Author URI: https://codecanyon.net/user/LambertGroup/portfolio?ref=LambertGroup
*/

ini_set('display_errors', 0);
$universal_video_player_path = trailingslashit(dirname(__FILE__));  //empty

//all the messages
$universal_video_player_messages = array(
		'version' => '<div class="error">Universal Video Player - YouTube, Vimeo and Self-Hosted Videos plugin requires WordPress 3.0 or newer. <a href="https://codex.wordpress.org/Upgrading_WordPress">Please update!</a></div>',
		'data_saved' => 'Data Saved!',
		'empty_name' => 'Name - required',
		'empty_mp4' => 'MP4 - required',
		'empty_webm' => 'WEBM - required',
		'empty_categ' => 'Category - required',
		'invalid_request' => 'Invalid Request!',
		'generate_for_this_player' => 'You can start customizing this player.',
		'duplicate_complete' => 'Duplication process is complete!'
	);


global $wp_version;

if ( !version_compare($wp_version,"3.0",">=")) {
	die ($universal_video_player_messages['version']);
}




function universal_video_player_activate() {
	//db creation, create admin options etc.
	global $wpdb;

	$universal_video_player_collate = ' COLLATE utf8_general_ci';

	$sql0 = "CREATE TABLE `" . $wpdb->prefix . "universal_video_player_players` (
			`id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
			`name` VARCHAR( 255 ) NOT NULL ,
			PRIMARY KEY ( `id` )
			) ENGINE=MyISAM  DEFAULT CHARSET=utf8";

	$sql1 = "CREATE TABLE `" . $wpdb->prefix . "universal_video_player_settings` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `width` smallint(5) unsigned NOT NULL DEFAULT '980',
  `height` smallint(5) unsigned NOT NULL DEFAULT '399',
  `responsive` varchar(8) NOT NULL DEFAULT 'false',
  `responsiveRelativeToBrowser` varchar(8) NOT NULL DEFAULT 'false',
  `skin` varchar(255) NOT NULL DEFAULT 'whiteControllers',
  `initialVolume` float unsigned NOT NULL DEFAULT '1',
  `autoPlayFirstVideo` varchar(8) NOT NULL DEFAULT 'true',
	`autoPlayOnMobile` varchar(8) NOT NULL DEFAULT 'false',
  `loop` varchar(8) NOT NULL DEFAULT 'true',
  `shuffle` varchar(8) NOT NULL DEFAULT 'false',
  `firstVideo` smallint(5) unsigned NOT NULL DEFAULT '0',

  `showTopTitle` varchar(8) NOT NULL DEFAULT 'true',
  `showTimer` varchar(8) NOT NULL DEFAULT 'true',

  `showRewindBut` varchar(8) NOT NULL DEFAULT 'true',
  `showPlayBut` varchar(8) NOT NULL DEFAULT 'true',
  `showVolumeBut` varchar(8) NOT NULL DEFAULT 'true',

  `showDownloadBut` varchar(8) NOT NULL DEFAULT 'true',
  `showTwitterBut` varchar(8) NOT NULL DEFAULT 'true',
  `showInfoBut` varchar(8) NOT NULL DEFAULT 'true',
  `showFacebookBut` varchar(8) NOT NULL DEFAULT 'true',
  `facebookAppID` varchar(255) NOT NULL DEFAULT '',
  `facebookShareTitle` varchar(255) NOT NULL DEFAULT 'Universal Video Player',
  `facebookShareDescription` varchar(255) NOT NULL DEFAULT 'A top-notch responsive HTML5 Video Player compatible with all major browsers and mobile devices.',

  `showPlaylistBut` varchar(8) NOT NULL DEFAULT 'true',
  `showFullscreenBut` varchar(8) NOT NULL DEFAULT 'true',
  `showShuffleBut` varchar(8) NOT NULL DEFAULT 'true',
  `showNextPrevBut` varchar(8) NOT NULL DEFAULT 'true',
  `borderWidth` smallint(5) unsigned NOT NULL DEFAULT '20',
  `borderColor` varchar(20) NOT NULL DEFAULT '4a4a4a',
  `playlistWidth` smallint(5) unsigned NOT NULL DEFAULT '282',
  `suggestedQuality` varchar(255) NOT NULL DEFAULT 'default',
  `controlsBgFullScreenColor` varchar(20) NOT NULL DEFAULT '000000',
  `playlistScrollerBgColorOFF` varchar(20) NOT NULL DEFAULT 'CCCCCC',
  `playlistScrollerBgColorON` varchar(20) NOT NULL DEFAULT 'FFFFFF',
  `numberOfThumbsPerScreen` smallint(5) unsigned NOT NULL DEFAULT '0',
  `showLogo` varchar(8) NOT NULL DEFAULT 'true',
  `logoImagePath` text NOT NULL DEFAULT '',
  `logoLink` varchar(255) NOT NULL DEFAULT 'https://codecanyon.net/user/LambertGroup?ref=LambertGroup',
  `logoTarget` varchar(10) NOT NULL DEFAULT '_blank',
  `playlistRecordShowImg` varchar(8) NOT NULL DEFAULT 'true',
  `playlistRecordShowTitle` varchar(8) NOT NULL DEFAULT 'true',
  `playlistRecordShowDesc` varchar(8) NOT NULL DEFAULT 'true',
  `playlistRecordHeight` smallint(5) unsigned NOT NULL DEFAULT '89',
  `playlistRecordPadding` smallint(5) unsigned NOT NULL DEFAULT '10',
  `playlistTitleFontSize` smallint(5) unsigned NOT NULL DEFAULT '15',
  `playlistTitleLineHeight` smallint(5) unsigned NOT NULL DEFAULT '15',
  `playlistDescFontSize` smallint(5) unsigned NOT NULL DEFAULT '12',
  `playlistDescLineHeight` smallint(5) unsigned NOT NULL DEFAULT '15',
  `playlistRecordBgOffColor` varchar(20) NOT NULL DEFAULT 'eeeeee',
  `playlistRecordTitleOffColor` varchar(20) NOT NULL DEFAULT '333333',
  `playlistRecordDescOffColor` varchar(20) NOT NULL DEFAULT '333333',
  `playlistRecordBgOffImgOpacity` smallint(5) unsigned NOT NULL DEFAULT '100',
  `playlistRecordBgOnColor` varchar(20) NOT NULL DEFAULT 'de1a21',
  `playlistRecordTitleOnColor` varchar(20) NOT NULL DEFAULT 'FFFFFF',
  `playlistRecordDescOnColor` varchar(20) NOT NULL DEFAULT 'FFFFFF',
  `playlistRecordBgOnImgOpacity` smallint(5) unsigned NOT NULL DEFAULT '100',
  `playlistBgColor` varchar(20) NOT NULL DEFAULT '4a4a4a',
  `playlistRecordTitleLimit` smallint(5) unsigned NOT NULL DEFAULT '22',
  `playlistRecordDescLimit` smallint(5) unsigned NOT NULL DEFAULT '84',
  `showPlaylistOnInit` varchar(8) NOT NULL DEFAULT 'true',
  `categoryRecordBgOffColor` varchar(20) NOT NULL DEFAULT '000000',
  `categoryRecordBgOnColor` varchar(20) NOT NULL DEFAULT '252525',
  `categoryRecordBottomBorderOffColor` varchar(20) NOT NULL DEFAULT '333333',
  `categoryRecordBottomBorderOnColor` varchar(20) NOT NULL DEFAULT '333333',
  `categoryRecordTextOffColor` varchar(20) NOT NULL DEFAULT '4c4c4c',
  `categoryRecordTextOnColor` varchar(20) NOT NULL DEFAULT 'de1a21',
  `showCategs` varchar(8) NOT NULL DEFAULT 'true',

  `firstCateg` varchar(255) NOT NULL DEFAULT '',
  `selectedCategBg` varchar(20) NOT NULL DEFAULT 'transparent',
  `selectedCategOffColor` varchar(20) NOT NULL DEFAULT 'FFFFFF',
  `selectedCategOnColor` varchar(20) NOT NULL DEFAULT 'de1a28',
  `showSearch` varchar(8) NOT NULL DEFAULT 'true',
  `searchAreaBg` varchar(20) NOT NULL DEFAULT 'transparent',
  `searchInputText` varchar(255) NOT NULL DEFAULT 'search...',
  `searchInputBg` varchar(20) NOT NULL DEFAULT 'cccccc',
  `searchInputBorderColor` varchar(20) NOT NULL DEFAULT '4a4a4a',
  `searchInputTextColor` varchar(20) NOT NULL DEFAULT '333333',
  `topTitleColor` varchar(20) NOT NULL DEFAULT 'FFFFFF',
  `timerColor` varchar(20) NOT NULL DEFAULT 'FFFFFF',
  `bufferEmptyColor` varchar(20) NOT NULL DEFAULT '929292',
  `bufferFullColor` varchar(20) NOT NULL DEFAULT '333333',
  `seekbarColor` varchar(20) NOT NULL DEFAULT 'FFFFFF',
  `volumeOffColor` varchar(20) NOT NULL DEFAULT '454545',
  `volumeOnColor` varchar(20) NOT NULL DEFAULT 'FFFFFF',
  `playButColorOff` varchar(20) NOT NULL DEFAULT 'de1a21',
  `playButColorOn` varchar(20) NOT NULL DEFAULT 'de1a21',
  `googleTrakingOn` varchar(8) NOT NULL DEFAULT 'false',
  `googleTrakingCode` varchar(255) NOT NULL DEFAULT '',
  `getYouTubeData` varchar(8) NOT NULL DEFAULT 'true',
  `origThumbImgW` smallint(5) unsigned NOT NULL DEFAULT '69',
  `origThumbImgH` smallint(5) unsigned NOT NULL DEFAULT '69',
	  PRIMARY KEY  (`id`)
	) ENGINE=MyISAM  DEFAULT CHARSET=utf8";

	$sql2 = "CREATE TABLE `". $wpdb->prefix . "universal_video_player_playlist` (
	  `id` int(10) unsigned NOT NULL auto_increment,
	  `playerid` int(10) unsigned NOT NULL,
	  `youtube` varchar(150) NOT NULL,
	  `vimeo` varchar(150) NOT NULL,
	  `mp4` text NOT NULL,
	  `webm` text NOT NULL,
	  `imgplaylist` text NOT NULL,
	  `category` text NOT NULL,
	  `title` text,
	  `desc` text,
		`startpoint` varchar(255) NOT NULL DEFAULT '',
		`endpoint` varchar(255) NOT NULL DEFAULT '',
	  `ord` int(10) unsigned NOT NULL,
	  PRIMARY KEY  (`id`)
	) ENGINE=MyISAM  DEFAULT CHARSET=utf8";

	$sql3 = "CREATE TABLE `". $wpdb->prefix . "universal_video_player_categories` (
	  `id` int(10) unsigned NOT NULL auto_increment,
	  `categ` varchar(255) NOT NULL,
	  PRIMARY KEY  (`id`),
	  UNIQUE KEY `categ` ( `categ` )
	) ENGINE=MyISAM  DEFAULT CHARSET=utf8";

	require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
	dbDelta($sql0.$universal_video_player_collate);
	dbDelta($sql1.$universal_video_player_collate);
	dbDelta($sql2.$universal_video_player_collate);
	dbDelta($sql3.$universal_video_player_collate);

	//initialize the players table with the first player type
	$rows_count = $wpdb->get_var( "SELECT COUNT(*) FROM ". $wpdb->prefix ."universal_video_player_players;" );
	if (!$rows_count) {
		$wpdb->insert(
			$wpdb->prefix . "universal_video_player_players",
			array(
				'name' => 'White Controllers',
			),
			array(
				'%s'
			)
		);
	}

	// initialize the settings
	$rows_count = $wpdb->get_var( "SELECT COUNT(*) FROM ". $wpdb->prefix ."universal_video_player_settings;" );
	if (!$rows_count) {
		universal_video_player_insert_settings_record(1);
	}


	//initialize categories
	$rows_count = $wpdb->get_var( "SELECT COUNT(*) FROM ". $wpdb->prefix ."universal_video_player_categories;" );
	if (!$rows_count) {
		$wpdb->insert(
			$wpdb->prefix . "universal_video_player_categories",
			array(
				'categ' => 'ALL CATEGORIES'
			),
			array(
				'%s'
			)
		);
	}

}


function universal_video_player_uninstall() {
	global $wpdb;
	mysql_query("DROP TABLE `" . $wpdb->prefix . "universal_video_player_settings`" );
	mysql_query("DROP TABLE `" . $wpdb->prefix . "universal_video_player_playlist`" );
	mysql_query("DROP TABLE `" . $wpdb->prefix . "universal_video_player_players`" );
	mysql_query("DROP TABLE `" . $wpdb->prefix . "universal_video_player_categories`" );
}

function universal_video_player_insert_settings_record($player_id) {
	global $wpdb;
	$path_to_plugin = plugin_dir_url( __FILE__ );
	$wpdb->insert(
			$wpdb->prefix . "universal_video_player_settings",
			array(
				'skin' => 'whiteControllers',
				'logoImagePath' => $path_to_plugin.'universal_video_player/skins/logo_watermark.png',
			),
			array(
				'%s',
				'%s'
			)
		);
}


function universal_video_player_init_sessions() {
	global $wpdb;
	if (!session_id()) {
		session_start();

		//initialize the session
		if (!isset($_SESSION['xid'])) {
			$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_players) LIMIT 0, 1";
			$row = $wpdb->get_row($safe_sql,ARRAY_A);
			//$row=universal_video_player_unstrip_array($row);
    		$_SESSION['xid'] = $row['id'];
    		$_SESSION['xname'] = $row['name'];
		}
	}
}


function universal_video_player_load_styles() {
	if(strpos($_SERVER['PHP_SELF'], 'wp-admin') !== false) { //loads css in admin
		$page = (isset($_GET['page'])) ? $_GET['page'] : '';
		if(preg_match('/UNIVERSAL_VIDEO_PLAYER/i', $page)) {
			wp_enqueue_style('lbg_jquery-custom_css', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/pepper-grinder/jquery-ui.min.css');
			wp_enqueue_style('universal_video_player_css', plugins_url('css/styles.css', __FILE__));
			wp_enqueue_style('universal_video_player_colorpicker_css', plugins_url('css/colorpicker/colorpicker.css', __FILE__));

			wp_enqueue_style('thickbox');
		}
	} else if (!is_admin()) { //loads css in front-end
		wp_enqueue_style('universal_video_player_site_css', plugins_url('universal_video_player/universal_video_player.css', __FILE__));
		wp_register_style('pt_sans-googleFonts', 'https://fonts.googleapis.com/css?family=PT+Sans:400,700');
        wp_enqueue_style( 'pt_sans-googleFonts');
	}
}

function universal_video_player_load_scripts() {
	$page = (isset($_GET['page'])) ? $_GET['page'] : '';
	if(preg_match('/UNIVERSAL_VIDEO_PLAYER/i', $page)) {
		//loads scripts in admin
		//if (is_admin()) {
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
			wp_deregister_script('jquery-ui-button');	*/

			wp_enqueue_script('jquery');
			/*wp_register_script('lbg-admin-jquery', plugins_url('js/jquery-1.5.1.js', __FILE__));
			wp_enqueue_script('lbg-admin-jquery');*/

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

			/*wp_enqueue_script('jquery-form');
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
			wp_enqueue_script('jquery-effects-transfer');*/



			wp_register_script('lbg-admin-colorpicker', plugins_url('js/colorpicker/colorpicker.js', __FILE__));
			wp_enqueue_script('lbg-admin-colorpicker');

			wp_register_script('lbg-admin-editinplace', plugins_url('js/jquery.editinplace.js', __FILE__));
			wp_enqueue_script('lbg-admin-editinplace');

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
			wp_enqueue_script('jquery-ui-slider');
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
			wp_enqueue_script('jquery-ui-progressbar');
			//wp_enqueue_script('jquery-ui-tooltip');

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



		wp_register_script('lbg-mousewheel', plugins_url('universal_video_player/js/jquery.mousewheel.min.js', __FILE__));
		wp_enqueue_script('lbg-mousewheel');

		wp_register_script('lbg-touchSwipe', plugins_url('universal_video_player/js/jquery.touchSwipe.min.js', __FILE__));
		wp_enqueue_script('lbg-touchSwipe');

		wp_register_script('lbg-screenfull', plugins_url('universal_video_player/js/screenfull.min.js', __FILE__));
		wp_enqueue_script('lbg-screenfull');

		wp_register_script('lbg-vimeo', 'https://player.vimeo.com/api/player.js');
		wp_enqueue_script('lbg-vimeo');

		wp_register_script('lbg-universal_video_player', plugins_url('universal_video_player/js/universal_video_player.js', __FILE__));
		wp_enqueue_script('lbg-universal_video_player');

		wp_register_script('lbg-google_a', plugins_url('universal_video_player/js/google_a.js', __FILE__));
		wp_enqueue_script('lbg-google_a');
	}

}



// adds the menu pages
function universal_video_player_plugin_menu() {
	add_menu_page('UNIVERSAL VIDEO PLAYER Admin Interface', 'UNIVERSAL VIDEO PLAYER', 'edit_posts', 'UNIVERSAL_VIDEO_PLAYER', 'universal_video_player_overview_page',
	plugins_url('images/lbg_icon.png', __FILE__));
	add_submenu_page( 'UNIVERSAL_VIDEO_PLAYER', 'UNIVERSAL VIDEO PLAYER Overview', 'Overview', 'edit_posts', 'UNIVERSAL_VIDEO_PLAYER', 'universal_video_player_overview_page');
	add_submenu_page( 'UNIVERSAL_VIDEO_PLAYER', 'UNIVERSAL VIDEO PLAYER Manage Players', 'Manage Players', 'edit_posts', 'UNIVERSAL_VIDEO_PLAYER_Manage_Players', 'universal_video_player_player_manage_players_page');
	add_submenu_page( 'UNIVERSAL_VIDEO_PLAYER', 'UNIVERSAL VIDEO PLAYER Manage Players Add New', 'Add New', 'edit_posts', 'UNIVERSAL_VIDEO_PLAYER_Add_New', 'universal_video_player_player_manage_players_add_new_page');
	add_submenu_page( 'UNIVERSAL_VIDEO_PLAYER', 'UNIVERSAL VIDEO PLAYER Manage Categories', 'Manage Categories', 'edit_posts', 'UNIVERSAL_VIDEO_PLAYER_Manage_Categories', 'universal_video_player_player_manage_categories_page');
	add_submenu_page( 'UNIVERSAL VIDEO PLAYER Manage Categories', 'UNIVERSAL VIDEO PLAYER Manage Categories Add New', 'Add New', 'edit_posts', 'UNIVERSAL_VIDEO_PLAYER_Add_New_Category', 'universal_video_player_player_manage_players_add_new_category_page');
	add_submenu_page( 'UNIVERSAL VIDEO PLAYER Manage Players', 'UNIVERSAL VIDEO PLAYER Player Settings', 'Player Settings', 'edit_posts', 'UNIVERSAL_VIDEO_PLAYER_Settings', 'universal_video_player_player_settings_page');
	add_submenu_page( 'UNIVERSAL VIDEO PLAYER Manage Players', 'UNIVERSAL VIDEO PLAYER Player Playlist', 'Playlist', 'edit_posts', 'UNIVERSAL_VIDEO_PLAYER_Playlist', 'universal_video_player_player_playlist_page');
	add_submenu_page( 'UNIVERSAL_VIDEO_PLAYER_Settings', 'UNIVERSAL VIDEO PLAYER Player Settings', 'Duplicate Player', 'edit_posts', 'UNIVERSAL_VIDEO_PLAYER_Duplicate_Player', 'universal_video_player_duplicate_player_page');
	add_submenu_page( 'UNIVERSAL_VIDEO_PLAYER', 'UNIVERSAL VIDEO PLAYER Help', 'Help', 'edit_posts', 'UNIVERSAL_VIDEO_PLAYER_Help', 'universal_video_player_player_help_page');
}


//HTML content for overview page
function universal_video_player_overview_page()
{
	include_once($universal_video_player_path . 'tpl/overview.php');
}

//HTML content for Manage Players
function universal_video_player_player_manage_players_page()
{
	global $wpdb;
	global $universal_video_player_messages;

	//delete player
	if (isset($_GET['id'])) {
		//delete from wp_universal_video_player_players
		$wpdb->query($wpdb->prepare("DELETE FROM ".$wpdb->prefix."universal_video_player_players WHERE id = %d",$_GET['id']));

		//delete from wp_universal_video_player_settings
		$wpdb->query($wpdb->prepare("DELETE FROM ".$wpdb->prefix."universal_video_player_settings WHERE id = %d",$_GET['id']));

		//delete from wp_universal_video_player_playlist
		$wpdb->query($wpdb->prepare("DELETE FROM ".$wpdb->prefix."universal_video_player_playlist WHERE playerid = %d",$_GET['id']));

		//initialize the session
		$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_players) ORDER BY id";
		$row = $wpdb->get_row($safe_sql,ARRAY_A);
		$row=universal_video_player_unstrip_array($row);
		if ($row['id']) {
			$_SESSION['xid']=$row['id'];
			$_SESSION['xname']=$row['name'];
		}
	}


	$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_players) ORDER BY id";
	$result = $wpdb->get_results($safe_sql,ARRAY_A);
	//echo $wpdb->last_query;
	include_once($universal_video_player_path . 'tpl/players.php');

}

//HTML content for Manage Categories
function universal_video_player_player_manage_categories_page()
{
	global $wpdb;
	global $universal_video_player_messages;

	//delete player
	if (isset($_GET['id'])) {
		//delete from wp_universal_video_player_categories
		$wpdb->query($wpdb->prepare("DELETE FROM ".$wpdb->prefix."universal_video_player_categories WHERE id = %d",$_GET['id']));
	}

	if (isset($_GET['categID']) && isset($_GET['origCategName'])) {
		$wpdb->update(
				$wpdb->prefix .'universal_video_player_categories',
				array(
				'categ' => $_POST['update_value']
				),
				array( 'id' => $_GET['categID'] )
			);
	}


	$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_categories) ORDER BY id";
	$result = $wpdb->get_results($safe_sql,ARRAY_A);
	//echo $wpdb->last_query;
	include_once($universal_video_player_path . 'tpl/categories.php');

}


//HTML content for Manage Players - Add New
function universal_video_player_player_manage_players_add_new_page()
{
	global $wpdb;
	global $universal_video_player_messages;

	if($_POST['Submit'] == 'Add New') {
		$errors_arr=array();
		if (empty($_POST['name']))
			$errors_arr[]=$universal_video_player_messages['empty_name'];

		if (count($errors_arr)) {
				include_once($universal_video_player_path . 'tpl/add_player.php'); ?>
				<div id="error" class="error"><p><?php echo implode("<br>", $errors_arr);?></p></div>
		  	<?php } else { // no errors
					$wpdb->insert(
						$wpdb->prefix . "universal_video_player_players",
						array(
							'name' => $_POST['name']
						),
						array(
							'%s'
						)
					);
					//insert default player settings for this new player
					universal_video_player_insert_settings_record($wpdb->insert_id);
					?>
						<div class="wrap">
							<div id="lbg_logo">
								<h2>Manage Players - Add New Player</h2>
				 			</div>
							<div id="message" class="updated"><p><?php echo $universal_video_player_messages['data_saved'];?></p><p><?php echo $universal_video_player_messages['generate_for_this_player'];?></p></div>
							<div>
								<p>&raquo; <a href="?page=UNIVERSAL_VIDEO_PLAYER_Add_New">Add New (player)</a></p>
								<p>&raquo; <a href="?page=UNIVERSAL_VIDEO_PLAYER_Manage_Players">Back to Manage Players</a></p>
							</div>
						</div>
		  	<?php }
	} else {
		include_once($universal_video_player_path . 'tpl/add_player.php');
	}

}


//HTML content for Manage Categories - Add New Category
function universal_video_player_player_manage_players_add_new_category_page()
{
	global $wpdb;
	global $universal_video_player_messages;

	if($_POST['Submit'] == 'Add New') {
		$errors_arr=array();
		if (empty($_POST['categ']))
			$errors_arr[]=$universal_video_player_messages['empty_name'];

		if (count($errors_arr)) {
				include_once($universal_video_player_path . 'tpl/add_category.php'); ?>
				<div id="error" class="error"><p><?php echo implode("<br>", $errors_arr);?></p></div>
		  	<?php } else { // no errors
					$wpdb->insert(
						$wpdb->prefix . "universal_video_player_categories",
						array(
							'categ' => $_POST['categ']
						),
						array(
							'%s'
						)
					);
					?>
						<div class="wrap">
							<div id="lbg_logo">
								<h2>Manage Categories - Add New Category</h2>
				 			</div>
							<div id="message" class="updated"><p><?php echo $universal_video_player_messages['data_saved'];?></p></div>
							<div>
								<p>&raquo; <a href="?page=UNIVERSAL_VIDEO_PLAYER_Add_New_Category">Add New (category)</a></p>
								<p>&raquo; <a href="?page=UNIVERSAL_VIDEO_PLAYER_Manage_Categories">Back to Manage Categories</a></p>
							</div>
						</div>
		  	<?php }
	} else {
		include_once($universal_video_player_path . 'tpl/add_category.php');
	}

}



//HTML content for playersettings
function universal_video_player_player_settings_page()
{
	global $wpdb;
	global $universal_video_player_messages;

	if (isset($_GET['id']) && isset($_GET['name'])) {
		$_SESSION['xid']=$_GET['id'];
		$_SESSION['xname']=$_GET['name'];
	}

	//$wpdb->show_errors();
	/*if (check_admin_referer('universal_video_player_settings_update')) {
		echo "update";
	}*/


	if($_POST['Submit'] == 'Update Player Settings') {
		$_GET['xmlf']='';
		$except_arr=array('Submit','name','pll_ajax_backend','pll_ajax_backend','page_scroll_to_id_instances');
			$wpdb->update(
				$wpdb->prefix .'universal_video_player_players',
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
				$wpdb->prefix .'universal_video_player_settings',
				$_POST,
				array( 'id' => $_SESSION['xid'] )
			);
			?>
			<div id="message" class="updated"><p><?php echo $universal_video_player_messages['data_saved'];?></p></div>
	<?php
	}


	//echo "WP_PLUGIN_URL: ".WP_PLUGIN_URL;
	$safe_sql=$wpdb->prepare( "SELECT * FROM (".$wpdb->prefix ."universal_video_player_settings) WHERE id = %d",$_SESSION['xid'] );
	$row = $wpdb->get_row($safe_sql,ARRAY_A);
	$row=universal_video_player_unstrip_array($row);
	$_POST = $row;
	$_POST=universal_video_player_unstrip_array($_POST);

	//categories
	$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_categories) ORDER BY categ";
	$result = $wpdb->get_results($safe_sql,ARRAY_A);
	include_once($universal_video_player_path . 'tpl/settings_form.php');

}


function universal_video_player_player_playlist_page()
{
	global $wpdb;
	global $universal_video_player_messages;

	if (isset($_GET['id']) && isset($_GET['name'])) {
		$_SESSION['xid']=$_GET['id'];
		$_SESSION['xname']=$_GET['name'];
	}

	$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_categories) ORDER BY categ";
	$result = $wpdb->get_results($safe_sql,ARRAY_A);

	if ($_GET['xmlf']=='add_playlist_record') {
		if($_POST['Submit'] == 'Add Record') {
			$errors_arr=array();
			/*if (empty($_POST['mp4']))
				 $errors_arr[]=$universal_video_player_messages['empty_mp4'];
			if (empty($_POST['wem']))
				 $errors_arr[]=$universal_video_player_messages['empty_webm'];*/
			if (empty($_POST['category']))
				 $errors_arr[]=$universal_video_player_messages['empty_categ'];


			if (count($errors_arr)) {
				include_once($universal_video_player_path . 'tpl/add_playlist_record.php'); ?>
				<div id="error" class="error"><p><?php echo implode("<br>", $errors_arr);?></p></div>
	  <?php } else { // all requested fields are filled



		if (count($errors_arr)) {
			include_once($universal_video_player_path . 'tpl/add_playlist_record.php'); ?>
			<div id="error" class="error"><p><?php echo implode("<br>", $errors_arr);?></p></div>
	  	<?php } else { // no upload errors
				$all_categs=implode(";", $_POST['category']);
				$max_ord = 1+$wpdb->get_var( $wpdb->prepare( "SELECT max(ord) FROM ". $wpdb->prefix ."universal_video_player_playlist WHERE playerid = %d",$_SESSION['xid'] ) );

				$wpdb->insert(
					$wpdb->prefix . "universal_video_player_playlist",
					array(
						'playerid' => $_POST['playerid'],
						'mp4' => $_POST['mp4'],
						'webm' => $_POST['webm'],
						'youtube' => $_POST['youtube'],
						'vimeo' => $_POST['vimeo'],
						'category' => $all_categs,
						'imgplaylist' => $_POST['imgplaylist'],
						'title' => $_POST['title'],
						'desc' => $_POST['desc'],
						'startpoint' => $_POST['startpoint'],
						'endpoint' => $_POST['endpoint'],
						'ord' => $max_ord
					),
					array(
						'%d',
						'%s',
						'%s',
						'%s',
						'%s',
						'%s',
						'%s',
						'%s',
						'%s',
						'%s',
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

					$sql_arr[]="UPDATE ".$wpdb->prefix."universal_video_player_playlist SET ord=ord+1  WHERE playerid = ".$_SESSION['xid']." and ord>=".$ord_stop." and ord<".$ord_start;
					$sql_arr[]="UPDATE ".$wpdb->prefix."universal_video_player_playlist SET ord=".$ord_stop." WHERE id=".$elem_id;

					//echo "elem_id: ".$elem_id."----ord_start: ".$ord_start."----ord_stop: ".$ord_stop;
					foreach ($sql_arr as $sql)
						$wpdb->query($sql);
				}
				?>
					<div class="wrap">
						<div id="lbg_logo">
							<h2>Playlist for player: <span style="color:#FF0000; font-weight:bold;"><?php echo $_SESSION['xname']?> - ID #<?php echo $_SESSION['xid']?></span> - Add New</h2>
			 			</div>
						<div id="message" class="updated"><p><?php echo $universal_video_player_messages['data_saved'];?></p></div>
						<div>
							<p>&raquo; <a href="?page=UNIVERSAL_VIDEO_PLAYER_Playlist&xmlf=add_playlist_record">Add New</a></p>
							<p>&raquo; <a href="?page=UNIVERSAL_VIDEO_PLAYER_Playlist">Back to Playlist</a></p>
						</div>
					</div>
	  	<?php }
	  		}
		} else {
			include_once($universal_video_player_path . 'tpl/add_playlist_record.php');
		}

	} else {
		if ($_GET['duplicate_id']!='') {
						$max_ord = 1+$wpdb->get_var( $wpdb->prepare( "SELECT max(ord) FROM ". $wpdb->prefix ."universal_video_player_playlist WHERE playerid = %d",$_SESSION['xid'] ) );
						$safe_sql=$wpdb->prepare( "INSERT INTO ".$wpdb->prefix ."universal_video_player_playlist (  `playerid` ,`youtube` ,`vimeo` ,`mp4` ,`webm` ,`imgplaylist` ,`category` ,`title` ,`desc` ,`startpoint`,`endpoint` ,`ord`  )  SELECT  `playerid` ,`youtube` ,`vimeo` ,`mp4` ,`webm` ,`imgplaylist` ,`category` ,`title` ,`desc` ,`startpoint`,`endpoint` , ".$max_ord." FROM (".$wpdb->prefix ."universal_video_player_playlist) WHERE id = %d",$_GET['duplicate_id'] );
						$wpdb->query($safe_sql);
						//$lastID=$wpdb->insert_id;
						//echo $wpdb->last_query;


						echo "<script>location.href='?page=UNIVERSAL_VIDEO_PLAYER_Playlist&id=".$_SESSION['xid']."&name=".$_SESSION['xname']."'</script>";
		}

		$safe_sql=$wpdb->prepare( "SELECT * FROM (".$wpdb->prefix ."universal_video_player_playlist) WHERE playerid = %d ORDER BY ord",$_SESSION['xid'] );
		$result = $wpdb->get_results($safe_sql,ARRAY_A);

		$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_categories) ORDER BY categ";
	    $result_categ = $wpdb->get_results($safe_sql,ARRAY_A);

		//$_POST=universal_video_player_unstrip_array($_POST);
		include_once($universal_video_player_path . 'tpl/playlist.php');
	}
}


//HTML duplicate player
function universal_video_player_duplicate_player_page()
{
	global $wpdb;
	global $universal_video_player_messages;

	if (isset($_GET['id']) && isset($_GET['name'])) {
		$_SESSION['xid']=$_GET['id'];
		$_SESSION['xname']=$_GET['name'];
	}

	//$wpdb->show_errors();


	//echo "WP_PLUGIN_URL: ".WP_PLUGIN_URL;
	//$safe_sql=$wpdb->prepare( "INSERT INTO ".$wpdb->prefix ."universal_video_player_settings SELECT * FROM (".$wpdb->prefix ."universal_video_player_settings) WHERE id = %d",$_SESSION['xid'] );
	//insert player
	$wpdb->insert(
			$wpdb->prefix . "universal_video_player_players",
			array(
				'name' => 'Duplicate of Player #'.$_SESSION['xid']
			),
			array(
				'%s'
			)
		);

	//duplicate settings
	$safe_sql=$wpdb->prepare( "INSERT INTO ".$wpdb->prefix ."universal_video_player_settings (`width`, `height`, `responsive`, `responsiveRelativeToBrowser`, `skin`, `initialVolume`, `autoPlayFirstVideo`, `autoPlayOnMobile`, `loop`, `shuffle`, `firstVideo`, `showTopTitle`, `showTimer`, `showRewindBut`, `showPlayBut`, `showVolumeBut`, `showDownloadBut`, `showTwitterBut`, `showInfoBut`, `showFacebookBut`, `facebookAppID`, `facebookShareTitle`, `facebookShareDescription`, `showPlaylistBut`, `showFullscreenBut`, `showShuffleBut`, `showNextPrevBut`, `borderWidth`, `borderColor`, `playlistWidth`, `suggestedQuality`, `controlsBgFullScreenColor`, `playlistScrollerBgColorOFF`, `playlistScrollerBgColorON`, `numberOfThumbsPerScreen`, `showLogo`, `logoImagePath`, `logoLink`, `logoTarget`, `playlistRecordShowImg`, `playlistRecordShowTitle`, `playlistRecordShowDesc`, `playlistRecordHeight`, `playlistRecordPadding`, `playlistTitleFontSize`, `playlistTitleLineHeight`, `playlistDescFontSize`, `playlistDescLineHeight`, `playlistRecordBgOffColor`, `playlistRecordTitleOffColor`, `playlistRecordDescOffColor`, `playlistRecordBgOffImgOpacity`, `playlistRecordBgOnColor`, `playlistRecordTitleOnColor`, `playlistRecordDescOnColor`, `playlistRecordBgOnImgOpacity`, `playlistBgColor`, `playlistRecordTitleLimit`, `playlistRecordDescLimit`, `showPlaylistOnInit`, `categoryRecordBgOffColor`, `categoryRecordBgOnColor`, `categoryRecordBottomBorderOffColor`, `categoryRecordBottomBorderOnColor`, `categoryRecordTextOffColor`, `categoryRecordTextOnColor`, `showCategs`, `firstCateg`, `selectedCategBg`, `selectedCategOffColor`, `selectedCategOnColor`, `showSearch`, `searchAreaBg`, `searchInputText`, `searchInputBg`, `searchInputBorderColor`, `searchInputTextColor`, `topTitleColor`, `timerColor`, `bufferEmptyColor`, `bufferFullColor`, `seekbarColor`, `volumeOffColor`, `volumeOnColor`, `playButColorOff`, `playButColorOn`, `googleTrakingOn`, `googleTrakingCode`, `origThumbImgW`, `origThumbImgH`, `getYouTubeData` ) SELECT `width`, `height`, `responsive`, `responsiveRelativeToBrowser`, `skin`, `initialVolume`, `autoPlayFirstVideo`, `autoPlayOnMobile`, `loop`, `shuffle`, `firstVideo`, `showTopTitle`, `showTimer`, `showRewindBut`, `showPlayBut`, `showVolumeBut`, `showDownloadBut`, `showTwitterBut`, `showInfoBut`, `showFacebookBut`, `facebookAppID`, `facebookShareTitle`, `facebookShareDescription`, `showPlaylistBut`, `showFullscreenBut`, `showShuffleBut`, `showNextPrevBut`, `borderWidth`, `borderColor`, `playlistWidth`, `suggestedQuality`, `controlsBgFullScreenColor`, `playlistScrollerBgColorOFF`, `playlistScrollerBgColorON`, `numberOfThumbsPerScreen`, `showLogo`, `logoImagePath`, `logoLink`, `logoTarget`, `playlistRecordShowImg`, `playlistRecordShowTitle`, `playlistRecordShowDesc`, `playlistRecordHeight`, `playlistRecordPadding`, `playlistTitleFontSize`, `playlistTitleLineHeight`, `playlistDescFontSize`, `playlistDescLineHeight`, `playlistRecordBgOffColor`, `playlistRecordTitleOffColor`, `playlistRecordDescOffColor`, `playlistRecordBgOffImgOpacity`, `playlistRecordBgOnColor`, `playlistRecordTitleOnColor`, `playlistRecordDescOnColor`, `playlistRecordBgOnImgOpacity`, `playlistBgColor`, `playlistRecordTitleLimit`, `playlistRecordDescLimit`, `showPlaylistOnInit`, `categoryRecordBgOffColor`, `categoryRecordBgOnColor`, `categoryRecordBottomBorderOffColor`, `categoryRecordBottomBorderOnColor`, `categoryRecordTextOffColor`, `categoryRecordTextOnColor`, `showCategs`, `firstCateg`, `selectedCategBg`, `selectedCategOffColor`, `selectedCategOnColor`, `showSearch`, `searchAreaBg`, `searchInputText`, `searchInputBg`, `searchInputBorderColor`, `searchInputTextColor`, `topTitleColor`, `timerColor`, `bufferEmptyColor`, `bufferFullColor`, `seekbarColor`, `volumeOffColor`, `volumeOnColor`, `playButColorOff`, `playButColorOn`, `googleTrakingOn`, `googleTrakingCode`, `origThumbImgW`, `origThumbImgH`, `getYouTubeData` FROM (".$wpdb->prefix ."universal_video_player_settings) WHERE id = %d",$_SESSION['xid'] );
	$wpdb->query($safe_sql);
	?>
	<div id="message" class="updated"><p><?php echo $universal_video_player_messages['duplicate_complete'];?></p></div>
	<?php

	//echo $wpdb->last_query;
	$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_players) ORDER BY id";
	$result = $wpdb->get_results($safe_sql,ARRAY_A);
	include_once($universal_video_player_path . 'tpl/players.php');


}


function universal_video_player_player_help_page()
{
	//include_once(plugins_url('tpl/help.php', __FILE__));
	include_once($universal_video_player_path . 'tpl/help.php');
}


function universal_video_player_generate_preview_code($sliderID,$videosInitialOrd) {
	global $wpdb;

	$safe_sql=$wpdb->prepare( "SELECT * FROM (".$wpdb->prefix ."universal_video_player_settings) WHERE id = %d",$sliderID );
	$row = $wpdb->get_row($safe_sql,ARRAY_A);
	$row=universal_video_player_unstrip_array($row);

	$safe_sql="SELECT * FROM (".$wpdb->prefix ."universal_video_player_categories) ORDER BY categ";
	$result_categ = $wpdb->get_results($safe_sql,ARRAY_A);

	$path_to_plugin = plugin_dir_url( __FILE__ );
	$preload_aux='metadata';
	if ($row["preload"])
		$preload_aux=$row["preload"];



	//first categ
	$first_categ='';
	foreach ( $result_categ as $row_categ ) {
			if ( $row['firstCateg']==$row_categ['id']) {
				$first_categ=stripslashes($row_categ['categ']);
			}
	}

	//download
	$pathToDownloadFile_aux=$path_to_plugin.'universal_video_player/';

	$safe_sql=$wpdb->prepare( "SELECT * FROM (".$wpdb->prefix ."universal_video_player_playlist) WHERE playerid = %d ORDER BY ord",$sliderID );
	$result = $wpdb->get_results($safe_sql,ARRAY_A);


	$playlist_str='';
	$firstRecord='';
	$videosInitialOrd_arr = explode(',', $videosInitialOrd);
	$firstVideoAux_arr=array();
	foreach ( $result as $row_playlist ) {

		$row_playlist=universal_video_player_unstrip_array($row_playlist);


		$mp4_path=$row_playlist["mp4"];
		$webm_path=$row_playlist["webm"];
		$categ_arr=array();


		foreach ( $result_categ as $row_categ ) {
			if (preg_match_all('/\b'.$row_categ["id"].'\b/', stripslashes($row_playlist['category']), $matches)) {
			//if ( strpos($row_playlist['category'], $row_categ['id']) === false ) {
				// nothing
			//} else {
				$categ_arr[]=stripslashes($row_categ['categ']);
			}
		}

		//if ($videosInitialOrd==$row_playlist['ord']) {
		if (in_array($row_playlist['ord'], $videosInitialOrd_arr)) {
			$firstVideoAux_arr[$row_playlist['ord']]='<li data-bottom-thumb="'.$row_playlist["imgplaylist"].'"
							data-title="'.$row_playlist["title"].'"
							data-desc="'.$row_playlist["desc"].'"
							data-youtube="'.$row_playlist["youtube"].'"
							data-vimeo="'.$row_playlist["vimeo"].'"
							data-selfhostedMP4="'.$mp4_path.'"
							data-selfhostedWEBM="'.$webm_path.'"
							data-startpoint="'.$row_playlist["startpoint"].'"
							data-endpoint="'.$row_playlist["endpoint"].'"
							data-category="'.implode(";",$categ_arr).'">
					   </li>';
		} else {
			$playlist_str.='<li data-bottom-thumb="'.$row_playlist["imgplaylist"].'"
							data-title="'.$row_playlist["title"].'"
							data-desc="'.$row_playlist["desc"].'"
							data-youtube="'.$row_playlist["youtube"].'"
							data-vimeo="'.$row_playlist["vimeo"].'"
							data-selfhostedMP4="'.$mp4_path.'"
							data-selfhostedWEBM="'.$webm_path.'"
							data-startpoint="'.$row_playlist["startpoint"].'"
							data-endpoint="'.$row_playlist["endpoint"].'"
							data-category="'.implode(";",$categ_arr).'">
					   </li>';
		}
	}
	if ($videosInitialOrd!=-1) {
		$playlist_str='';
	}

	foreach ( $videosInitialOrd_arr as $term ) {
		$firstRecord.=$firstVideoAux_arr[$term];
	}


	$new_div_start='';
	$new_div_end='';

	$content='<script>
		jQuery(function() {
					jQuery("#universal_video_player_'.$row["id"].'").universal_video_player({
						skin:"'.$row["skin"].'",
						width:'.$row["width"].',
						height:'.$row["height"].',
						responsive:'.$row["responsive"].',
						responsiveRelativeToBrowser:'.$row["responsiveRelativeToBrowser"].',
						shuffle:'.$row["shuffle"].',
						firstVideo:'.$row["firstVideo"].',
						initialVolume:'.$row["initialVolume"].',
						loop:'.$row["loop"].',
						showCategs:'.$row["showCategs"].',
						showSearch:'.$row["showSearch"].',
						showTopTitle:'.$row["showTopTitle"].',
						showTimer:'.$row["showTimer"].',
						showRewindBut:'.$row["showRewindBut"].',
						showPlayBut:'.$row["showPlayBut"].',
						showVolumeBut:'.$row["showVolumeBut"].',
						showFacebookBut:'.$row["showFacebookBut"].',
						facebookAppID:"'.$row["facebookAppID"].'",
						facebookShareTitle:"'.$row["facebookShareTitle"].'",
						facebookShareDescription:"'.$row["facebookShareDescription"].'",
						showTwitterBut:'.$row["showTwitterBut"].',
						showInfoBut:'.$row["showInfoBut"].',
						showDownloadBut:'.$row["showDownloadBut"].',
						showPlaylistBut:'.$row["showPlaylistBut"].',
						showFullscreenBut:'.$row["showFullscreenBut"].',
						showShuffleBut:'.$row["showShuffleBut"].',
						showNextPrevBut:'.$row["showNextPrevBut"].',
						borderColor:"#'.$row["borderColor"].'",
						playlistWidth:'.$row["playlistWidth"].',
						pathToDownloadFile:"'.$pathToDownloadFile_aux.'",
						absUrl:"'.plugins_url("", __FILE__).'/universal_video_player/",
						suggestedQuality:"'.$row["suggestedQuality"].'",
						controlsBgFullScreenColor:"#'.$row["controlsBgFullScreenColor"].'",
						playlistScrollerBgColorOFF:"#'.$row["playlistScrollerBgColorOFF"].'",
						playlistScrollerBgColorON:"#'.$row["playlistScrollerBgColorON"].'",
						numberOfThumbsPerScreen:'.$row["numberOfThumbsPerScreen"].',
						logoImagePath:"'.$row["logoImagePath"].'",
						logoLink:"'.$row["logoLink"].'",
						logoTarget:"'.$row["logoTarget"].'",
						showLogo:'.$row["showLogo"].',
						autoPlayFirstVideo:'.$row["autoPlayFirstVideo"].',
						autoPlayOnMobile:'.$row["autoPlayOnMobile"].',
						playlistRecordShowImg:'.$row["playlistRecordShowImg"].',
						playlistRecordShowTitle:'.$row["playlistRecordShowTitle"].',
						playlistRecordShowDesc:'.$row["playlistRecordShowDesc"].',
						playlistRecordHeight:'.$row["playlistRecordHeight"].',
						playlistRecordPadding:'.$row["playlistRecordPadding"].',
						playlistTitleFontSize:'.$row["playlistTitleFontSize"].',
						playlistTitleLineHeight:'.$row["playlistTitleLineHeight"].',
						playlistDescFontSize:'.$row["playlistDescFontSize"].',
						playlistDescLineHeight:'.$row["playlistDescLineHeight"].',
						playlistRecordBgOffColor:"#'.$row["playlistRecordBgOffColor"].'",
						playlistRecordTitleOffColor:"#'.$row["playlistRecordTitleOffColor"].'",
						playlistRecordDescOffColor:"#'.$row["playlistRecordDescOffColor"].'",
						playlistRecordBgOffImgOpacity:'.$row["playlistRecordBgOffImgOpacity"].',
						playlistRecordBgOnColor:"#'.$row["playlistRecordBgOnColor"].'",
						playlistRecordTitleOnColor:"#'.$row["playlistRecordTitleOnColor"].'",
						playlistRecordDescOnColor:"#'.$row["playlistRecordDescOnColor"].'",
						playlistRecordBgOnImgOpacity:'.$row["playlistRecordBgOnImgOpacity"].',
						playlistBgColor:"#'.$row["playlistBgColor"].'",
						playlistRecordTitleLimit:'.$row["playlistRecordTitleLimit"].',
						playlistRecordDescLimit:'.$row["playlistRecordDescLimit"].',
						showPlaylistOnInit:'.$row["showPlaylistOnInit"].',
						categoryRecordBgOffColor:"#'.$row["categoryRecordBgOffColor"].'",
						categoryRecordBgOnColor:"#'.$row["categoryRecordBgOnColor"].'",
						categoryRecordBottomBorderOffColor:"#'.$row["categoryRecordBottomBorderOffColor"].'",
						categoryRecordBottomBorderOnColor:"#'.$row["categoryRecordBottomBorderOnColor"].'",
						categoryRecordTextOffColor:"#'.$row["categoryRecordTextOffColor"].'",
						categoryRecordTextOnColor:"#'.$row["categoryRecordTextOnColor"].'",
						firstCateg:"'.$first_categ.'",
						selectedCategBg:"'.(($row["selectedCategBg"]=="transparent")?'':'#').$row["selectedCategBg"].'",
						selectedCategOffColor:"#'.$row["selectedCategOffColor"].'",
						selectedCategOnColor:"#'.$row["selectedCategOnColor"].'",
						searchAreaBg:"'.(($row["searchAreaBg"]=="transparent")?'':'#').$row["searchAreaBg"].'",
						searchInputText:"'.$row["searchInputText"].'",
						searchInputBg:"#'.$row["searchInputBg"].'",
						searchInputBorderColor:"#'.$row["searchInputBorderColor"].'",
						searchInputTextColor:"#'.$row["searchInputTextColor"].'",
						topTitleColor:"#'.$row["topTitleColor"].'",
						timerColor:"#'.$row["timerColor"].'",
						bufferEmptyColor:"#'.$row["bufferEmptyColor"].'",
						bufferFullColor:"#'.$row["bufferFullColor"].'",
						seekbarColor:"#'.$row["seekbarColor"].'",
						volumeOffColor:"#'.$row["volumeOffColor"].'",
						volumeOnColor:"#'.$row["volumeOnColor"].'",
						playButColorOff:"#'.$row["playButColorOff"].'",
						playButColorOn:"#'.$row["playButColorOn"].'",
						googleTrakingOn:'.$row["googleTrakingOn"].',
						googleTrakingCode:"'.$row["googleTrakingCode"].'",
						getYouTubeData:'.$row["getYouTubeData"].',
						pathToAjaxFiles:"'.plugins_url("", __FILE__).'/universal_video_player/",
						origThumbImgW:'.$row["origThumbImgW"].',
						origThumbImgH:'.$row["origThumbImgH"].'

					});
		});
	</script>
    <div id="universal_video_player_'.$row["id"].'" style="display:none;">
            <ul class="universal_video_player_list">'.$firstRecord.$playlist_str.'</ul>
    </div><br style="clear:both;">';

	return str_replace("\r\n", '', $content);
}

function universal_video_player_shortcode($atts, $content=null) {
	global $wpdb;

	shortcode_atts( array('settings_id'=>'', 'videos_initial_ord'=>''), $atts);
	if ($atts['settings_id']=='')
		$atts['settings_id']=1;
	if ($atts['videos_initial_ord']=='')
		$atts['videos_initial_ord']=-1;


	return universal_video_player_generate_preview_code($atts['settings_id'],$atts['videos_initial_ord']);
}




register_activation_hook(__FILE__,"universal_video_player_activate"); //activate plugin and create the database
register_uninstall_hook(__FILE__, 'universal_video_player_uninstall'); // on unistall delete all databases
add_action('init', 'universal_video_player_init_sessions');	// initialize sessions
add_action('init', 'universal_video_player_load_styles');	// loads required styles
add_action('init', 'universal_video_player_load_scripts');			// loads required scripts
add_action('admin_menu', 'universal_video_player_plugin_menu'); // create menus
add_shortcode('universal_video_player', 'universal_video_player_shortcode');				// UNIVERSAL VIDEO PLAYER shortcode









/** OTHER FUNCTIONS **/

//stripslashes for an entire array
function universal_video_player_unstrip_array($array){
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

add_action('admin_head', 'universal_video_player_update_playlist_record_javascript');

function universal_video_player_update_playlist_record_javascript() {
	global $wpdb;
	//Set Your Nonce
	$universal_video_player_update_playlist_record_ajax_nonce = wp_create_nonce("universal_video_player_update_playlist_record-special-string");
	$universal_video_player_update_category_record_ajax_nonce = wp_create_nonce("universal_video_player_update_category_record-special-string");
	$universal_video_player_preview_record_ajax_nonce = wp_create_nonce("universal_video_player_preview_record-special-string");

	if(strpos($_SERVER['PHP_SELF'], 'wp-admin') !== false) {
			$page = (isset($_GET['page'])) ? $_GET['page'] : '';
			if(preg_match('/UNIVERSAL_VIDEO_PLAYER/i', $page)) {
?>



<script type="text/javascript" >
//delete the entire record
function universal_video_player_delete_entire_record (delete_id) {
	if (confirm('Are you sure?')) {
		jQuery("#universal_video_player_sortable").sortable('disable');
		jQuery("#"+delete_id).css("display","none");
		//jQuery("#universal_video_player_sortable").sortable('refresh');
		jQuery("#universal_video_player_updating_witness").css("display","block");
		var data = "action=universal_video_player_update_playlist_record&security=<?php echo $universal_video_player_update_playlist_record_ajax_nonce; ?>&updateType=universal_video_player_delete_entire_record&delete_id="+delete_id;
		// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		jQuery.post(ajaxurl, data, function(response) {
			jQuery("#universal_video_player_sortable").sortable('enable');
			jQuery("#universal_video_player_updating_witness").css("display","none");
			//alert('Got this from the server: ' + response);
		});
	}
}

function updateCategory(theCategoryID,theCategory) {
	var data ="action=universal_video_player_update_category_record&security=<?php echo $universal_video_player_update_category_record_ajax_nonce; ?>&theCategoryID="+theCategoryID+"&theCategory="+theCategory;

	// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
	jQuery.post(ajaxurl, data, function(response) {
		//alert('Got this from the server: ' + response);
	});
}


function showDialogPreview(theSliderID) {  //load content and open dialog
	var data ="action=universal_video_player_preview_record&security=<?php echo $universal_video_player_preview_record_ajax_nonce; ?>&theSliderID="+theSliderID;

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
	  title:"Plugin Preview",
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
	});	/*	*/

	if (jQuery('#universal_video_player_sortable').length) {
		jQuery( '#universal_video_player_sortable' ).sortable({
			placeholder: "ui-state-highlight",
			start: function(event, ui) {
	            ord_start = ui.item.prevAll().length + 1;
	        },
			update: function(event, ui) {
	        	jQuery("#universal_video_player_sortable").sortable('disable');
	        	jQuery("#universal_video_player_updating_witness").css("display","block");
				var ord_stop=ui.item.prevAll().length + 1;
				var elem_id=ui.item.attr("id");
				//alert (ui.item.attr("id"));
				//alert (ord_start+' --- '+ord_stop);
				var data = "action=universal_video_player_update_playlist_record&security=<?php echo $universal_video_player_update_playlist_record_ajax_nonce; ?>&updateType=change_ord&ord_start="+ord_start+"&ord_stop="+ord_stop+"&elem_id="+elem_id;
				// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
				jQuery.post(ajaxurl, data, function(response) {
					jQuery("#universal_video_player_sortable").sortable('enable');
					jQuery("#universal_video_player_updating_witness").css("display","none");
					//alert('Got this from the server: ' + response);
				});
			}
		});
	}


	<?php
		$rows_count = $wpdb->get_var("SELECT COUNT(*) FROM ". $wpdb->prefix . "universal_video_player_playlist;");
		for ($i=1;$i<=$rows_count;$i++) {
	?>


				jQuery('#upload_imgplaylist_button_universal_player_<?php echo $i?>').click(function(event) {
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
							document.forms["form-playlist-universal_video-"+<?php echo $i?>].imgplaylist.value=attachment.url;
							jQuery('#imgplaylist_'+<?php echo $i?>).attr('src',attachment.url);
						});
						// Finally, open the modal
						file_frame.open();
				});



            	jQuery('#upload_mp4_button_universal_player_<?php echo $i?>').click(function(event) {
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
							document.forms["form-playlist-universal_video-"+<?php echo $i?>]['mp4'].value=attachment.url;
							//jQuery('#mp4_'+<?php echo $i?>).attr('src',attachment.url);
						});
						// Finally, open the modal
						file_frame.open();
				});

				jQuery('#upload_webm_button_universal_player_<?php echo $i?>').click(function(event) {
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
							document.forms["form-playlist-universal_video-"+<?php echo $i?>]['webm'].value=attachment.url;
							//jQuery('#webm_'+<?php echo $i?>).attr('src',attachment.url);
						});
						// Finally, open the modal
						file_frame.open();
				});



/*		jQuery('#upload_imgplaylist_button_universal_player_<?php echo $i?>').click(function() {
		 formfield = 'imgplaylist';
		 the_i=<?php echo $i?>;
		 tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
		 return false;
		});

		jQuery('#upload_mp4_button_universal_player_<?php echo $i?>').click(function() {
		 formfield = 'mp4';
		 the_i=<?php echo $i?>;
		 tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
		 return false;
		});

		jQuery('#upload_webm_button_universal_player_<?php echo $i?>').click(function() {
		 formfield = 'webm';
		 the_i=<?php echo $i?>;
		 tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
		 return false;
		});	*/


	jQuery("#form-playlist-universal_video-<?php echo $i?>").submit(function(event) {

		/* stop form from submitting normally */
		event.preventDefault();

		//show loading image
		jQuery('#ajax-message-<?php echo $i?>').html('<img src="<?php echo plugins_url('universal_video_player/images/ajax-loader.gif', dirname(__FILE__))?>" />');


		//var data = {
			//action: 'universal_video_player_update_playlist_record',
			//security: '<?php echo $universal_video_player_update_playlist_record_ajax_nonce; ?>',
			//whatever: 1234
		//};
		var data ="action=universal_video_player_update_playlist_record&security=<?php echo $universal_video_player_update_playlist_record_ajax_nonce; ?>&"+jQuery("#form-playlist-universal_video-<?php echo $i?>").serialize();

		// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		jQuery.post(ajaxurl, data, function(response) {
			//alert('Got this from the server: ' + response);
			//alert(jQuery("#form-playlist-universal_video-<?php echo $i?>").serialize());
			var mov_title = '';
			if (document.forms["form-playlist-universal_video-<?php echo $i?>"].title.value!='')
				mov_title=document.forms["form-playlist-universal_video-<?php echo $i?>"].title.value;

			var element_to_show = mov_title;
			if (document.forms["form-playlist-universal_video-<?php echo $i?>"]['youtube'].value) {
				element_to_show+=' - YouTube ID: '+document.forms["form-playlist-universal_video-<?php echo $i?>"]['youtube'].value;
			}
			if (document.forms["form-playlist-universal_video-<?php echo $i?>"]['vimeo'].value) {
				element_to_show+=' - Vimeo ID: '+document.forms["form-playlist-universal_video-<?php echo $i?>"]['vimeo'].value;
			}


			jQuery('#mov_title_'+document.forms["form-playlist-universal_video-<?php echo $i?>"].id.value).html(element_to_show);
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

//universal_video_player_update_playlist_record is the action=universal_video_player_update_playlist_record

add_action('wp_ajax_universal_video_player_update_playlist_record', 'universal_video_player_update_playlist_record_callback');

function universal_video_player_update_playlist_record_callback() {

	check_ajax_referer( 'universal_video_player_update_playlist_record-special-string', 'security' ); //security=<?php echo $universal_video_player_update_playlist_record_ajax_nonce;
	global $wpdb;
	global $universal_video_player_messages;
	$errors_arr=array();
	//$wpdb->show_errors();

	//delete entire record
	if ($_POST['updateType']=='universal_video_player_delete_entire_record') {
		$delete_id=$_POST['delete_id'];
		$safe_sql=$wpdb->prepare("SELECT * FROM ".$wpdb->prefix."universal_video_player_playlist WHERE id = %d",$delete_id);
		$row = $wpdb->get_row($safe_sql, ARRAY_A);
		$row=universal_video_player_unstrip_array($row);


		//delete the entire record
		$wpdb->query($wpdb->prepare("DELETE FROM ".$wpdb->prefix."universal_video_player_playlist WHERE id = %d",$delete_id));
		//update the oreder for the rest ord=ord-1 for > ord
		$wpdb->query($wpdb->prepare("UPDATE ".$wpdb->prefix."universal_video_player_playlist SET ord=ord-1 WHERE playerid = %d and  ord>".$row['ord'],$_SESSION['xid']));
	}

	//update elements order
	if ($_POST['updateType']=='change_ord') {
		$sql_arr=array();
		$ord_start=$_POST['ord_start'];
		$ord_stop=$_POST['ord_stop'];
		$elem_id=(int)$_POST['elem_id'];
		$ord_direction='+1';
		if ($ord_start<$ord_stop)
			$sql_arr[]="UPDATE ".$wpdb->prefix."universal_video_player_playlist SET ord=ord-1  WHERE playerid = ".$_SESSION['xid']." and ord>".$ord_start." and ord<=".$ord_stop;
		else
			$sql_arr[]="UPDATE ".$wpdb->prefix."universal_video_player_playlist SET ord=ord+1  WHERE playerid = ".$_SESSION['xid']." and ord>=".$ord_stop." and ord<".$ord_start;
		$sql_arr[]="UPDATE ".$wpdb->prefix."universal_video_player_playlist SET ord=".$ord_stop." WHERE id=".$elem_id;

		//echo "elem_id: ".$elem_id."----ord_start: ".$ord_start."----ord_stop: ".$ord_stop;
		foreach ($sql_arr as $sql)
			$wpdb->query($sql);
	}



	//submit update
	if (!isset($_POST['updateType'])) {
		/*if (empty($_POST['mp4']))
			 $errors_arr[]=$universal_video_player_messages['empty_mp4'];
		if (empty($_POST['webm']))
			 $errors_arr[]=$universal_video_player_messages['empty_webm'];*/
		if (empty($_POST['category']))
			 $errors_arr[]=$universal_video_player_messages['empty_categ'];

	}

	$theid=isset($_POST['id'])?$_POST['id']:0;
	if($theid>0 && !count($errors_arr)) {
		$except_arr=array('Submit'.$theid,'id','ord','action','security','updateType','pll_ajax_backend','page_scroll_to_id_instances');
		$_POST['category']=implode(";", $_POST['category']);
		foreach ($_POST as $key=>$val){
			if (in_array($key,$except_arr)) {
				unset($_POST[$key]);
			}
		}

		$wpdb->update(
			$wpdb->prefix .'universal_video_player_playlist',
			$_POST,
			array( 'id' => $theid )
		);
		?>
			<div id="message" class="updated"><p><?php echo $universal_video_player_messages['data_saved'];?></p></div>
	<?php
	} else if (!isset($_POST['updateType'])) {
		$errors_arr[]=$universal_video_player_messages['invalid_request'];
	}
    //echo $theid;

	if (count($errors_arr)) { ?>
		<div id="error" class="error"><p><?php echo implode("<br>", $errors_arr);?></p></div>
	<?php }

	die(); // this is required to return a proper result
}


add_action('wp_ajax_universal_video_player_update_category_record', 'universal_video_player_update_category_record_callback');

function universal_video_player_update_category_record_callback() {
	check_ajax_referer( 'universal_video_player_update_category_record-special-string', 'security' );
	global $wpdb;
	//$wpdb->show_errors();


	if ($_POST['theCategory']!='') {
			$wpdb->update(
				$wpdb->prefix .'universal_video_player_categories',
				array(
				'categ' => strip_tags($_POST['theCategory'])
				),
				array( 'id' => $_POST['theCategoryID'] )
			);
	}

	die(); // this is required to return a proper result
}


add_action('wp_ajax_universal_video_player_preview_record', 'universal_video_player_preview_record_callback');

function universal_video_player_preview_record_callback() {
	check_ajax_referer( 'universal_video_player_preview_record-special-string', 'security' );

	//echo universal_video_player_generate_preview_code($_POST['theSliderID']);
	$aux_val='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html>
					<head>
						<link href="'.plugins_url('universal_video_player/universal_video_player.css', __FILE__).'" rel="stylesheet" type="text/css">
						<link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet" type="text/css">

						<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" type="text/javascript"></script>
						<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
						<script src="'.plugins_url('universal_video_player/js/jquery.mousewheel.min.js', __FILE__).'" type="text/javascript"></script>
						<script src="'.plugins_url('universal_video_player/js/jquery.touchSwipe.min.js', __FILE__).'" type="text/javascript"></script>
						<script src="https://player.vimeo.com/api/player.js" type="text/javascript"></script>
						<script src="'.plugins_url('universal_video_player/js/screenfull.min.js', __FILE__).'" type="text/javascript"></script>
						<script src="'.plugins_url('universal_video_player/js/universal_video_player.js', __FILE__).'" type="text/javascript"></script>

						<script src="'.plugins_url('universal_video_player/js/google_a.js', __FILE__).'" type="text/javascript"></script>

					</head>
					<body style="padding:0px;margin:0px;">';

	$aux_val.=universal_video_player_generate_preview_code($_POST['theSliderID'],-1);
	$aux_val.="</body>
				</html>";
	$filename=plugin_dir_path(__FILE__) . 'tpl/preview.html';
	$fp = fopen($filename, 'w+');
	$fwrite = fwrite($fp, $aux_val);

	echo $fwrite;

	die(); // this is required to return a proper result
}



?>
