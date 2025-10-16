import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const siteConfig = {
  name: 'RewriteMate — The Better Writing Tool for macOS',
  description:
    'RewriteMate is a macOS app that helps you instantly improve, rephrase, and refine any text — anywhere on your Mac. The better writing tool, built right into your workflow.',
  url: 'https://rewritemate.app',
  ogImage: 'https://rewritemate.app.app/opengraph.webp',
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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://rewritemate.app",
              "name": "RewriteMate — The Better Writing Tool for macOS",
              "alternateName": "RewriteMate",
              "description": "RewriteMate is a macOS app that helps you instantly improve, rephrase, and refine any text — anywhere on your Mac. The better writing tool, built right into your workflow.",
              "publisher": {
                "@type": "Organization",
                "name": "RewriteMate",
                "url": "https://rewritemate.app",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://rewritemate.app/opengraph.webp",
                  "width": 1200,
                  "height": 630
                }
              }
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
