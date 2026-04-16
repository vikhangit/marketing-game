import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ApecSpace - Game Không Gian Vũ Trụ',
  description: 'Khám phá vũ trụ không gian với ApecSpace. Game gamification O2O đầu tiên kết hợp phi thuyền, hạm đội và kinh tế kép blockchain định hướng trong hệ sinh thái ApecGlobal.',
  keywords: 'game, space, blockchain, crypto, gamification, O2O, ApecSpace',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'ApecSpace - Game Không Gian Vũ Trụ',
    description: 'Khám phá vũ trụ không gian với ApecSpace',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="dark bg-background" suppressHydrationWarning={true}>
      <body className="font-sans antialiased bg-background" suppressHydrationWarning={true}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
