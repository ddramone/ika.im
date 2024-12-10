import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import Footer from "./components/footer";
import "./global.css";
import { baseUrl } from "./sitemap";


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "Ika's Personal Space",
    template: "%s | Ika's Personal Space",
  },
  description: "Javascript, Technology, Personal Reflections",
  openGraph: {
    title: "Ika's Personal Space",
    description: "Javascript, Technology, Personal Reflections",
    url: baseUrl,
    siteName: "Ika's Personal Space",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hello-world/og-hello-world.png'],
    creator: '@itsikap',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlausibleProvider domain="ika.im">
      <html
        lang="en"
        className={cx(
          "text-black bg-white ",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <body className="antialiased px-8 max-w-lg md:max-w-2xl  mt-8 mx-auto">
          {children}

          <Footer />
          <SpeedInsights />
        </body>
      </html>
    </PlausibleProvider>
  );
}
