import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Footer from "./components/footer";
import Logo from "./components/logo";
import "./global.css";
import { baseUrl } from "./sitemap";
import PlausibleProvider from "next-plausible";
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Next.js Portfolio Starter",
    template: "%s | Next.js Portfolio Starter",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
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
