<?php
function rd_custom_post_types_register() {

  $post_types = [
    'practice-areas' => [
      'supports' => [ 'title', 'revisions', 'editor', 'author', 'excerpt', 'thumbnail' ],
      'public' => true,
      'show_in_rest' => true,
      'has_archive' => false,
      'menu_position' => 5,
      'show_in_menu' => true,
      'menu_icon' => 'dashicons-networking',
      'labels' => [
        'name' => 'Practice Areas',
        'singular_name' => 'Practice Areas',
        'add_new' => 'Add New Practice Areas',
        'add_new_item' => 'Add New Practice Areas',
        'edit_item' => 'Edit Practice Areas',
        'new_item' => 'New Practice Areas',
        'view_item' => 'View Practice Areas',
        'view_items' => 'View Practice Areas',
        'search_items' => 'Search Practice Areas',
        'not_found' => 'No Practice Areas found',
        'not_found_in_trash' => 'No Practice Areas found in trash',
        'parent_item_colon' => 'Parent Practice Areas',
        'all_items' => 'All Practice Areass',
        'archives' => 'Practice Areas Archives',
        'attributes' => 'Practice Areas Attributes',
        'insert_into_item' => 'Insert into Practice Areas',
        'uploaded_to_this_item' => 'Uploaded to this Practice Areas',
        'filter_items_list' => 'Filter Practice Areass list',
        'items_list_navigation' => 'Practice Areass list navigation',
        'items_list' => 'Practice Areass list',
        'item_published' => 'Practice Areas published',
        'item_published_privately' => 'Practice Areas published privately',
        'item_reverted_to_draft' => 'Practice Areas reverted to draft',
        'item_scheduled' => 'Practice Areas scheduled',
        'item_updated' => 'Practice Areas updated',
      ],
    ],
    'services' => [
      'supports' => [ 'title', 'revisions', 'editor', 'author', 'excerpt', 'thumbnail' ],
      'public' => true,
      'show_in_rest' => true,
      'has_archive' => false,
      'menu_position' => 5,
      'show_in_menu' => true,
      'menu_icon' => 'dashicons-clipboard',
      'rewrite' => [ 'slug' => 'phoenix-family-law-attorney' ],
      'labels' => [
        'name' => 'Services',
        'singular_name' => 'Services',
        'add_new' => 'Add New Services',
        'add_new_item' => 'Add New Services',
        'edit_item' => 'Edit Services',
        'new_item' => 'New Services',
        'view_item' => 'View Services',
        'view_items' => 'View Servicess',
        'search_items' => 'Search Servicess',
        'not_found' => 'No Servicess found',
        'not_found_in_trash' => 'No Servicess found in trash',
        'parent_item_colon' => 'Parent Services',
        'all_items' => 'All Servicess',
        'archives' => 'Services Archives',
        'attributes' => 'Services Attributes',
        'insert_into_item' => 'Insert into Services',
        'uploaded_to_this_item' => 'Uploaded to this Services',
        'filter_items_list' => 'Filter Servicess list',
        'items_list_navigation' => 'Servicess list navigation',
        'items_list' => 'Servicess list',
        'item_published' => 'Services published',
        'item_published_privately' => 'Services published privately',
        'item_reverted_to_draft' => 'Services reverted to draft',
        'item_scheduled' => 'Services scheduled',
        'item_updated' => 'Services updated',
      ],
    ],
  ];

  foreach ( $post_types as $key => $post_type ) {
    register_post_type($key, $post_type);
  }

}

add_action( 'init', 'rd_custom_post_types_register', 0 );