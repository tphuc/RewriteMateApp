// app/blog/page.tsx
import { formatDate, getBlogPosts, Metadata } from '@/lib/blog';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { POSTS_PER_PAGE } from '@/app/const';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const metadata = {
	title: 'Blog',
	description: 'RewriteMate blogs',
};


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

	// Generate page numbers for the pagination window
	const getPageNumbers = () => {
		const pages = [];
		const showMax = 5; // Number of page buttons to show

		if (totalPages <= showMax) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			// Always show page 1
			pages.push(1);

			if (currentPage > 3) {
				pages.push('...');
			}

			// Show neighbors of the current page
			const start = Math.max(2, currentPage - 1);
			const end = Math.min(totalPages - 1, currentPage + 1);

			for (let i = start; i <= end; i++) {
				pages.push(i);
			}

			if (currentPage < totalPages - 2) {
				pages.push('...');
			}

			// Always show the last page
			pages.push(totalPages);
		}
		return pages;
	};

	const pageNumbers = getPageNumbers();

	return (
		<section className="max-w-screen-lg min-h-[80vh] px-4 lg:px-10 mx-auto flex flex-col items-center py-8">
			<br />
			<h1 className="text-center text-3xl font-semibold py-10">RewriteMate Blog</h1>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-2">
				{paginatedBlogs.map((post: any) => {
					let postMetadata: Metadata = post.metadata;
					let colors = postMetadata?.colors?.split?.(',') || [];

					return (
						<Link
							key={post.slug}
							className={`flex flex-col  rounded-3xl overflow-hidden`}
							href={`/blog/${post.slug}`}
						>
							<div
								className={cn(
									'relative flex flex-col w-full bg-secondary overflow-hidden h-full'
								)}
							>

								<div className='w-full bg-secondary aspect-video'>
									{post.metadata.image ? (
										<img
											alt={post.metadata.title}
											src={post.metadata.image}
											className="aspect-video  w-full"
											style={{ objectFit: 'cover' }}
										/>
									) : null}
								</div>
								<div className='p-4 '>
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
			<div className="flex justify-center items-center gap-2 mt-12">
				{currentPage > 1 && (
					<Link
						href={`/blog?page=${currentPage - 1}`}
						className="px-3  py-2 flex items-center gap-2 rounded-full bg-secondary hover:bg-accent transition-colors"
					>
						<ChevronLeft className='w-4 h-4'/>
					</Link>
				)}

				<div className="flex gap-1">
					{pageNumbers.map((page, index) => {
						if (page === '...') {
							return (
								<span key={`ellipsis-${index}`} className="px-2 py-2">
									...
								</span>
							);
						}

						return (
							<Link
								key={`page-${page}`}
								href={`/blog?page=${page}`}
								className={cn(
									"px-3 py-1 flex items-center justify-center rounded-full transition-colors",
									page === currentPage
										? "bg-primary text-primary-foreground font-medium"
										: "bg-secondary hover:bg-accent"
								)}
							>
								{page}
							</Link>
						);
					})}
				</div>

				{currentPage < totalPages && (
					<Link
						href={`/blog?page=${currentPage + 1}`}
						className="px-3 py-2 flex items-center gap-2 rounded-full bg-secondary hover:bg-accent transition-colors"
					>
						<ChevronRight className='w-4 h-4'/>
					</Link>
				)}
			</div>
		</section>
	);
}