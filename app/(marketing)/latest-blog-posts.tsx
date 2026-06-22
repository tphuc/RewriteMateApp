import { formatDate, getLastNBlogPosts } from "@/lib/blog";
import Link from "next/link";

export default function LatestBlogPosts() {
  const posts = getLastNBlogPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="max-w-screen-lg mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-2">
        Latest from the Blog
      </h2>
      <p className="text-center text-muted-foreground text-xl mb-12 max-w-md mx-auto">
        Tips, guides, and comparisons to help you write better.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-3xl bg-secondary overflow-hidden hover:opacity-90 transition-opacity"
          >
            {post.metadata.image && (
              <div className="w-full aspect-video bg-secondary overflow-hidden">
                <img
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform"
                />
              </div>
            )}
            <div className="p-4 flex flex-col gap-1">
              <p className="text-sm text-muted-foreground tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <h3 className="text-lg font-semibold tracking-tight text-secondary-foreground leading-snug">
                {post.metadata.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
