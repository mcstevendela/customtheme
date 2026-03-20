<?php
define( 'COMPANY_NAME' , 'Rotate Digital' );
define( 'RD_ASSETS_VERSION', defined( 'IS_DEV_ENV' ) && IS_DEV_ENV ? time() : '1.0.0' );
define( 'RD_THEME_URI', trailingslashit( get_stylesheet_directory_uri() ) );
define( 'RD_THEME_DIR', trailingslashit( get_stylesheet_directory() ) );
define( 'RD_BLOCKS_BUILD_DIR', get_stylesheet_directory() . '/gutenberg/build/blocks/' );
define( 'RD_BLOCKS_BUILD_URI', get_stylesheet_directory_uri() . '/gutenberg/build/blocks/' );