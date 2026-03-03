
import { getBlogPosts } from '@/lib/blog';
import { POSTS_PER_PAGE } from './const';
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
	let paginatedBlogRoutes: any[] = [];

	try {
		const posts = getBlogPosts();
		blogs = posts.map((post) => ({
			url: `${baseUrl}/blog/${post.slug}`,
			lastModified: post.metadata?.publishedAt ?? new Date().toISOString(),
		}));
		console.log('✅ [SITEMAP] Blog posts:', blogs.length);

		// Paginated blog routes
		const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
		for (let i = 1; i <= totalPages; i++) {
			paginatedBlogRoutes.push({
				url: `${baseUrl}/blog?page=${i}`,
				lastModified: new Date().toISOString().split('T')[0],
			});
		}
		console.log('✅ [SITEMAP] Paginated blog routes:', paginatedBlogRoutes.length);
	} catch (err) {
		console.error('❌ [SITEMAP] Failed to load blog posts:', err);
	}

	const all = [...routes, ...blogs, ...paginatedBlogRoutes];
	console.log('✅ [SITEMAP] Total entries:', all.length);

	return all;
}
