import { readdirSync, existsSync } from 'fs'
import { join } from 'path'
import { getBlogPosts } from '@/lib/blog'
import { POSTS_PER_PAGE } from './const'

export const baseUrl = 'https://rewritemate.app'

function getSubRoutes(dir: string): string[] {
  const fullPath = join(process.cwd(), 'app', dir)
  if (!existsSync(fullPath)) return []
  return readdirSync(fullPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(join(fullPath, entry.name, 'page.tsx')))
    .map((entry) => `/${dir}/${entry.name}`)
}

export default async function sitemap() {
  const topLevelRoutes = [
    '',
    '/blog',
    '/ios',
    '/macos',
    '/privacy',
    '/terms-and-conditions',
  ]

  const freeToolRoutes = getSubRoutes('(free-tools)')
  const learnRoutes = getSubRoutes('learn')
  const comparisonRoutes = getSubRoutes('tools/comparison')

  const staticRoutes = [...topLevelRoutes, ...freeToolRoutes, '/learn', ...learnRoutes, ...comparisonRoutes].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }),
  )

  let blogs: { url: string; lastModified: string }[] = []
  let paginatedBlogRoutes: { url: string; lastModified: string }[] = []

  try {
    const posts = getBlogPosts()
    blogs = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.metadata?.publishedAt ?? new Date().toISOString(),
    }))

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
    for (let i = 1; i <= totalPages; i++) {
      paginatedBlogRoutes.push({
        url: `${baseUrl}/blog?page=${i}`,
        lastModified: new Date().toISOString().split('T')[0],
      })
    }
  } catch (err) {
    console.error('❌ [SITEMAP] Failed to load blog posts:', err)
  }

  return [...staticRoutes, ...blogs, ...paginatedBlogRoutes]
}
