'use server';

import { getBlogPosts } from "@/lib/blog";


export async function generateStaticParams() {
	let posts = getBlogPosts();

	return posts.map((post: any) => ({
		slug: post.slug,
	}));
}