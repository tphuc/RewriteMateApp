import { notFound } from 'next/navigation';
import { baseUrl } from '@/app/sitemap';
import { formatDate, getBlogPosts, getLastNBlogPosts } from '@/lib/blog';
import { CustomMDX } from '@/components/custom-mdx';
import { StyledImage } from '@/components/styled-image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BlogAuthor from './author';

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
		<main className="relative mx-auto max-w-3xl px-4 md:px-0 py-16">
			<div className='min-h-20' />
			<article>
				<header className="mb-12 space-y-4">
					<img src={post.metadata?.image} alt='thumbnail' className='aspect-video w-full rounded-2xl'></img>
					<div className='flex'>
						<Link href='/blog' className='bg-secondary/62 hover:bg-secondary transition duration-200 pl-2 pr-3 rounded-full py-1 gap-2 flex items-center'> <ArrowLeft className='w-4 h-4' /> Back</Link>
					</div>
					<p className="mb-3 text-sm ">
						{formatDate(post.metadata.publishedAt)}
					</p>

					<h1 className="text-4xl font-semibold tracking-tight">
						{post.metadata.title}
					</h1>

					{/* {post.metadata.summary && (
			  <p className="mt-4 text-lg ">
				{post.metadata.summary}
			  </p>
			)} */}
				</header>

				{/* Blog content */}
				<div className="prose prose-neutral prose-invert max-w-none">
					<CustomMDX source={post.content} />
				</div>

				<BlogAuthor
					name="Felix Tran"
					role="Indie Developer & Founder"
					bio=""
				/>
			</article>
		</main>
	);
}