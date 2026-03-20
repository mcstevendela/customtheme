<?php

/**
 * Register custom block categories.
 */
function register_block_categories( $categories, $post ) {
  $company_name = COMPANY_NAME;
  $custom_categories = [
      [
        'slug'  => 'rd-hero-blocks',
        'title' => "{$company_name} - Hero Blocks",
        'icon'  => 'awards',
      ],
      [
        'slug'  => 'rd-dedicated-blocks',
        'title' => "{$company_name} - Dedicated Blocks",
        'icon'  => 'awards',
      ],
      [
        'slug'  => 'rd-dynamic-blocks',
        'title' => "{$company_name} - Dynamic Blocks",
        'icon'  => 'awards',
      ],
      [
        'slug'  => 'rd-generic-blocks',
        'title' => "{$company_name} - Generic Blocks",
        'icon'  => 'awards',
      ],
  ];
  return array_merge( $custom_categories, $categories );
}
add_filter( 'block_categories_all', 'register_block_categories', 10, 2 );