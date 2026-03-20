<?php
/**
 * Enqueue theme scripts and styles
 */
/*function theme_custom_scripts() {
	wp_enqueue_script( 'main-scripts', get_template_directory_uri() . '/js/bundle.min.js', array('jquery'), '1.1.2', true);
	wp_enqueue_script( 'swiper-js', get_template_directory_uri() . '/js/swiper.min.js', array(), '1.0.0', true ); // Remove if not using Swiper slider
	wp_enqueue_script( 'fancybox-js', get_template_directory_uri() . '/js/fancybox.min.js', array('jquery'), '1.0.0', true ); // Remove if not using Fancybox
	
	if (!is_admin()) {
		wp_enqueue_style('aos-css', get_template_directory_uri() . '/css/aos.css', array(), '1.0.0');
	}
}
add_action('wp_enqueue_scripts', 'theme_custom_scripts'); 

/**
 * Registers support for editor styles & Enqueue it.
 */
/*function enqueuing_editor_styling(){
	wp_enqueue_style('gutenberg-styles', get_template_directory_uri().'/css/bundle.css'); 
	wp_enqueue_style('fancybox-css', get_template_directory_uri() . '/css/fancybox.min.css', array(), '1.0.0'); // Remove if not using Fancybox

}
add_action('enqueue_block_assets', 'enqueuing_editor_styling');*/ 

function enqueue_admin_scripts_and_styles() {
	wp_enqueue_script('admin-scripts', get_template_directory_uri() . '/assets/js/admin_custom.js', array('wp-blocks', 'wp-element', 'wp-hooks'), '', true);
}
add_action('admin_enqueue_scripts', 'enqueue_admin_scripts_and_styles');