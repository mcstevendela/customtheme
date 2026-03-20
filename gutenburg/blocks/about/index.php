<?php
// Register a new block.
$about = array(
  'name'            => 'about',
  'title'           => __( 'About', 'rd' ),
  'description'     => __( 'Learn more about who we are, our mission, and what drives us to serve you better.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'format-status',
  'keywords'        => array( 'about' ),
);

return $about;