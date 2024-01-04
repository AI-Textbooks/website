import type { Metadata } from "next";
import { Hind } from "next/font/google";
import { AppBar } from "./AppBar";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Hind({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "AI Textbooks",
  description: "The global knowledge base architecture",
  metadataBase: new URL('https://ai-textbooks.com'),
  openGraph: {
    title: "AI Textbooks",
    images: `/api/og`
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Nurturing a future where AI models become interfaces between open knowledge repositories."
        />
        <link rel="canonical" href="https://ai-textbooks.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/*
        	Open graph meta tags.
    	*/}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="AI Textbooks" />
        <meta
          property="og:description"
          content="Nurturing a future where AI models become interfaces between open knowledge repositories."
        />
        <meta property="og:url" content="https://ai-textbooks.com" />
      </head>
      <body className={inter.className}>
        <AppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
