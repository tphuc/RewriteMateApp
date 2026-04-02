import { NextResponse } from 'next/server';
import { getLastNBlogPosts } from '@/lib/blog';

export async function GET() {
  try {
    const posts = getLastNBlogPosts(20);
    
    const formattedPosts = posts.map(post => ({
      title: post.metadata.title,
      summary: post.metadata.summary,
      keywords: post.metadata.keywords,
      publishedAt: post.metadata.publishedAt
    }));

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}