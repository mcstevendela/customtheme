<?php
 // Register a new block.
$banner = array(
  'name'            => 'banner',
  'title'           => __( 'Banner', 'rd' ),
  'description'     => __( 'Use to display a high-impact banner above the fold for key messages.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'money',
  'keywords'        => array( 'banner' ),
);

$card = array(
  'name'            => 'card',
  'title'           => __( 'Cards', 'rd' ),
  'description'     => __( 'Showcase multiple items or features with customizable card-style layouts for clear, organized content.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'id-alt',
  'keywords'        => array( 'card' ),
);

$cta = array(
  'name'            => 'cta',
  'title'           => __( 'Call To Action', 'rd' ),
  'description'     => __( 'Encourage user engagement with compelling buttons and persuasive text prompts designed to drive action.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'phone',
  'keywords'        => array( 'cta' ),
);

$faq = array(
  'name'            => 'faq',
  'title'           => __( 'FAQs', 'rd' ),
  'description'     => __( 'Organize common questions and answers in a clear, collapsible format to help visitors find info quickly.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'editor-help',
  'keywords'        => array( 'faq' ),
);

$logo = array(
  'name'            => 'logo',
  'title'           => __( 'Logo', 'rd' ),
  'description'     => __( 'Display client, partner, or sponsor logos in a clean, responsive grid to build credibility and showcase collaborations.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'podio',
  'keywords'        => array( 'logo' ),
);

$testimonial = array(
  'name'            => 'testimonial',
  'title'           => __( 'Testimonial', 'rd' ),
  'description'     => __( 'Showcase customer reviews and feedback with styled quotes, photos, and names to build trust and social proof.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'list-view',
  'keywords'        => array( 'testimonial' ),
);

$form = array(
  'name'            => 'form',
  'title'           => __( 'Form', 'rd' ),
  'description'     => __( 'Create easy-to-use, customizable contact or signup forms to capture visitor information and boost engagement.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'text-page',
  'keywords'        => array( 'form' ),
);

$flexible = array(
  'name'            => 'flexible',
  'title'           => __( 'Flexible Content', 'rd' ),
  'description'     => __( 'Build dynamic pages by combining rich text, single or dual images, and call-to-action buttons—all easily customizable for versatile layouts.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'layout',
  'keywords'        => array( 'flexible' ),
);

$blog = array(
  'name'            => 'blog',
  'title'           => __( 'Blogs', 'rd' ),
  'description'     => __( 'Browse our latest posts below and click any title or image to read the full article.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'admin-post',
  'keywords'        => array( 'blog' ),
);

$about = array(
  'name'            => 'about',
  'title'           => __( 'About', 'rd' ),
  'description'     => __( 'Learn more about who we are, our mission, and what drives us to serve you better.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'format-status',
  'keywords'        => array( 'about' ),
);

$video = array(
  'name'            => 'video',
  'title'           => __( 'Video', 'rd' ),
  'description'     => __( 'Showcase videos with customizable settings for titles, descriptions, and more.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'video-alt',
  'keywords'        => array( 'video' ),
);

$icon = array(
  'name'            => 'icon',
  'title'           => __( 'Icon', 'rd' ),
  'description'     => __( 'Showcase icons with customizable settings for titles, descriptions, and more.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'nametag',
  'keywords'        => array( 'icon' ),
);

$pill = array(
  'name'            => 'pill',
  'title'           => __( 'Pill', 'rd' ),
  'description'     => __( 'Showcase pills with customizable settings for titles, descriptions, and more.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'editor-ul',
  'keywords'        => array( 'pill' ),
);

$gallery = array(
  'name'            => 'gallery',
  'title'           => __( 'Gallery', 'rd' ),
  'description'     => __( 'Showcase a gallery with customizable settings for titles, descriptions, and more.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'images-alt2',
  'keywords'        => array( 'gallery' ),
);

$process = array(
  'name'            => 'process',
  'title'           => __( 'Process', 'rd' ),
  'description'     => __( 'Showcase a process with customizable settings for titles, descriptions, and more.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'schedule',
  'keywords'        => array( 'process' ),
);

$map = array(
  'name'            => 'map',
  'title'           => __( 'Map', 'rd' ),
  'description'     => __( 'Embed interactive maps with customizable locations, zoom levels, and styles to enhance user experience.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'location-alt',
  'keywords'        => array( 'map' ),
);

$blocks = [
  $banner,
  $card,
  $cta,
  $faq,
  $logo,
  $testimonial,
  $form,
  $flexible,
  $blog,
  $about,
  $video,
  $icon,
  $pill,
  $gallery,
  $process,
  $map,
];
return $blocks;