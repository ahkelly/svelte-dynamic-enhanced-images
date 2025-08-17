<script>
	import { sitemap_articles, articles } from '$lib/data/articles.js';
	import { formatToUSDate } from '$lib/utils/formatter.js';
	import { onMount } from 'svelte';

	let active_tag = $state('all');
	/**
	 * @typedef {Record<string, any>} ImageImport
	 */

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
	const sitemap_articles_with_enhanced_image = sitemap_articles.map((article) => {
		const image_key = article.image_path_article;
		return {
			...article,
			enhanced_image_path: all_thumbnail_images[image_key]?.default
		};
	});
	let articles_array = $state(sitemap_articles_with_enhanced_image);
	// $inspect('articles_array', articles_array);

	/**
	 * Filters articles by a given tag value.
	 * @param {string} [tag_value=''] - The tag value to filter by.
	 */
	function filterArticlesByTag(tag_value = '') {
		const lowerCaseTagValue = tag_value.toLowerCase();

		if (lowerCaseTagValue === 'all') {
			articles_array = sitemap_articles_with_enhanced_image;
			return sitemap_articles;
		}

		articles_array = sitemap_articles_with_enhanced_image.filter(
			(article) => article.tags && article.tags.includes(tag_value)
		);
		return articles_array;
	}

	onMount(() => {
		if (active_tag !== 'all') {
			filterArticlesByTag(active_tag);
		}
	});
</script>

<div class="container">
	<div class="row">
		<div class="col h-100 mt-3">
			<article>
				<div class="p-4 rounded shadow mb-4">
					<div class="row mb-4">
						<div class="col-auto">
							<label for="article_filter" class="form-label"
								>Filter our articles by keyword
								{#if active_tag !== 'all'}
									(<a href="/" data-sveltekit-reload>show all</a>)
								{/if}
							</label>
							<select
								name="article_filter"
								id="article_filter"
								class="form-select"
								bind:value={active_tag}
								onchange={() => {
									filterArticlesByTag(active_tag);
								}}
							>
								<option value="all">All</option>
								{#each articles.tags as tag}
									<option value={tag}>{tag.toLocaleUpperCase()}</option>
								{/each}
							</select>
						</div>
					</div>
					{#if articles_array.length > 0}
						{#each articles_array as item, i (item.title)}
							<div class="row align-items-center">
								<div class="col-12 col-md-10">
									<h3 class="fs-5">
										{item.title}
									</h3>
									<p>{item.description_short}</p>
									{#if item.tags.length > 0}
										<div style="font-size: small;">
											Keywords: {#each item.tags as tag}
												<button
													class="btn btn-warning btn-xs me-2"
													onclick={() => {
														active_tag = tag;
														filterArticlesByTag(active_tag);
													}}>{tag}</button
												>
											{/each}
										</div>
									{/if}
									<div style="font-size: small;">
										Published: {formatToUSDate(item.publish_date)}, Updated: {formatToUSDate(
											item.publish_modify_date
										)}
									</div>
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
					{/if}
				</div>
			</article>
		</div>
	</div>
</div>
