<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'blossom' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'rZ0z+s&~]&wtW%;.Zrm1jn<[<I$I60|M=$X:Z5#.fzi6`KsW-Hy?wOYiDsL6+KO(' );
define( 'SECURE_AUTH_KEY',  '`,rU^PIvlE&SfoOghb.)FpUFi1B5H!gkN923~RsU/;%c~$$B[12N~} @x!#<(OKB' );
define( 'LOGGED_IN_KEY',    '$CfFIUwoRM^%c<Lkcv@7[6dxqWV_FL0K 06!S,a!4f~$7CmnhX;7+UY`c2h}:!2h' );
define( 'NONCE_KEY',        'wSX%,gnabrh/]mG]w8d8H+]b3&?ewalsT`|MV-YnH/_EbIh|S+H)u61IiW>oLeJ`' );
define( 'AUTH_SALT',        'cMxVj,!(*W?YF6<7iVH#I_.6<y6%no4>:M8?P0N?lRbST _<y ty/cU@8(1^}zC8' );
define( 'SECURE_AUTH_SALT', '0Ub]d&6[O%b}ufMl{w+5H=L,}%e=fPg?Qm/&jo]to~,Ls ZeG(cespe1UA-0kU~m' );
define( 'LOGGED_IN_SALT',   'W95B~m&!UJ~p10JXRzF0~JJD}:fo/t$rm_(%#d@bUN%M Z$e:Hc+lT!T[+J*/EK[' );
define( 'NONCE_SALT',       'X*{iw)O&%Hr~DlsEA)]4-xXvLcu+kN0&x.-j(T[rNVNrU:v*sg7D+VzPXw]Q@`3<' );

	@ini_set( 'upload_max_filesize' , '12800M' );
	@ini_set( 'post_max_size', '12800M');
	@ini_set( 'memory_limit', '25600M' );
	@ini_set( 'max_execution_time', '12000' );
	@ini_set( 'max_input_time', '12000' );


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define( 'FS_METHOD', 'direct');

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
