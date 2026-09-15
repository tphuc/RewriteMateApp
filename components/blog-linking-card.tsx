import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getBlogPosts, type Metadata } from '@/lib/blog';

type BlogPost = {
	metadata: Metadata;
	slug: string;
};

type BlogLinkingCardProps = {
	/** The post currently being read. Used to avoid linking to itself. */
	currentSlug?: string;
	/**
	 * Ordered post slugs for a hand-picked set of links. If omitted, the component
	 * finds the closest matches from the posts' title and keyword frontmatter.
	 */
	slugs?: string[];
	title?: string;
	limit?: number;
};

const STOP_WORDS = new Set([
	'a', 'an', 'and', 'are', 'as', 'at', 'best', 'for', 'from', 'how', 'in',
	'is', 'it', 'of', 'on', 'or', 'the', 'to', 'vs', 'what', 'which', 'with',
	'your', '2026', 'iphone',
]);

function terms(value: string) {
	return new Set(
		value
			.toLowerCase()
			.split(/[^a-z0-9]+/)
			.filter((term) => term.length > 2 && !STOP_WORDS.has(term))
	);
}

function scoreRelatedPost(current: BlogPost, candidate: BlogPost) {
	const currentKeywords = new Set(current.metadata.keywords.flatMap((keyword) => [...terms(keyword)]));
	const candidateKeywords = new Set(candidate.metadata.keywords.flatMap((keyword) => [...terms(keyword)]));
	const currentTitle = terms(current.metadata.title);
	const candidateTitle = terms(candidate.metadata.title);

	let score = 0;
	for (const term of currentKeywords) {
		if (candidateKeywords.has(term)) score += 3;
		if (candidateTitle.has(term)) score += 2;
	}
	for (const term of currentTitle) {
		if (candidateKeywords.has(term)) score += 2;
		if (candidateTitle.has(term)) score += 1;
	}

	return score;
}

function recommendedPosts(posts: BlogPost[], currentSlug?: string, limit = 3) {
	const current = posts.find((post) => post.slug === currentSlug);
	const available = posts.filter((post) => post.slug !== currentSlug);

	if (!current) return available.slice(0, limit);

	return available
		.map((post) => ({ post, score: scoreRelatedPost(current, post) }))
		.sort((a, b) => {
			if (b.score !== a.score) return b.score - a.score;
			return new Date(b.post.metadata.publishedAt).getTime() - new Date(a.post.metadata.publishedAt).getTime();
		})
		.slice(0, limit)
		.map(({ post }) => post);
}

/**
 * A server-rendered related-reading section. It can be placed in MDX as:
 * <BlogLinkingCard slugs={["another-post", "one-more-post"]} />
 */
export function BlogLinkingCard({
	currentSlug,
	slugs,
	title = 'Keep reading',
	limit = 3,
}: BlogLinkingCardProps) {
	const posts = getBlogPosts();
	const selectedPosts = slugs?.length
		? slugs
			.map((slug) => posts.find((post) => post.slug === slug))
			.filter((post): post is BlogPost => Boolean(post && post.slug !== currentSlug))
			.slice(0, limit)
		: recommendedPosts(posts, currentSlug, limit);

	if (!selectedPosts.length) return null;

	return (
		<section aria-labelledby="related-posts-heading" className="not-prose my-12 border-t border-border pt-8">
			<div className="mb-5">
				<p className="text-sm font-medium text-muted-foreground">Related articles</p>
				<h2 id="related-posts-heading" className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
					{title}
				</h2>
			</div>

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{selectedPosts.map((post) => (
					<Link
						key={post.slug}
						href={`/blog/${post.slug}`}
						className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:bg-secondary"
					>
						{post.metadata.image && (
							<img
								src={post.metadata.image}
								alt=""
								className="aspect-video w-full object-cover"
							/>
						)}
						<div className="p-4">
							<h3 className="flex items-start justify-between gap-3 font-semibold leading-snug text-card-foreground">
								<span>{post.metadata.title}</span>
								<ArrowUpRight aria-hidden="true" className="mt-0.5 size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
							</h3>
							<p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{post.metadata.summary}</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
