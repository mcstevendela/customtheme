document.addEventListener("mouseover", function(e) {
	// Selector to preview block where you want to show background image
	const previewContainer = document.querySelector('.block-editor-inserter__preview-content-missing');

	if (!previewContainer) {
		return;
	}

	if (e.target.closest('.block-editor-block-types-list__item')) {
		const hoveredBlock = e.target.closest('.block-editor-block-types-list__item');

		// to find a name of the block we can extract it from block classes
		// Retrieve classes from the block on which the mouse is hovered
		const blockClasses = hoveredBlock.className.split(' ');

		// Finding a class that starts with "editor-block-list-item-acf-"
		const blockClass = blockClasses.find(cls => cls.startsWith("editor-block-list-item-rd-"));

		// If such a class is found, extract the name from it
		if (blockClass) {
			const blockName = blockClass.replace("editor-block-list-item-rd-", "");

			// Get the image URL for this block
			const imageUrl = wp.data.select('core/blocks').getBlockType("rd/" + blockName)?.attributes?.previewImage?.default;

			// adding our styles if there is a link to the picture
			if (imageUrl) {
				previewContainer.style.background = `url(${imageUrl}) no-repeat center`;
				previewContainer.style.backgroundSize = 'cover';
				previewContainer.style.fontSize = '0px';
			} else {
				// remove our styles if there is no link
				previewContainer.style.background = '';
				previewContainer.style.backgroundSize = '';
				previewContainer.style.fontSize = '';
			}
		}
	}
	});