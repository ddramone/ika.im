import { Encode_Sans, Roboto_Flex } from 'next/font/google'
import './globals.css'

const displayFont = Encode_Sans({ weight: ["800", "600"], subsets: ['latin-ext'], variable: '--font-display' })
const bodyFont = Roboto_Flex({ variable: '--font-body', subsets: ['latin-ext'], })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  )
}
