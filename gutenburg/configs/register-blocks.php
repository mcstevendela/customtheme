<?php
/**
 * Register ACF blocks
 */
function block_acf_init() {
	$blocks = require(__DIR__.'/blocks.php');
	foreach($blocks as $block) {
		acf_register_block($block);
	}
}
add_action('acf/init', 'block_acf_init');

/**
 * ACF block render callback
 */
function my_acf_block_render_callback( $block, $innerblock, $content = '', $is_preview = false ) {
	$context = Timber::context();
	$context['block'] = $block;
	$context['fields'] = get_fields();
	$context['is_preview'] = $is_preview;
	Timber::render( 'templates/blocks/' . str_replace('acf/', '', strtolower($block['name'])) . '.twig', $context );
}