<?php
/**
 * Your Inspiration Themes
 *
 * @package WordPress
 * @subpackage Your Inspiration Themes
 * @author Your Inspiration Themes Team <info@yithemes.com>
 *
 * This source file is subject to the GNU GENERAL PUBLIC LICENSE (GPL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 */


/**
 * Set up all theme data.
 *
 * @return void
 * @since 1.0.0
 */
function yit_setup_theme() {

    /**
     * Set up the content width value based on the theme's design.
     *
     * @see yit_content_width()
     *
     * @since Twenty Fourteen 1.0
     */
    if ( ! isset( $GLOBALS['content_width'] ) ) {
        $GLOBALS['content_width'] = apply_filters( 'yit-container-width-std', 1170 );
    }

    //This theme have a CSS file for the editor TinyMCE
    add_editor_style( 'css/editor-style.css' );

    //This theme support post thumbnails
    add_theme_support( 'post-thumbnails' );

    //This theme uses the menus
    add_theme_support( 'menus' );

    //Add default posts and comments RSS feed links to head
    add_theme_support( 'automatic-feed-links' );

    //This theme support post formats
    add_theme_support( 'post-formats', apply_filters( 'yit_post_formats_support', array( 'gallery', 'audio', 'video', 'quote' ) ) );

    // Title tag
    add_theme_support( "title-tag" );

    // Custom logo

    add_theme_support( 'custom-logo', array(
        'height'      => 52,
        'width'       => 198,
        'flex-height' => true,
    ) );

    if ( ! defined( 'HEADER_TEXTCOLOR' ) )
        define( 'HEADER_TEXTCOLOR', '' );

    // The height and width of your custom header. You can hook into the theme's own filters to change these values.
    // Add a filter to twentyten_header_image_width and twentyten_header_image_height to change these values.
    define( 'HEADER_IMAGE_WIDTH', apply_filters( 'yiw_header_image_width', 1170 ) );
    define( 'HEADER_IMAGE_HEIGHT', apply_filters( 'yiw_header_image_height', 410 ) );

    // Don't support text inside the header image.
    if ( ! defined( 'NO_HEADER_TEXT' ) )
        define( 'NO_HEADER_TEXT', true );

    //This theme support custom header
    add_theme_support( 'custom-header' );

    //This theme support custom backgrounds
    add_theme_support( 'custom-backgrounds' );

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list',
    ) );

    // We'll be using post thumbnails for custom header images on posts and pages.
    // We want them to be 940 pixels wide by 198 pixels tall.
    // Larger images will be auto-cropped to fit, smaller ones will be ignored. See header.php.
    // set_post_thumbnail_size( HEADER_IMAGE_WIDTH, HEADER_IMAGE_HEIGHT, true );
    $image_sizes = array(
        'blog_small'                         => array( 283, 170, true ),
        'blog_small_xl'                      => array( 406, 175, true ),
        'blog_masonry'                       => array( 283, 0 ),
        'blog_masonry_xl'                    => array( 420, 0 ),
        'blog_big'                           => array( 1138, 547, true ),
        'blog_big_xl'                        => array( 1776, 794, true ),
        'blog_single_big'                    => array( 1138, 547, true ),
        'blog_single_big_xl'                 => array( 1776, 794, true ),
        'blog_section'                       => array( 116, 84, true ),
        'blog_widget_compact'                => array( 84, 84, true ),
        'portfolio_small'                    => array( 263, 325, true ),
        'portfolio_small_xl'                 => array( 504, 623, true ),
        'portfolio_thumb'                    => array( 65, 65, true ),
        'portfolio_single_big_featured'      => array( 763, 532, true ),
        'portfolio_single_big_featured_xl'   => array( 1175, 819, true ),
        'portfolio_single_big_lookbook'      => array( 763, 0, false ),
        'portfolio_single_big_lookbook_xl'   => array( 1175, 0, false ),
        'testimonial_thumb'                  => array( 58, 58, true ),
        'thumb_team_big'                     => array( 261, 262, true ),
        'thumb_team_big_xl'                  => array( 420, 423, true ),
        'featured_product_widget'            => array( 261, 324, true ),
        'featured_product_widget_xl'         => array( 420, 521, true ),
    );


    $image_sizes = apply_filters( 'yit_add_image_size', $image_sizes );

    foreach ( $image_sizes as $id_size => $size ) {
        add_image_size( $id_size, apply_filters( 'yit_' . $id_size . '_width', $size[0] ), apply_filters( 'yit_' . $id_size . '_height', $size[1] ), isset( $size[2] ) ? $size[2] : false );
    }

    //Set localization and load language file
    $locale = get_locale();
    $locale_file = YIT_THEME_PATH . "/languages/$locale.php";
    if ( is_readable( $locale_file ) ){
        require_once( $locale_file );
    }

    //remove wpml stylesheet
    define('ICL_DONT_LOAD_LANGUAGE_SELECTOR_CSS', true);

    if( !defined( 'WPLANG' ) ) define( 'WPLANG', '' );

    if( WPLANG != '' ) {
        load_theme_textdomain( 'yit', dirname( locate_template( '/languages/' . WPLANG . '.mo' ) ) );
    } else {
        load_theme_textdomain( 'yit', get_template_directory() . '/languages' );
    }


    // Add support to woocommerce
    if ( defined('YIT_IS_SHOP') && YIT_IS_SHOP ) {
        add_theme_support( 'woocommerce' );
    }



    //Register menus
    register_nav_menus(
        array(
            'nav'                => __( 'Main Navigation', 'yit' ),
            'mobile-nav'         => __( 'Mobile Navigation', 'yit' ),
            'welcome-menu'       => __( 'Welcome Menu', 'yit' ),
            'copyright_right'    => __( 'Copyright Right', 'yit' ),
            'copyright_left'     => __( 'Copyright Left', 'yit' ),
            'copyright_centered' => __( 'Copyright Centered', 'yit' )
        )
    );

    //create the menu items if they don't exist
    $menuname = 'Welcome Menu';
    if( !wp_get_nav_menu_object( $menuname ) ) {
        if( is_shop_installed() ) {
            $my_account_id = get_option('woocommerce_myaccount_page_id');
            if( $my_account_id ) {
                /* Assing my-account.php template to my-account page */
                update_post_meta( $my_account_id, '_wp_page_template', 'my-account.php' );

                $menu_id = wp_create_nav_menu($menuname);
                $my_account_url = get_permalink( wc_get_page_id( 'myaccount' ) );
                wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title' => __('My Account', 'yit'),
                    'menu-item-object' => 'page',
                    'menu-item-object-id' => get_option('woocommerce_myaccount_page_id'),
                    'menu-item-type' => 'post_type',
                    'menu-item-status' => 'publish'));

                wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title' =>  __('My Orders', 'yit'),
                    'menu-item-classes' => 'view-order',
                    'menu-item-url' => wc_get_endpoint_url('view-order', '',  $my_account_url ),
                    'menu-item-status' => 'publish'));

                if ( defined( 'YITH_WCWL' ) ){
                    wp_update_nav_menu_item($menu_id, 0, array(
                        'menu-item-title' =>  __('My Wishlist', 'yit'),
                        'menu-item-classes' => 'wishlist',
                        'menu-item-url' => wc_get_endpoint_url('wishlist', '',  $my_account_url ),
                        'menu-item-status' => 'publish'));
                }

                wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title' =>  __('Edit Address', 'yit'),
                    'menu-item-classes' => 'edit-address',
                    'menu-item-url' => wc_get_endpoint_url('edit-address', '',  $my_account_url ),
                    'menu-item-status' => 'publish'));

                wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title' =>  __('Edit Account', 'yit'),
                    'menu-item-classes' => 'edit-account',
                    'menu-item-url' => wc_get_endpoint_url('edit-account', '',  $my_account_url ),
                    'menu-item-status' => 'publish'));


                wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title' =>  __('Logout', 'yit'),
                    'menu-item-classes' => 'customer-logout',
                    'menu-item-url' => wc_get_endpoint_url('customer-logout', '',  $my_account_url ),
                    'menu-item-status' => 'publish'));

                if( !has_nav_menu( 'welcome-menu' ) ){
                    $locations = get_theme_mod('nav_menu_locations');
                    $locations['welcome-menu'] = $menu_id;
                    set_theme_mod( 'nav_menu_locations', $locations );
                }
            }

        }

    }

    // Default Sidebar
    register_sidebar( yit_sidebar_args( "Default Sidebar", __( "The default widgets area ready to use.", 'yit' ), 'widget', 'h3' ) );

    //Register footer sidebar
    for( $i = 1; $i <= yit_get_option( 'footer-rows', 0 ); $i++ ) {
        register_sidebar( yit_sidebar_args( "Footer Row $i", sprintf(  __( "The widget area #%d used in Footer section", 'yit' ), $i ), 'widget col-sm-' . ( 12 / yit_get_option( 'footer-columns' ) ), apply_filters( 'yit_footer_sidebar_' . $i . '_wrap', 'h3' ) ) );
    }
}

/**
 * Remove the class no-js when javascript is activated
 *
 * We add the action at the start of head, to do this operation immediatly, without gap of all libraries loading
 */
function yit_detect_javascript() {
    ?>
    <script type="text/javascript">document.documentElement.className = document.documentElement.className.replace( 'no-js', '' ) + ' yes-js js_active js'</script>
<?php
}

/**
 * Adjust content_width value for image attachment template.
 *
 * @since Twenty Fourteen 1.0
 *
 * @return void
 */
function yit_content_width() {
    $full_width = $GLOBALS['content_width'];
    $sidebar_width = $full_width * ( 25 / 100 );   // 25% (col-3)
    $sidebar = yit_get_sidebars();

    if ( 'sidebar-double' == $sidebar['layout'] ) {
        $GLOBALS['content_width'] -= $sidebar_width * 2;
    } elseif ( 'sidebar-no' != $sidebar['layout'] ) {
        $GLOBALS['content_width'] -= $sidebar_width;
    }

    $GLOBALS['content_width'] -= 30;
}
add_action( 'template_redirect', 'yit_content_width' );


/**
 * Register the extra body classes to add in the pages
 *
 * @param array $classes
 *
 * @return array
 * @since 1.0.0
 */
function yit_add_body_class( $classes ) {
    $layout = yit_get_option('general-layout-type');
    $classes[] = $layout . '-layout';

    if ( $layout == 'fluid' ) {
        $classes[] = 'stretched-layout';
    }

    $classes = yit_detect_browser_body_class( $classes );

    if( is_singular( 'post' ) ){
        $blog_single_type = yit_get_option( 'blog-single-type' );
        $classes[] = empty( $blog_single_type ) ? 'blog-single' : 'blog-single blog-single-' . $blog_single_type;
    }

    if( yit_get_option( 'general-activate-responsive' ) == 'yes' ){
        $classes[] = 'responsive';
    }

    return $classes;
}

/**
 * Extend the default WordPress post classes.
 *
 * Adds a post class to denote:
 * Non-password protected page with a post thumbnail.
 *
 * @since Twenty Fourteen 1.0
 *
 * @param array $classes A list of existing post class values.
 * @return array The filtered post class list.
 */
function yit_post_classes( $classes ) {
    if ( ! post_password_required() && has_post_thumbnail() ) {
        $classes[] = 'has-post-thumbnail';
    }

    return $classes;
}
add_filter( 'post_class', 'yit_post_classes' );

/**
 * Create a nicely formatted and more specific title element text for output
 * in head of document, based on current view.
 *
 * @param string $title Default title text for current view.
 * @param string $sep Optional separator.
 * @return string The filtered title.
 */
if ( ! function_exists( 'yit_wp_title' ) ) {
    function yit_wp_title( $title = '', $sep = '' ) {
        global $paged, $page;

        if ( is_feed() ) {
            return $title;
        }

        // Add the site name.
        $title .= get_bloginfo( 'name' );

        // Add the site description for the home/front page.
        $site_description = get_bloginfo( 'description', 'display' );
        if ( $site_description && ( is_home() || is_front_page() ) ) {
            $title = "$title $sep $site_description";
        }

        // Add a page number if necessary.
        if ( $paged >= 2 || $page >= 2 ) {
            $title = "$title $sep " . sprintf( __( 'Page %s', 'yit' ), max( $paged, $page ) );
        }

        return $title;
    }
}

if( ! function_exists( 'remove_equals_from_special_chars' ) ){
    function remove_equals_from_special_chars( $chars ){

        unset( $chars['/[=\[](.*?)[=\]]/'] );
        $chars[ '/[\[](.*?)[\]]/' ] = '<span class="title-highlight">$1</span>';

        return $chars;
    }
}

// Remove Open Sans that WP adds from frontend

if ( ! function_exists( 'remove_wp_open_sans' ) ) :
    function remove_wp_open_sans() {
        wp_deregister_style( 'open-sans' );
        wp_register_style( 'open-sans', false );
    }

    add_action( 'wp_enqueue_scripts', 'remove_wp_open_sans' );
    // Uncomment below to remove from admin
    // add_action('admin_enqueue_scripts', 'remove_wp_open_sans');
endif;

/**
 * === Start Blog Functions ===
 */

if( ! function_exists( 'yit_add_blog_stylesheet' ) ) {

    /**
     * Register/Enqueue the blog stylesheet
     *
     * @return void
     * @since 2.0.0
     * @author Andrea Grillo    <andrea.grillo@yithems.com>
     */

    function yit_add_blog_stylesheet(){
        $blog = array(
            'src'           => YIT_THEME_ASSETS_URL . '/css/blog.css',
            'enqueue'       => true,
            'registered'    => false
        );

        $masterslider_style =  array(
            'src'           => YIT_THEME_ASSETS_URL . '/lib/masterslider/style/masterslider.css',
            'enqueue'       => true,
            'registered'    => false
        );

        $masterslider_script = array(
            'src'     => YIT_THEME_ASSETS_URL . '/lib/masterslider/masterslider.min.js',
            'enqueue' => true,
            'deps'    => array( 'jquery' )
        );

        if( is_page_template( 'blog.php' ) || is_search() || is_singular( 'post' ) || is_home()|| is_archive() || is_category() || is_tag() || yit_is_old_ie() ){
            YIT_Asset()->set( 'style', 'blog-stylesheet', $blog, 'before', 'comment-stylesheet' );

            /* === Add Master Slider Style and Script on Single Post with gallery post format === */
            if( ( is_singular( 'post' ) && get_post_format() == 'gallery' ) || yit_is_old_ie() ) {
                YIT_Asset()->set( 'style', 'masterslider-style', $masterslider_style, 'after', 'blog-stylesheet' );
                YIT_Asset()->set( 'script', 'masterslider-script', $masterslider_script );
            }

        }
    }
}

if( ! function_exists( 'yit_get_comments_template' ) ){
    /**
     * Get the comments template
     *
     * @return mixed
     * @since 2.0.0
     * @author Andrea Grillo <andrea.grillo@yithems.com>
     */

    function yit_get_comments_template(){
        return include( YIT_PATH . '/comments.php' );
    }
}

//Hide the footer
if( ! function_exists( 'yit_hide_footer' ) ) {

    /**
     * Change the footer type options to hide the footer
     *
     * @return void
     * @since 2.0.0
     * @author Andrea Grillo    <andrea.grillo@yithems.com>
     */
    function yit_hide_footer() {
        return 'none';
    }
}


if( !function_exists('yit_curPageURL') ) {
    /**
     * Retrieve the current complete url
     *
     * @since 1.0
     */
    function yit_curPageURL() {
        $pageURL = 'http';
        if ( isset( $_SERVER["HTTPS"] ) AND $_SERVER["HTTPS"] == "on" )
            $pageURL .= "s";

        $pageURL .= "://";

        if ( isset( $_SERVER["SERVER_PORT"] ) AND $_SERVER["SERVER_PORT"] != "80" )
            $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
        else
            $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];

        return $pageURL;
    }
}
/**
 * === END Blog Functions ===
 */


if( !function_exists( 'yit_excerpt_text' ) ) {
    /**
     * Cut the text
     *
     * @author Andrea Grillo  <andrea.grillo@yithemes.com>
     *
     * @param string $text
     * @param int $excerpt_length
     * @param string $excerpt_more
     * @return string
     * @since 1.0.0
     */
    function yit_excerpt_text( $text, $excerpt_length = 50, $excerpt_more = '' ) {
        $words = preg_split("/[\n\r\t ]+/", $text, $excerpt_length + 1, PREG_SPLIT_NO_EMPTY);
        if ( count($words) > $excerpt_length ) {
            array_pop($words);
            $text = implode(' ', $words);
            $text = $text . $excerpt_more;
        } else {
            $text = implode(' ', $words);
        }

        echo $text;
    }
}

if( !function_exists( 'yit_get_registered_nav_menus' ) ) {
    /**
     * Retireve all registered menus
     *
     * @return array
     * @since 1.0.0
     */
    function yit_get_registered_nav_menus() {
        $menus = get_terms( 'nav_menu' );
        $return = array();

        foreach( $menus as $menu ) {
            array_push( $return, $menu->name );
        }

        return $return;
    }
}
if( !function_exists( 'yit_og' ) ) {
    function yit_og(){

        if( !function_exists('is_plugin_active') ) {
            require_once ABSPATH . "/wp-admin/includes/plugin.php";
        }

        if( yit_get_option('general-enable-open-graph') == 'no' || is_plugin_active( 'wordpress-seo/wp-seo.php' ) ) return;

        /**
         * Create the og tag description with properly content, based on the current queried object.
         */
        $queried_object = get_queried_object();

        $ogcontent  = array();
        $ogcontent['site_name'] = get_bloginfo( 'name' );
        $ogcontent['title'] = function_exists( 'wp_get_document_title' ) ? wp_get_document_title() : wp_title( '-', false, 'right' );

        // For posts, pages and products
        if( isset( $queried_object->post_type ) ) {
            $post    = get_post( $queried_object->ID );
            $ogcontent['url'] = get_permalink( $post );
            $ogcontent['description'] = $post->post_excerpt ? $post->post_excerpt : wp_trim_words( $post->post_content );


            if( has_post_thumbnail( $post->ID ) ) {
                $image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ) , 'medium');
                $ogcontent['image'] = $image_url[0];
            }

        } else if( isset( $queried_object->taxonomy ) && $queried_object->taxonomy ) {

            $ogcontent['description'] = $queried_object->description;

            if(  function_exists( 'WC' ) ){
                $term_thumbnail = get_woocommerce_term_meta( $queried_object->term_id, 'thumbnail_id', true );
                $imgs = wp_get_attachment_image_src( $term_thumbnail, 'medium' );
                if( $imgs[0] ){
                    $ogcontent['image'] = $imgs[0];
                }
            }
        }

        // If the taxonomy or post don't have content, use the site description
        if( (is_home() || is_front_page())  && empty( $ogcontent['description'] ) ) {
            $ogcontent['description'] = get_bloginfo( 'description' );
        }

        if( empty( $ogcontent['image'] ) && yit_get_option( 'header-custom-logo' ) == 'yes' && yit_get_option( 'header-custom-logo-image' ) != '' ) {
            $ogcontent['image'] = yit_get_option( 'header-custom-logo-image' );
        }

        $ogcontent['description'] = isset( $ogcontent['description'] ) ? apply_filters( 'yit_og_description', strip_tags(strip_shortcodes(preg_replace("~(?:\[/?)[^/\]]+/?\]~s", '', $ogcontent['description'])))) : '';

        foreach( $ogcontent as $property => $content ){
            echo '<meta property="og:'. $property.'" content="' . esc_attr($content) . '"/>'."\n";
        }

    }

}

if( ! function_exists( 'yit_fix_bp_comments_list' ) ){
    function yit_fix_bp_comments_list( $comments, $post_id ) {
        global $wp_query;

        $post = $wp_query->get_queried_object();

        if ( in_array( $post->ID, bp_core_get_directory_page_ids() ) ) {
            return array();
        }

        return $comments;
    }
}

if( function_exists( 'buddypress' ) ){
    add_filter( 'comments_array', 'yit_fix_bp_comments_list', 10, 2 );
}

if ( class_exists( 'BuddyPress' ) ) {
    /**
     * Check version of buddypress and load js
     *
     *
     * @since  2.0.0
     * @return void
     * @author Francesco Licandro <francesco.licandro@yithemes.com>
     */

    function yit_buddypress_scripts() {

        if ( version_compare( preg_replace( '/-beta-([0-9]+)/', '', bp_get_version() ), '2.1', '<' ) ) {
            wp_dequeue_script( 'bp-parent-js' );
            wp_enqueue_script( 'yit-bp-js', YIT_URL . '/buddypress/js/buddypress-2.0.x/buddypress.js', bp_core_get_js_dependencies() );
        }
    }

    add_action( 'wp_enqueue_scripts', 'yit_buddypress_scripts', 20 );

}

/**
 * SoundCloud functions
 */
if( ! function_exists( 'soundcloud_oembed_params' ) ){
    function soundcloud_oembed_params( $embed, $params ) {
        global $soundcloud_oembed_params;
        $soundcloud_oembed_params = $params;
        return preg_replace_callback( '/src="(https?:\/\/(?:w|wt)\.soundcloud\.(?:com|dev)\/[^"]*)/i', 'soundcloud_oembed_params_callback', $embed );
    }
}

if( ! function_exists( 'soundcloud_oembed_params_callback' ) ){
    function soundcloud_oembed_params_callback( $match ) {
        global $soundcloud_oembed_params;

        // Convert URL to array
        $url = parse_url( urldecode( $match[1] ) );
        // Convert URL query to array
        parse_str( $url['query'], $query_array );
        // Build new query string
        $query = http_build_query( array_merge( $query_array, $soundcloud_oembed_params ) );

        $search  = array( 'show_artwork=0', 'show_artwork=1', 'auto_play=0', 'auto_play=1', 'show_comments=0', 'show_comments=1' );
        $replace = array( 'show_artwork=false', 'show_artwork=true', 'auto_play=false', 'auto_play=true', 'show_comments=false', 'show_comments=true' );

        $query = str_replace( $search, $replace, $query );

        return 'src="' . $url['scheme'] . '://' . $url['host'] . $url['path'] . '?' . $query;
    }
}

if( ! function_exists( 'yit_string_is_serialized' ) ) {
    /**
     * Check if a string is serialized
     *
     * @author   Andrea Grillo  <andrea.grillo@yithemes.com>
     *
     * @param $string
     *
     * @internal param string $src
     * @return bool | true if string is serialized, false otherwise
     * @since    2.0.0
     */
    function yit_string_is_serialized( $string ) {
        $data = @unserialize( $string );
        return ! $data ? $data : true;
    }
}

if( ! function_exists( 'yit_string_is_json' ) ){
    /**
     * Check if a string is json
     *
     * @author   Andrea Grillo  <andrea.grillo@yithemes.com>
     *
     * @param $string
     *
     * @internal param string $src
     * @return bool | true if string is json, false otherwise
     * @since    2.0.0
     */
    function yit_string_is_json( $string ) {
        $data = @json_decode( $string );
        return $data == NULL ? false : true;
    }
}

if( ! function_exists( 'yit_remove_script_version' ) ) {
    /**
     * Remove the script version from the script and styles
     *
     * @author Andrea Grillo  <andrea.grillo@yithemes.com>
     *
     * @param string $src
     * @return string
     * @since 1.0.0
     */
    function yit_remove_script_version( $src ) {
        if( yit_get_option( 'general-remove-scripts-version' ) == 'yes' ) {
            $parts = explode( '?v', $src );
            return $parts[0];
        } else {
            return $src;
        }
    }

}

if ( ! function_exists( 'yit_exclude_categories_list_widget' ) ) {
    /*
     * exclude categories(selected in the theme options) from wordpress widget categories
     *
     * @return void
     * @since 2.0
     * @author Andrea Frascaspata <andrea.frascaspata@yithemes.com>
     */
    function yit_exclude_categories_list_widget($args){
        $cat_args = array('exclude' =>str_replace("-","",yit_get_excluded_categories(2)));
        return array_merge($args,$cat_args);
    }
}

if( ! function_exists( 'yit_portfolio_layout_values' ) ){
    /**
     * Unset unused portfolio layout
     *
     * @param $layouts
     *
     * @return string[]
     * @since  2.0.0
     * @author Antonio La Rocca <antonio.larocca@yithems.com>     */
    function yit_portfolio_layout_values( $layouts ){
        unset( $layouts['default'] );
        unset( $layouts['columns'] );
        unset( $layouts['common'] );

        return $layouts;
    }
}

if( ! function_exists( 'yit_portfolio_single_layout_values' ) ){
    /**
     * Add portfolio single layout
     *
     * @param $layouts
     *
     * @return string[]
     * @since  2.0.0
     * @author Antonio La Rocca <antonio.larocca@yithems.com>
     */
    function yit_portfolio_single_layout_values( $layouts ){
        $layouts['big_image'] = __( 'Big Image', 'yit' );

        return $layouts;
    }
}

if( ! function_exists( 'init_portfolio_layouts' ) ){
    /**
     * Add portfolio single layout setup on after setup theme
     *
     * @since  2.0.0
     * @author Antonio La Rocca <antonio.larocca@yithems.com>
     */
    function init_portfolio_layouts(){
        if ( function_exists( 'YIT_Portfolio' ) ) {
            add_filter( 'yit_cptu_' . YIT_Portfolio()->portfolios_post_type . '_layout_values', 'yit_portfolio_layout_values' );
            add_filter( 'yit_cptu_' . YIT_Portfolio()->portfolios_post_type . '_single_layout_values', 'yit_portfolio_single_layout_values' );
        }
    }
}

/**
 * WORDPRESS SOCIAL PLUGIN SUPPORT
 */
global $WORDPRESS_SOCIAL_LOGIN_VERSION;
if ( isset( $WORDPRESS_SOCIAL_LOGIN_VERSION ) ) {

    if ( version_compare( preg_replace( '/-beta-([0-9]+)/', '', $WORDPRESS_SOCIAL_LOGIN_VERSION ), '2.2', '<=' ) ) {
        add_action( 'woocommerce_login_form_end', 'wsl_render_login_form_login_form' );
        add_filter( 'wsl_alter_hook_provider_icon_markup', 'wsl_alter_hook_provider_icon_markup' );
    }
    else {
        add_action( 'woocommerce_login_form_end', 'wsl_render_login_form_login' );
        add_filter( 'wsl_render_login_form_alter_provider_icon_markup', 'wsl_alter_hook_provider_icon_markup' );
    }

    function wsl_alter_hook_provider_icon_markup( $provider_id ) {
        global $WORDPRESS_SOCIAL_LOGIN_PROVIDERS_CONFIG;

        if ( in_array( $provider_id, array( 'Amazon', 'Blogger', 'Disqus', 'LiveJournal', 'Mail.ru', 'Odnoklassniki', 'PayPal', 'Skyrock.com', 'StackExchange', 'Twitch.tv', 'VKontakte' ) ) ) {
            return $provider_id;
        }

        foreach ( $WORDPRESS_SOCIAL_LOGIN_PROVIDERS_CONFIG as $the ) {
            if ( $the['provider_id'] == $provider_id ) {
                $item = $the;
                break;
            }
        }

        if ( ! isset( $item ) ) {
            return $provider_id;
        }

        $authenticate_base_url = site_url( 'wp-login.php', 'login_post' ) . ( strpos( site_url( 'wp-login.php', 'login_post' ), '?' ) ? '&' : '?' ) . "action=wordpress_social_authenticate&";

        // overwrite endpoint_url if need'd
        if( get_option( 'wsl_settings_hide_wp_login' ) == 1 ){
            $authenticate_base_url = WORDPRESS_SOCIAL_LOGIN_PLUGIN_URL . "/services/authenticate.php?";
        }

        $provider_id     = @ $item["provider_id"];
        $provider_name   = @ $item["provider_name"];

        $current_page_url = 'http';
        if (isset($_SERVER["HTTPS"]) && ($_SERVER["HTTPS"] == "on")) {
            $current_page_url .= "s";
        }
        $current_page_url .= "://";
        if ($_SERVER["SERVER_PORT"] != "80") {
            $current_page_url .= $_SERVER["HTTP_HOST"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
        }
        else {
            $current_page_url .= $_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"];
        }

        $authenticate_url = $authenticate_base_url . "provider=" . $provider_id . "&redirect_to=" . urlencode( $current_page_url );

        $wsl_settings_use_popup = get_option( 'wsl_settings_use_popup' ) ;

        ob_start();

        $fix_icon_name = array(
            'live' => 'windows',
            'yahoo!' => 'yahoo',
            'google' => 'google-plus',
        );

        if( $wsl_settings_use_popup == 1 ){
            ?>
            <a rel="nofollow" href="javascript:void(0);" title="Connect with <?php echo $provider_name ?>" class="wsl_connect_with_provider link_socials" data-provider="<?php echo $provider_id ?>" data-normal="#dbdbdb" data-hover="#1f1f1f">
                <i class="fa fa-<?php echo str_replace( array_keys( $fix_icon_name ), array_values( $fix_icon_name ), strtolower( $provider_id ) ) ?>" style="color:#b1b1b1; font-size: 18px"></i>
            </a>
        <?php
        }
        elseif( $wsl_settings_use_popup == 2 ){
            ?>
            <a rel="nofollow" href="<?php echo esc_url( $authenticate_url ) ?>" title="Connect with <?php echo $provider_name ?>" class="wsl_connect_with_provider link_socials" data-normal="#dbdbdb" data-hover="#1f1f1f" >
                <i class="fa fa-<?php echo str_replace( array_keys( $fix_icon_name ), array_values( $fix_icon_name ), strtolower( $provider_id ) ) ?>" style="color:#b1b1b1; font-size: 18px"></i>
            </a>
        <?php
        }

        return ob_get_clean();

    }
    add_filter( 'wsl_alter_hook_provider_icon_markup', 'wsl_alter_hook_provider_icon_markup' );

    function yit_wsl_style() {

        ?>
        <style type="text/css">

            .wp-social-login-widget .wp-social-login-provider-list {
                padding-left: 0;
            }

            #wp-social-login-connect-options a.link_socials, .wp-social-login-provider-list a.link_socials{
                display: inline-block;
                width: 30px;
                height: 30px;
                line-height: 32px;
                text-align: center;
                border: 1px solid #dbdbdb;
            }

            #wp-social-login-connect-options a.link_socials:hover, #wp-social-login-connect-options a.link_socials:hover i, , .wp-social-login-provider-list a.link_socials:hover, .wp-social-login-provider-list a.link_socials:hover i {
                color: #000 !important;
                border-color: #1f1f1f;
            }
        </style>
    <?php
    }
    add_action( 'wp_head', 'yit_wsl_style' );
    add_action( 'login_head', 'yit_wsl_style' );

}
/**
 * END WORDPRESS SOCIAL PLUGIN SUPPORT
 */



function yit_newsletter_show_placeholder( $placeholder, $shortcode ){

    if( $shortcode == 'newsletter_form'){
        return true;
    }else{
        return $placeholder;
    }

}

if( ! function_exists( 'yit_get_testimonial_list_array' ) ){
    /**
     * Get the list of testimonials
     *
     * Retrieve an array of testimonials, if the plugin is active
     *
     * @param array
     * @since  2.0.0
     * @param array $default_value | an array with the default value
     * @return Array
     * @author Andrea Grillo <andrea.grillo@yithemes.com>
     */
    function yit_get_testimonial_list_array( $default_value = array() ){
        $testimonials_list = array();
        if( function_exists( 'YIT_Testimonial' ) ){
            $testimonials = new WP_Query(
                array(
                    'post_type' => YIT_Testimonial()->testimonial_post_type,
                    'posts_per_page' => -1
                )
            );
            if( ! empty( $testimonials ) ){

                if( ! empty( $default_value ) ){
                    $testimonials_list = $default_value;
                }

                foreach( $testimonials->posts as $testimonial ){
                    $testimonials_list[ $testimonial->ID ] = $testimonial->post_title;
                }
            }else{
                $testimonials_list = false;
            }
        }else {
            $testimonials_list = false;
        }

        return $testimonials_list;
    }
}

if( ! function_exists( 'yit_unregister_faq_widget' ) ){
    /**
     * Unregister Faq Filter Widget
     *
     *
     * @param array
     * @since  2.0.0
     * @return void
     * @author Andrea Grillo <andrea.grillo@yithemes.com>
     */
    function yit_unregister_faq_widget(){
        if( class_exists( 'YIT_Faq_Filters' ) ) {
            unregister_widget('YIT_Faq_Filters');
        }
    }
}
add_action( 'widgets_init', 'yit_unregister_faq_widget', 20 );

if( ! function_exists( 'yit_remove_default_shortcodes' ) ){
    /**
     * Remove Swiper Slider Shortcodes from shortcodes list
     *
     *
     * @param array
     * @since  2.0.0
     * @return void
     * @author Andrea Grillo <andrea.grillo@yithemes.com>
     */

    function yit_remove_default_shortcodes( $shortcodes_list ){

        unset(
        $shortcodes_list['swiper_products_slider'],
        $shortcodes_list['lastpost'],
        $shortcodes_list['banner'],
        $shortcodes_list['image_banner'],
        $shortcodes_list['review_slider']
        );

        return $shortcodes_list;
    }
}
add_filter( 'yit-shortcode-plugin-init', 'yit_remove_default_shortcodes' );

if( !function_exists( 'yit_remove_wp_admin_bar' ) ) {
    /**
     * Remove the wp admin bar in frontend if user is logged in
     *
     *
     * @return string  The html
     * @author Andrea Grillo <andrea.grillo@yithemes.com>
     * @since 2.0
     */
    function yit_remove_wp_admin_bar() {
        if ( yit_get_option( 'general-lock-down-admin' ) == 'yes' && ! current_user_can( 'administrator' ) ){
            add_filter( 'show_admin_bar', '__return_false' );
        }
    }
}

if( !function_exists( 'yit_theme_admin_enqueue' ) ) {
    /**
     * Add external css stylesheet in backend
     *
     *
     * @return void
     * @author Andrea Grillo <andrea.grillo@yithemes.com>
     * @since  2.0
     */
    function yit_theme_admin_enqueue(){
        wp_enqueue_style( 'yit-simple-line-icons', YIT_THEME_ASSETS_URL . '/fonts/Simple-Line-Icons-Webfont/simple-line-icons.css', false, '', 'all' );
    }
}

if( !function_exists( 'yit_size_xl' ) ) {
    /**
     * Set XL size if fluid layout
     *
     *
     * @return void
     * @author Antonino Scarfì <antonino.scarfi@yithemes.com>
     * @since  2.0
     */
    function yit_size_xl( $size ) {
        if ( yit_get_option('general-layout-type') == 'fluid' ) {
            $size .= '_xl';
        }

        return $size;
    }
}


if( ! function_exists('yit_get_simple_line_icons') ){

    /*
    * return a list of simple line icons
    *
    * @return void
    * @since 2.0
    * @author Emanuela Castorina <emanuela.castorina@yithemes.com>
    */

    function yit_get_simple_line_icons(){
        return array(
            'e000' => 'icon-user-female',
            'e002' => 'icon-user-follow',
            'e003' => 'icon-user-following',
            'e004' => 'icon-user-unfollow',
            'e006' => 'icon-trophy',
            'e010' => 'icon-screen-smartphone',
            'e011' => 'icon-screen-desktop',
            'e012' => 'icon-plane',
            'e013' => 'icon-notebook',
            'e014' => 'icon-moustache',
            'e015' => 'icon-mouse',
            'e016' => 'icon-magnet',
            'e020' => 'icon-energy',
            'e021' => 'icon-emoticon-smile',
            'e022' => 'icon-disc',
            'e023' => 'icon-cursor-move',
            'e024' => 'icon-crop',
            'e025' => 'icon-credit-card',
            'e026' => 'icon-chemistry',
            'e005' => 'icon-user',
            'e007' => 'icon-speedometer',
            'e008' => 'icon-social-youtube',
            'e009' => 'icon-social-twitter',
            'e00a' => 'icon-social-tumblr',
            'e00b' => 'icon-social-facebook',
            'e00c' => 'icon-social-dropbox',
            'e00d' => 'icon-social-dribbble',
            'e00e' => 'icon-shield',
            'e00f' => 'icon-screen-tablet',
            'e017' => 'icon-magic-wand',
            'e018' => 'icon-hourglass',
            'e019' => 'icon-graduation',
            'e01a' => 'icon-ghost',
            'e01b' => 'icon-game-controller',
            'e01c' => 'icon-fire',
            'e01d' => 'icon-eyeglasses',
            'e01e' => 'icon-envelope-open',
            'e01f' => 'icon-envelope-letter',
            'e027' => 'icon-bell',
            'e028' => 'icon-badge',
            'e029' => 'icon-anchor',
            'e02a' => 'icon-wallet',
            'e02b' => 'icon-vector',
            'e02c' => 'icon-speech',
            'e02d' => 'icon-puzzle',
            'e02e' => 'icon-printer',
            'e02f' => 'icon-present',
            'e030' => 'icon-playlist',
            'e031' => 'icon-pin',
            'e032' => 'icon-picture',
            'e033' => 'icon-map',
            'e034' => 'icon-layers',
            'e035' => 'icon-handbag',
            'e036' => 'icon-globe-alt',
            'e037' => 'icon-globe',
            'e038' => 'icon-frame',
            'e039' => 'icon-folder-alt',
            'e03a' => 'icon-film',
            'e03b' => 'icon-feed',
            'e03c' => 'icon-earphones-alt',
            'e03d' => 'icon-earphones',
            'e03e' => 'icon-drop',
            'e03f' => 'icon-drawer',
            'e040' => 'icon-docs',
            'e041' => 'icon-directions',
            'e042' => 'icon-direction',
            'e043' => 'icon-diamond',
            'e044' => 'icon-cup',
            'e045' => 'icon-compass',
            'e046' => 'icon-call-out',
            'e047' => 'icon-call-in',
            'e048' => 'icon-call-end',
            'e049' => 'icon-calculator',
            'e04a' => 'icon-bubbles',
            'e04b' => 'icon-briefcase',
            'e04c' => 'icon-book-open',
            'e04d' => 'icon-basket-loaded',
            'e04e' => 'icon-basket',
            'e04f' => 'icon-bag',
            'e050' => 'icon-action-undo',
            'e051' => 'icon-action-redo',
            'e052' => 'icon-wrench',
            'e053' => 'icon-umbrella',
            'e054' => 'icon-trash',
            'e055' => 'icon-tag',
            'e056' => 'icon-support',
            'e057' => 'icon-size-fullscreen',
            'e058' => 'icon-size-actual',
            'e059' => 'icon-shuffle',
            'e05a' => 'icon-share-alt',
            'e05b' => 'icon-share',
            'e05c' => 'icon-rocket',
            'e05d' => 'icon-question',
            'e05e' => 'icon-pie-chart',
            'e05f' => 'icon-pencil',
            'e060' => 'icon-note',
            'e061' => 'icon-music-tone-alt',
            'e062' => 'icon-music-tone',
            'e063' => 'icon-microphone',
            'e064' => 'icon-loop',
            'e065' => 'icon-logout',
            'e066' => 'icon-login',
            'e067' => 'icon-list',
            'e068' => 'icon-like',
            'e069' => 'icon-home',
            'e06a' => 'icon-grid',
            'e06b' => 'icon-graph',
            'e06c' => 'icon-equalizer',
            'e06d' => 'icon-dislike',
            'e06e' => 'icon-cursor',
            'e06f' => 'icon-control-start',
            'e070' => 'icon-control-rewind',
            'e071' => 'icon-control-play',
            'e072' => 'icon-control-pause',
            'e073' => 'icon-control-forward',
            'e074' => 'icon-control-end',
            'e075' => 'icon-calendar',
            'e076' => 'icon-bulb',
            'e077' => 'icon-bar-chart',
            'e078' => 'icon-arrow-up',
            'e079' => 'icon-arrow-right',
            'e07a' => 'icon-arrow-left',
            'e07b' => 'icon-arrow-down',
            'e07c' => 'icon-ban',
            'e07d' => 'icon-bubble',
            'e07e' => 'icon-camcorder',
            'e07f' => 'icon-camera',
            'e080' => 'icon-check',
            'e081' => 'icon-clock',
            'e082' => 'icon-close',
            'e083' => 'icon-cloud-download',
            'e084' => 'icon-cloud-upload',
            'e085' => 'icon-doc',
            'e086' => 'icon-envelope',
            'e087' => 'icon-eye',
            'e088' => 'icon-flag',
            'e089' => 'icon-folder',
            'e08a' => 'icon-heart',
            'e08b' => 'icon-info',
            'e08c' => 'icon-key',
            'e08d' => 'icon-link',
            'e08e' => 'icon-lock',
            'e08f' => 'icon-lock-open',
            'e090' => 'icon-magnifier',
            'e091' => 'icon-magnifier-add',
            'e092' => 'icon-magnifier-remove',
            'e093' => 'icon-paper-clip',
            'e094' => 'icon-paper-plane',
            'e095' => 'icon-plus',
            'e096' => 'icon-pointer',
            'e097' => 'icon-power',
            'e098' => 'icon-refresh',
            'e099' => 'icon-reload',
            'e09a' => 'icon-settings',
            'e09b' => 'icon-star',
            'e09c' => 'icon-symbol-female',
            'e09d' => 'icon-symbol-male',
            'e09e' => 'icon-target',
            'e09f' => 'icon-volume-1',
            'e0a0' => 'icon-volume-2',
            'e0a1' => 'icon-volume-off',
            'e001' => 'icon-users'
        );
    }
}

if ( ! function_exists( 'yit_prelaunch_dequeue_script_and_style' ) ) {
    function yit_prelaunch_dequeue_script_and_style() {
        if ( function_exists( 'YIT_Asset' ) && class_exists( 'YITH_Prelaunch_Frontend' ) ) {
            if ( method_exists( 'YITH_Prelaunch_Frontend', 'userIsAllowed' ) && ! YITH_Prelaunch_Frontend::userIsAllowed() ) {
                $is_allowed = true;
            }
            else {

                $is_allowed = false;

                //super admin
                if ( current_user_can( 'manage_network' ) || current_user_can( 'administrator' ) ) {
                    $is_allowed = true;
                }

                $allowed    = get_option( 'yith_prelaunch_roles' );
                $user_roles = yit_user_roles();

                foreach ( $user_roles as $role ) {
                    if ( in_array( $role, $allowed ) ) {
                        $is_allowed = true;
                        break;
                    }
                }
            }

            if ( ! $is_allowed ) {
                YIT_Asset()->dequeue_all( 'style' );
                YIT_Asset()->dequeue_all( 'script' );
            }

        }
    }
}

add_action( 'yit_prelaunch_footer', 'yit_prelaunch_dequeue_script_and_style' );

/* ============================== */
/* MOBILE HEADER MENU             */
/* ============================== */

function yit_mobile_menu_trigger() {
    ?>
    <!-- HEADER MENU TRIGGER -->
    <div id="mobile-menu-trigger" class="mobile-menu-trigger"><a href="#" data-effect="st-effect-4" class="glyphicon glyphicon-align-justify visible-xs"></a></div>
<?php
}
add_action( 'yit_header_inner', 'yit_mobile_menu_trigger', 5 );

if( ! function_exists( 'yit_remove_notice_visual_composer' ) ) {
    /**
     * Remove Admin VC composer notice
     *
     * @since  2.0.0
     * @author Antonio La Rocca <antonio.larocca@yithems.com>
     */
    function yit_remove_notice_visual_composer() {
        update_option( 'vc_license_activation_key', true );
        if ( isset( $GLOBALS['wpVC_setup'] ) ) {
            remove_action( 'admin_notices', array( $GLOBALS['wpVC_setup'], 'adminNoticeLicenseActivation' ) );
        }
    }
}

if( ! function_exists( 'yit_remove_ult_banner' ) ) {
    /**
     * Remove the Wordpress ULTimateAddOns Banner
     *
     *
     * @return string  The html
     * @author Andrea Grillo <andrea.grillo@yithemes.com>
     * @since 2.0
     */
    function yit_remove_ult_banner() {
        $args = apply_filters( 'yit_ult_args', array( 'status' => 'verified', 'code' => 200 ) );
        update_option( 'ultimate_license_activation', $args );
        set_transient( "ultimate_license_activation", true, 10*YEAR_IN_SECONDS );
    }
}

if( ! function_exists( 'yit_remove_rev_slider_banner' ) ) {
    /**
     * Remove the Wordpress ULTimateAddOns Banner
     *
     *
     * @return string  The html
     * @author Andrea Grillo <andrea.grillo@yithemes.com>
     * @since 2.0
     */
    function yit_remove_rev_slider_banner() {
        update_option( 'revslider-valid', true );
        update_option( 'revslider-valid-notice', false );
    }
}

if( ! function_exists( 'yit_remove_ess_grid_banner' ) ) {
    /**
     * Remove the Wordpress Essential Grid Banner
     *
     *
     * @return string  The html
     * @author Andrea Grillo <andrea.grillo@yithemes.com>
     * @since 2.0
     */
    function yit_remove_ess_grid_banner() {
        update_option( 'tp_eg_valid', true );
        update_option( 'tp_eg_valid-notice', false );
    }
}

if( ! function_exists( 'yit_deregister_style' ) ) {
    /**
     * Remove css plugin
     *
     * @author Andrea Frascaspata <andrea.frascaspata@yithemes.com>
     * @since 2.0
     */
    function yit_deregister_style() {
        // js composer shortcode fix
        wp_deregister_style( 'prettyphoto' );
    }
}

/**
 * Return false if there is no pagination on current page
 *
 * @author Andrea Frascaspata <andrea.frascaspata@yithemes.com>
 * @since 2.0
 */
if ( ! function_exists( 'yit_is_paged' ) ) {
    function yit_is_paged() {

        $paged = get_query_var( 'paged' );

        return ! empty( $paged ) ? $paged : get_query_var( 'page' ) ;

    }
}

/**
 * Get current post page
 *
 * @author Andrea Frascaspata <andrea.frascaspata@yithemes.com>
 * @since 2.0
 */
if ( ! function_exists( 'yit_get_post_current_page' ) ) {
    function yit_get_post_current_page() {

        $current_page = yit_is_paged();

        $paged = $current_page ? $current_page : 1;

        return $paged;
    }
}
