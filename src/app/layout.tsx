import { Encode_Sans, Roboto_Flex } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";

const displayFont = Encode_Sans({
  weight: ["800", "600"],
  subsets: ["latin-ext"],
  variable: "--font-display",
});
const bodyFont = Roboto_Flex({
  variable: "--font-body",
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlausibleProvider domain="ika.im">
      <html lang="en">
        <body className={`${displayFont.variable} ${bodyFont.variable}`}>
          {children}
        </body>
      </html>
    </PlausibleProvider>
  );
}
