import { sitemap_articles } from '$lib/data/articles.js';

/**
 * Filters articles by a given tag value.
 * @param {string} [tag_value=''] - The tag value to filter by.
 */
export function filterArticlesByTag(tag_value = '') {
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
