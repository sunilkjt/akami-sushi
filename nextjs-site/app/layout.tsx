import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '700'],
})

export const metadata: Metadata = {
  title: 'Akami Sushi Lisboa',
  description:
    'Authentic Japanese cuisine in the heart of Lisbon. Fresh sushi, hot dishes, poke bowls and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link href="https://awards.infcdn.net/2024/circle_v2.css" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans fade-in`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-1009915336"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-1009915336');
        `}</Script>
      </body>
    </html>
  )
}
