<?php

function rd_block_editor_assets() {
  wp_enqueue_script(
    'rd-limit',
    RD_THEME_URI . 'gutenberg/configs/js/limit-blocks.min.js',
    [ 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ],
    RD_ASSETS_VERSION
  );
}
add_action( 'enqueue_block_editor_assets', 'rd_block_editor_assets' );