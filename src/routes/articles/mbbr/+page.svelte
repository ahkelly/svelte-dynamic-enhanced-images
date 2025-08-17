<script>
	import { sitemap_articles } from '$lib/data/articles.js';
	import RelatedArticles from '$lib/components/RelatedArticles.svelte';

	/**
	 * Filters articles by a given tag value.
	 * @param {string} [tag_value=''] - The tag value to filter by.
	 */
	function filterArticlesByTag(tag_value = '') {
		const lowerCaseTagValue = tag_value.toLowerCase();
		let articles_array = [];
		if (lowerCaseTagValue === 'all') {
			articles_array = sitemap_articles;
			return sitemap_articles;
		}

		articles_array = sitemap_articles.filter(
			(article) => article.tags && article.tags.includes(tag_value)
		);
		return articles_array;
	}

	const related_articles_array = filterArticlesByTag('mbbr');
</script>

<div class="container">
	<div class="row">
		<div class="col h-100 mt-3">
			<article>
				<h1>Filtered articles</h1>
				{#if related_articles_array.length > 0}
					<RelatedArticles
						{related_articles_array}
						article_header_class="text-center rounded-top"
						article_header="Oil Water Separator Articles"
						article_sub=""
					/>
				{/if}
			</article>
		</div>
	</div>
</div>
