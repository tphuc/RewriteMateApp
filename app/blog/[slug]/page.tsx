import { notFound } from 'next/navigation';
import { baseUrl } from '@/app/sitemap';
import { formatDate, getBlogPosts, getLastNBlogPosts } from '@/lib/blog';

export async function generateStaticParams() {
	let posts = getBlogPosts();


	return posts.map((post: any) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params }: any) {
	const { slug } = await params;
	let post = getBlogPosts().find((post: any) => post.slug === slug);
	if (!post) return {};

	const {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
		colors,
	} = post.metadata;

	let ogImage: string;

	if (image) {
		ogImage = image;
	} else {
		const searchParams = new URLSearchParams();
		searchParams.set('title', title);
		if (colors) {
			searchParams.set('colors', colors);
		}
		ogImage = `${baseUrl}/og?${searchParams.toString()}`;
	}

	return {
		title,
		description,
		keywords: post?.metadata?.keywords,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `${baseUrl}/blog/${post.slug}`,
			images: [{ url: ogImage }],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function Blog({ params }: any) {
	const { slug } = await params;
	const post = getBlogPosts().find((post: any) => post.slug === slug);
  
	if (!post) notFound();
  
	return (
	  <main className="relative mx-auto max-w-3xl px-4 py-16">
		<article>
		  <header className="mb-12">
			<p className="mb-3 text-sm text-neutral-500">
			  {formatDate(post.metadata.publishedAt)}
			</p>
  
			<h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
			  {post.metadata.title}
			</h1>
  
			{post.metadata.summary && (
			  <p className="mt-4 text-lg text-neutral-600">
				{post.metadata.summary}
			  </p>
			)}
		  </header>
  
		  {/* Blog content */}
		  <div className="prose prose-neutral max-w-none">
			{post.content}
		  </div>
		</article>
	  </main>
	);
  }