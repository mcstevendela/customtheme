<?php
$classes = ['block-about'];
if( !empty( $block['className'] ) )
    $classes = array_merge( $classes, explode( ' ', $block['className'] ) );

$anchor = '';
if( !empty( $block['anchor'] ) )
	$anchor = ' id="' . sanitize_title( $block['anchor'] ) . '"';

echo '<div class="' . join( ' ', $classes ) . '"' . $anchor . '>';
	echo '<div class="block-about__inner">';
		echo '<div class="block-about__content">';
			echo '<InnerBlocks />';
		echo '</div>';
		echo '<div class="block-about__image">';
			echo wp_get_attachment_image( get_field( 'image' ), 'be_thumbnail_l' );
		echo '</div>';
	echo '</div>';
echo '</div>';

?>