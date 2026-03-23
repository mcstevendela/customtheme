<?php

/*
 * Enqueue Theme Scripts and Styles
 */
function rd_enqueue_libraries() {
		wp_enqueue_style(
		'main-style', 
		RD_THEME_URI . 'gutenberg/build/css/style.css',
		[], 
		RD_ASSETS_VERSION
	);

	wp_enqueue_script(
		'main-js',
    RD_THEME_URI . 'assets/js/bundle.min.js',
    [ 'jquery' ],
		RD_ASSETS_VERSION,
		'true'
	);
}
add_action( 'wp_enqueue_scripts', 'rd_enqueue_libraries', 100 );

/*
 * Enqueue Admin Scripts and Styles
 */
function rd_enqueue_admin_libraries() {
	wp_enqueue_script('admin-scripts', get_template_directory_uri() . '/assets/js/admin.min.js', array('wp-blocks', 'wp-element', 'wp-hooks'), '', true);
}
add_action('admin_enqueue_scripts', 'rd_enqueue_admin_libraries');