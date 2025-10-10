import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { metadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export {metadata}



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
