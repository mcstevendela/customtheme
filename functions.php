<?php

require_once 'config.php';
require_once 'includes/index.php';
require_once 'gutenberg/index.php';

/**********************************
 * ACF Additional Functions
 **********************************/

/**
 * ACF Options Page
 */
if(function_exists('acf_add_options_page')) {
	acf_add_options_page(array(
		'page_title' => 'Global',
		'menu_title' => 'Global settings',
		'menu_slug' => 'global-settings',
		'icon_url' => 'dashicons-admin-generic',
		'capability' => 'edit_posts',
		'redirect' => false
	));
}