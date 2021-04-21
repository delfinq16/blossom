<?php
/**
 * This file belongs to the YIT Plugin Framework.
 *
 * This source file is subject to the GNU GENERAL PUBLIC LICENSE (GPL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 */

/**
 * Template file for shows last post of a specific category
 *
 * @package Yithemes
 * @author  Francesco Licandro <francesco.licandro@yithemes.com>
 * @since   1.0.0
 */

wp_enqueue_style( 'blog', YIT_THEME_ASSETS_URL . '/css/blog.css' );

global $icons_name;

$sidebars = yit_get_sidebars();
remove_filter( 'the_content_more_link', 'yit_sc_more_link', 10, 3 ); //shortcode in more links

$args = array(
    'posts_per_page'      => $items,
    'orderby'             => 'date',
    'ignore_sticky_posts' => 1
);

if ( isset( $popular ) && $popular == 'yes' ) {
    $args['orderby'] = 'comment_count';
}

if ( isset( $cat_name ) && ! empty( $cat_name ) && $cat_name != 'null' && $cat_name != "a:0:{}" ) {
    $args['category_name'] = $cat_name;
}

if ( ! isset( $blog_type ) ) {
    $blog_type = 'small';
}

$author_name     = get_the_author_link();
$author          = ( isset( $author ) && ! empty( $author_name ) ) ? $author : 'no';
$show_tags       = ( isset( $show_tags ) && $show_tags == 'yes' );
$show_author     = ( isset( $author ) && $author == 'yes' );
$show_categories = ( isset( $show_categories ) && $show_categories == 'yes' );
$show_comments   = ( isset( $comments ) && $comments == 'yes' );


$args['order'] = 'DESC';

$myposts = new WP_Query( $args );

$animate_data = ( $animate != '' ) ? 'data-animate="' . $animate . '"' : '';
$animate_data .= ( $animation_delay != '' ) ? ' data-delay="' . $animation_delay . '"' : '';
$animate = ( $animate != '' ) ? ' yit_animate' : '';

$blog_type_options = array(
    'blog_type'        => $blog_type,
    'blog_single_type' => 'big',
    'show_wrapper'     => ( $blog_type == 'masonry' ) ? true : false,
    'is_shortcode'     => true,
    'show_tags'        => $show_tags,
    'show_author'      => $show_author,
    'show_categories'  => $show_categories,
    'show_comments'    => $show_comments,
    'show_excerpt'     => $excerpt,
    'excerpt_length'   => $excerpt_length,
    'read_more_text'   => $readmore,
    'show_thumbnail'   => $showthumb,
    'show_date'        => $date
);

echo '<div class="yit_shortcodes recent-post group page-template-blog page-template-blog-php ' . esc_attr( $animate . $vc_css ) . '" ' . $animate_data . '>';

if ( $blog_type_options['show_wrapper'] ) {
    echo '<div class="blog-masonry row">';
}

if ( $blog_type == 'small' && ! is_singular( 'post' ) ) {
    echo '<div class="row ' . $sidebars['layout'] . '">';
}

while ( $myposts->have_posts() ) : $myposts->the_post();

    yit_get_template( 'primary/loop/blog.php', $blog_type_options );

endwhile;

if ( $blog_type_options['show_wrapper'] || ( $blog_type == 'small' && ! is_singular( 'post' ) ) ) {
    echo '</div>';
}

wp_reset_query();

echo '</div>';
