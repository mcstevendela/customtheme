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

$innerbanner = array(
  'name'            => 'innerbanner',
  'title'           => __( 'Inner Banner', 'rd' ),
  'description'     => __( 'Use to display a high-impact Inner Banner above the fold for key messages.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'money',
  'keywords'        => array( 'innerbanner' ),
);


$mediatext = array(
  'name'            => 'mediatext',
  'title'           => __( 'Media + Text', 'rd' ),
  'description'     => __( 'Combine images or videos with text side-by-side for engaging, versatile content layouts.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'align-pull-left',
  'keywords'        => array( 'mediatext' ),
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

$team = array(
  'name'            => 'team',
  'title'           => __( 'Team', 'rd' ),
  'description'     => __( 'Introduce your staff with customizable profiles showcasing photos, roles, and bios to build trust and connection.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'groups',
  'keywords'        => array( 'team' ),
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

$inmedia = array(
  'name'            => 'inmedia',
  'title'           => __( 'In The Media', 'rd' ),
  'description'     => __( 'Browse our latest posts below and click any title or image to read the full article.', 'rotatedigital.com' ),
  'render_callback' => 'my_acf_block_render_callback',
  'category'        => 'rd-blocks',
  'icon'            => 'admin-post',
  'keywords'        => array( 'inmedia' ),
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

$blocks = [
  $banner,
  $innerbanner,
  $mediatext,
  $card,
  $cta,
  $team,
  $faq,
  $logo,
  $testimonial,
  $form,
  $flexible,
  $inmedia,
  $about,
  $video,
  $icon,
];
return $blocks;