<script>
	/**
	 * @typedef {Record<string, any>} ImageImport
	 */

	let {
		/** @type {string} */ article_header = 'Related Articles',
		/** @type {string} */ article_header_class = '',
		/** @type {Array} */ related_articles_array = [],
		/** @type {string} */ article_sub = ''
	} = $props();

	/**
	 * @type {ImageImport}
	 */
	const all_thumbnail_images = import.meta.glob(
		'$lib/assets/images/thumbnails/*.{jpeg,jpg,png,gif}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);

	// Add the image path data to the articles_array
	const sitemap_articles_with_enhanced_image = related_articles_array.map((article) => {
		const image_key = article.image_path_article;
		return {
			...article,
			enhanced_image_path: all_thumbnail_images[image_key]?.default
		};
	});
	let articles_array = $state(sitemap_articles_with_enhanced_image);
</script>

<section id="related-articles">
	{#if articles_array.length > 0}
		<h2 class="bg-success p-2 text-white mb-0 {article_header_class}">{article_header}</h2>
		{@html article_sub}
		<div class="p-4 rounded shadow mb-4">
			{#each articles_array as item, i}
				<div class="row align-items-center">
					<div class="col-12 col-md-10">
						<h3 class="fs-5">
							{item.title}
						</h3>
						<p>{item.description_short}</p>
					</div>
					<div class="d-none d-md-block col-md-2">
						{#if item.enhanced_image_path}
							<enhanced:img
								class="img-fluid d-block mx-auto rounded"
								src={item.enhanced_image_path}
								alt={item.image_path_article_alt}
							/>
						{/if}
					</div>
				</div>
				{#if i < articles_array.length - 1}
					<hr class="my-2" />
				{/if}
			{/each}
		</div>
	{/if}
</section>
