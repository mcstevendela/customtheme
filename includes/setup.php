<?php
use Timber\Timber;
use Timber\Site;

/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 2.0
 */

/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */
$composer_autoload = RD_THEME_DIR . 'vendor/autoload.php';

if ( file_exists( $composer_autoload ) ) {
	require_once $composer_autoload;
}

/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */
if ( ! class_exists( 'Timber\Site' ) ) {

	add_action(
		'admin_notices',
		function() {
			echo '<div class="error"><p>Timber not activated. Make sure Timber is installed via Composer: <code>composer install</code></p></div>';
		}
	);

	add_filter(
		'template_include',
		function( $template ) {
			return get_stylesheet_directory() . '/static/no-timber.html';
		}
	);
	return;
}

/**
 * Class RotateDigital extends the Timber Site class and sets up theme support, context, and other functionality for the Rotate Digital WordPress theme.
 */
class RotateDigital extends Site {
	public function __construct() {
		/** Add Timber locations for Twig files
		 * This allows you to organize your Twig files in a "templates" subdirectory
		 * within your theme, which is a common convention.
		 */
		add_filter( 'timber/locations', function( $paths ) {
			$paths[] = get_stylesheet_directory() . '/templates';
			return $paths;
		});
		
		/** Add theme support for various WordPress features */
		add_theme_support( 'post-formats', array( 'aside', 'chat', 'gallery', 'image', 'link', 'quote', 'status', 'video', 'audio','post-thumbnails' ) );
		add_theme_support( 'title-tag' );
		add_theme_support('menus');
		add_theme_support( 'post-thumbnails' ); 
		add_theme_support('widgets');
		add_theme_support('html5', array('comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'editor-styles'));
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_filter('timber_context', array($this, 'add_to_context'));
		add_filter('timber_context',  array($this, 'global_info'));
		add_action('init', array($this, 'register_post_types'));
		add_action('init', array($this, 'register_taxonomies'));
		add_filter('screen_options_show_screen', '__return_true');
		parent::__construct();
	}

	/** This is where you can register custom post types. */
	function global_info( $context ) {
		$context['global'] = get_fields('option');
		$context['header'] = get_fields('option');
		$context['footer'] = get_fields('option');
		//Add additional global fields as needed
		return $context;
	}

	/** This is where you add some context*/
	public function add_to_context( $context ) {
		$context['global'] = get_field('global', 'options'); //adding global option page
		$context['topbar'] = get_field('topbar', 'options'); //adding topbar option page
		$context['header'] = get_field('header', 'options'); //adding header option page
		$context['company_info'] = get_field('company_info', 'options'); //adding company info option page
		$context['footer'] = get_field('footer', 'options'); //adding footer option page
		$context['menu']  = Timber::get_menu('Main menu');
		$context['site']  = $this;
		//Add additional global context as needed
		return $context;
	}
}

// Initialize the site
new RotateDigital();

/**********************************
 * Clean up the WordPress head
 **********************************/
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10 );
remove_action( 'template_redirect', 'rest_output_link_header', 11, 0 );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'wp_shortlink_wp_head');

/**
 * Disable the emoji's
 */
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );	
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );	
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );	
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
}
add_action( 'init', 'disable_emojis' );

/**
 * Filter out the tinymce emoji plugin.
 */
function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
		return array();
	}
}

/**
 * Remove Comments from Admin Menu
 */
function my_remove_admin_menus() {
	remove_menu_page( 'edit-comments.php' );
}
add_action( 'admin_init', 'my_remove_admin_menus' );

/**
 * Remove annoying notification about ACF Pro updates
 */
function remove_annoying_notification() {
	echo '<style>
    .notice.notice-error.is-dismissible {
      display: none!important;
    }
  </style>';
}
add_action('admin_head', 'remove_annoying_notification');

/**
 * Enable SVG Uploads
 */
function enable_svg_upload( $upload_mimes ) {
    $upload_mimes['svg'] = 'image/svg+xml';
    $upload_mimes['svgz'] = 'image/svg+xml';
    return $upload_mimes;
}
add_filter('upload_mimes', 'enable_svg_upload', 10, 1);