
import { getBlogPosts } from '@/lib/blog';
export const baseUrl = 'https://rewritemate.app';

export default async function sitemap() {
	console.log('🛠️ [SITEMAP] Generating sitemap...');

	// Static routes
	const routes = ['', '/blog'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));
	console.log('✅ [SITEMAP] Static routes:', routes);

	// Blog posts
	let blogs: any[] = [];
	try {
		const posts = getBlogPosts();
		blogs = posts.map((post) => ({
			url: `${baseUrl}/blog/${post.slug}`,
			lastModified: post.metadata?.publishedAt ?? new Date().toISOString(),
		}));
		console.log('✅ [SITEMAP] Blog posts:', blogs.length);
	} catch (err) {
		console.error('❌ [SITEMAP] Failed to load blog posts:', err);
	}

	const all = [...routes, ...blogs];
	console.log('✅ [SITEMAP] Total entries:', all.length);

	return all;
}
