wp.domReady( () => {
  const BODY = document.querySelector('body');
  const ALL_BLOCKS = wp.blocks.getBlockTypes();

  /**
   * Function used to register or unregister blocks in a given category.
   * @param category - (string) - the block category
   * @param selectedBlocks - (array) - the list of blocks to interact with
   * @param blacklist - (boolean) - FALSE (default): keep selectedBlocks, unregister the rest | TRUE: unregister selectedBlocks, keep the rest
   */
  const unregisterBlocks = (category, selectedBlocks = [], blacklist = false) => {
    const blocks = ALL_BLOCKS.filter(block => block.category === category);
    blocks.forEach(block => {
      const isBlockSelected = selectedBlocks.includes(block.name);
      if ((blacklist && isBlockSelected) || (!blacklist && !isBlockSelected)) {
        wp.blocks.unregisterBlockType(block.name);
      }
    });
  };

  let unsubscribe = wp.data.subscribe(() => {
    const CURRENT_POST = wp.data.select('core/editor').getCurrentPost();
    if (Object.keys(CURRENT_POST).length > 0) {
      unsubscribe();

      /**
       * Make sure that all blocks are available in the Blocks Overview page.
       * This page is for the collection of all blocks for the client to see.
       */
      if ( CURRENT_POST.slug !== 'blocks-overview' ) {
        unregisterBlocks('widgets', ['fluentform/simple-form', 'core/html']);
        unregisterBlocks('wpseopress');
        unregisterBlocks('embed');
        unregisterBlocks('safe-svg-blocks');
        unregisterBlocks('media', ['core/image']);
        unregisterBlocks('design', ['core/spacer']);
        unregisterBlocks('text', [
          'core/paragraph', 'core/heading', 'core/list', 'core/list-item'
        ]);
        unregisterBlocks('theme', [
          'core/post-featured-image', 'core/post-excerpt', 'core/post-title'
        ]);

        /**
         * Add post type specific conditions here.
         * 
         * Example:
         * if ( CURRENT_POST.type != 'team' ) {
         *  unregisterBlocks('rd-dedicated-blocks', ['rd/team-member-profile'], true);
         * }
         */
      }
    }
  });
});