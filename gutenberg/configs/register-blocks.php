<?php
use Timber\Timber;

function rd_register_blocks(): void {
  if ( ! is_dir( RD_BLOCKS_BUILD_DIR ) ) {
    return;
  }

  $block_dirs = array_filter( scandir( RD_BLOCKS_BUILD_DIR ), function( $dir ) {
    return $dir !== '.' && $dir !== '..';
  } );

  foreach ( $block_dirs as $block_dir ) {
    $block_json_file   = RD_BLOCKS_BUILD_DIR . "{$block_dir}/block.json";
    $block_twig_file   = RD_BLOCKS_BUILD_DIR . "{$block_dir}/render.twig";

    if ( ! file_exists( $block_json_file ) ) {
      continue;
    }

    $metadata = json_decode( file_get_contents( $block_json_file ), true );
    if ( ! is_array( $metadata ) ) {
      continue;
    }

    $args = array();

    if ( file_exists( $block_twig_file ) ) {
      $relative_twig = ltrim(
        str_replace( get_stylesheet_directory(), '', $block_twig_file ),
        DIRECTORY_SEPARATOR
      );

      $args['render_callback'] = function( $attributes, $content, $block ) use ( $relative_twig, $metadata ) {
        $context = Timber::context();
        $context['fields'] = get_fields();
        $context['preview'] = is_admin() && isset( $_GET['preview'] ) && $_GET['preview'] === 'true';
        Timber::render( $relative_twig, $context );
      };
    }

    register_block_type_from_metadata( $block_json_file, $args );
  };
}
add_action( 'init', 'rd_register_blocks' );