<script>
	import { PUBLIC_URI } from '$env/static/public';
	import { filterArticlesByTag } from '$lib/utils/articles.js';
	import { sitemap_ows } from '$lib/data/sitemap_data/ows.js';
	import { sitemap_ows_industries } from '$lib/data/sitemap_data/ows-industries.js';
	import above_ground_ows from './images/above-ground-oil-water-separator-ecos.jpg?enhanced';
	import ahp_55_vessel from './images/ecologix-ahp-55-vessel-sm.png?enhanced';
	import below_ground_ows from './images/below-ground-oil-water-separator-hqb.jpg?enhanced';
	import gun_barrel_ows from './images/gunbarrel-oil-water-separator.jpg?enhanced';
	import bors_ows from './images/bors-25t-107-137h.jpg?enhanced';
	import oil_free_ows from './images/OilFree_Cans_mainPage2.5.jpg?enhanced';
	import organoclay_cartridge_ows from './images/mcm-organoclay-cartridges.jpg?enhanced';
	import skimloop_ows from './(ows)/skimloop/images/oil-water-separator-skimsep.jpg?enhanced';

	// $inspect('all_images', all_images);

	import { JsonLd } from 'svelte-meta-tags';
	import CallToActionCard from '$lib/components/CallToActionCard.svelte';
	import RelatedArticles from '$lib/components/RelatedArticles.svelte';
	let { data } = $props();
	const related_articles_array = filterArticlesByTag('oil water separators');

	const article_data = sitemap_ows.map((item) => ({
		'@type': 'Product',
		name: item.title,
		description: item.description,
		image: {
			'@type': 'ImageObject',
			url: PUBLIC_URI + item.image_path_static,
			width: item.image_width,
			height: item.image_height
		},
		sku: item.sku,
		brand: { '@type': 'Brand', name: data.baseMetaTags.openGraph.siteName },
		url: PUBLIC_URI + item.path,
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: item.rating_value,
			reviewCount: item.review_count
		}
	}));
</script>

<JsonLd
	schema={{
		'@type': 'CollectionPage',
		name: data.pageMetaTags.title,
		description: data.pageMetaTags.description,
		url: PUBLIC_URI + data.pageMetaTags.path,
		mainContentOfPage: article_data
	}}
/>
<div class="container">
	<div class="row">
		<div class="col h-100 mt-3">
			<article>
				<h1 class="text-center">{data.pageMetaTags.title}</h1>
				<p>{data.pageMetaTags.description}</p>

				<CallToActionCard
					bg_class="bg-success"
					href_link="/forms/oil-water-separator-request"
					referrer="ows_landing"
					header_text="Request an Oil Water Separator quote"
					lead_text="Connect with our experts today"
					button_text="Oil Water Separator Quote Request"
				/>

				<div class="row row-cols-1 row-cols-md-4 g-4 mb-3 mt-1">
					{#each sitemap_ows as item}
						<div class="col">
							<div class="card h-100 border-success shadow text-center">
								{#if item.image_import_name === 'above_ground_ows'}
									<enhanced:img
										class="img-fluid landing"
										src={above_ground_ows}
										alt={item.image_alt}
									/>
								{:else if item.image_import_name === 'ahp_55_vessel'}
									<enhanced:img
										class="img-fluid landing"
										src={ahp_55_vessel}
										alt={item.image_alt}
									/>
								{:else if item.image_import_name === 'below_ground_ows'}
									<enhanced:img
										class="img-fluid landing"
										src={below_ground_ows}
										alt={item.image_alt}
									/>
								{:else if item.image_import_name === 'gun_barrel_ows'}
									<enhanced:img
										class="img-fluid landing"
										src={gun_barrel_ows}
										alt={item.image_alt}
									/>
								{:else if item.image_import_name === 'bors_ows'}
									<enhanced:img class="img-fluid landing" src={bors_ows} alt={item.image_alt} />
								{:else if item.image_import_name === 'oil_free_ows'}
									<enhanced:img class="img-fluid landing" src={oil_free_ows} alt={item.image_alt} />
								{:else if item.image_import_name === 'organoclay_cartridge_ows'}
									<enhanced:img
										class="img-fluid landing"
										src={organoclay_cartridge_ows}
										alt={item.image_alt}
									/>
								{:else if item.image_import_name === 'skimloop_ows'}
									<enhanced:img class="img-fluid landing" src={skimloop_ows} alt={item.image_alt} />
								{/if}
								<div class="card-body">
									<h5 class="card-title">
										<a href={item.path} class="link-no-underline stretched-link">
											{item.title}
										</a>
									</h5>
									<p class="card-text">
										{item.description_short}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>

				{#if related_articles_array.length > 0}
					<RelatedArticles {related_articles_array} article_header="Oil Water Separator Articles" />
				{/if}
				{#if sitemap_ows_industries.length > 0}
					<h2 class="bg-success p-2 text-white mb-0">Oil Water Separator Industries</h2>
					<div class="p-4 rounded shadow mb-4">
						{#each sitemap_ows_industries as item}
							<h3 class="fs-5">
								<a href={item.path} class="link-no-underline">{item.title}</a>
							</h3>
							<p>{item.description}</p>
						{/each}
					</div>
				{/if}
			</article>
		</div>
	</div>
</div>

<style>
	.card:hover {
		transform: scale(1.05);
		transition: transform 0.5s;
	}
	.landing {
		width: auto;
		height: 150px;
	}
</style>
