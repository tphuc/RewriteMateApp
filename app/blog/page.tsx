// app/blog/page.tsx
import { formatDate, getBlogPosts, Metadata } from '@/lib/blog';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const metadata = {
	title: 'Blog',
	description: 'RewriteMate blogs',
};

const POSTS_PER_PAGE = 12;

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ page?: string }>;
}) {
	const params = await searchParams; // ✅ Await for Next.js 14+
	const allBlogs = await getBlogPosts();

	// Sort by publishedAt (newest first)
	const sortedBlogs = allBlogs.sort(
		(a, b) =>
			new Date(b.metadata.publishedAt).getTime() -
			new Date(a.metadata.publishedAt).getTime()
	);

	// Pagination logic
	const currentPage = parseInt(params.page || '1', 10);
	const totalPages = Math.ceil(sortedBlogs.length / POSTS_PER_PAGE);
	const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
	const paginatedBlogs = sortedBlogs.slice(
		startIndex,
		startIndex + POSTS_PER_PAGE
	);

	return (
		<section className="max-w-screen-lg min-h-[80vh] px-4 lg:px-10 mx-auto flex flex-col items-center py-8">
			<br/>
			<h1 className="text-center text-3xl font-semibold py-10">RewriteMate Blog</h1>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-2">
				{paginatedBlogs.map((post: any) => {
					let postMetadata: Metadata = post.metadata;
					let colors = postMetadata?.colors?.split?.(',') || [];

					return (
						<Link
							key={post.slug}
							className={`flex flex-col  border-[0.5px] rounded-3xl overflow-hidden`}
							href={`/blog/${post.slug}`}
						>
							<div
								className={cn(
									'relative flex flex-col w-full bg-secondary overflow-hidden h-full'
								)}
							>

								<div className='w-full aspect-video'>
								{post.metadata.image ? (
									<img
										alt={post.metadata.title}
										src={post.metadata.image}
										className="aspect-video w-full"
										style={{ objectFit: 'cover' }}
									/>
								) : null}
								</div>
								<div className='p-4'>
									<h2 className="flex flex-col text-xl font-semibold tracking-tight text-left text-secondary-foreground">
										{post.metadata.title}
									</h2>
									<p className="w-full text-sm text-left text-muted-foreground tabular-nums">
										{formatDate(post.metadata.publishedAt, false)}
									</p>
									<p className="line-clamp-2 text-muted-foreground">
										{post.metadata.summary}
									</p>
								</div>
							</div>
						</Link>
					);
				})}
			</div>

			{/* Pagination Controls */}
			<div className="flex justify-center gap-2 mt-8">
				{Array.from({ length: totalPages }, (_, i) => {
					const pageNum = i + 1;
					return (
						<Link
							key={pageNum}
							href={`/blog?page=${pageNum}`}
							className={`px-4 py-2  rounded-full ${pageNum === currentPage
									? 'bg-accent text-white'
									: 'bg-transparent'
								}`}
						>
							{pageNum}
						</Link>
					);
				})}
			</div>
		</section>
	);
}