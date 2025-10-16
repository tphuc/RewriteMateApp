

export const baseUrl = 'https://rewritemate.app';

export default async function sitemap() {
	console.log('🛠️ [SITEMAP] Generating sitemap...');

	// Static routes
	const routes = [''].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));
	console.log('✅ [SITEMAP] Static routes:', routes);

	

	const all = [...routes];
	console.log('✅ [SITEMAP] Total entries:', all.length);

	return all;
}
