<?php
/**
 * Theme includes
 *
 * @package Rotate Digital
 */

$inc_directory = __DIR__;
$files = scandir( $inc_directory );

foreach ( $files as $file ) {
  /** require php files in "/inc" */
  if ( ! empty( $file ) && $file != 'index.php' && strpos( $file, '.php' ) ) {
    require_once "{$inc_directory}/{$file}";
  }

  /** require php files in inner directories of "/inc" */
  if ( is_dir( "{$inc_directory}/{$file}" ) && !in_array( $file, ['.', '..'] ) ) {
    $inner_dir = "{$inc_directory}/{$file}";
    foreach ( scandir( $inner_dir ) as $inner_file ) {
      if ( strpos( $inner_file, '.php' ) ) require_once "{$inner_dir}/{$inner_file}";
    }
  }
}