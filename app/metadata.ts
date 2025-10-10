import type { Metadata } from 'next';

const siteConfig = {
  name: 'RewriteMate — The Better Writing Tool for macOS',
  description:
    'RewriteMate is a macOS app that helps you instantly improve, rephrase, and refine any text — anywhere on your Mac. The better writing tool, built right into your workflow.',
  url: 'https://rewritemate.app',
  ogImage: 'https://rewritemate.app/opengraph.webp',
};

export const metadata: Metadata = {
  title: {
    default: 'RewriteMate',
    template: `%s`,
  },
  description: siteConfig.description,
  keywords: [
    'RewriteMate',
    'macOS writing app',
    'AI writing assistant',
    'text rewriter',
    'grammar improvement',
    'AI editor',
    'writing enhancer',
    'better writing tool',
    'Mac writing productivity',
  ],
  creator: '@tphuc',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'RewriteMate Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};