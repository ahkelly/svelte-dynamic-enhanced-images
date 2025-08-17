/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// Meta data
	const pageMetaTags = {
		title: 'Oil Water Separators',
		description:
			'Remove gasoline, motor oil, diesel fuel, crude, and other lighter-than-water oils from your wastewater. Our robust oil water separators ensure compliance for discharge to sanitary or storm sewers, keeping you in compliance.',
		category: 'Oil Water Separators',
		image: 'https://ecologixsystems.com/images/above-ground-oil-water-separator-AGS-2SS-60V-HP.jpg',
		image_alt: 'Above Ground Oil Water Separator',
		image_height: 403,
		image_width: 383,
		openGraph: {
			type: 'Product',
			images: [
				{
					url: 'https://ecologixsystems.com/images/above-ground-oil-water-separator-AGS-2SS-60V-HP.jpg',
					width: 280,
					height: 500,
					alt: 'Above Ground Oil Water Separator'
				}
			],
			title: 'Oil Water Separators',
			description:
				'Remove gasoline, motor oil, diesel fuel, crude, and other lighter-than-water oils from your wastewater. Our robust oil water separators ensure compliance for discharge to sanitary or storm sewers, keeping you in compliance.'
		},
		path: '/oil-water-separators',
		publish_date: '2007-02-22T08:00:00+08:00',
		publish_modify_date: '2025-03-01T08:00:00+08:00',
		url: 'https://ecologixsystems.com/oil-water-separators'
	};
	return { pageMetaTags };
}
