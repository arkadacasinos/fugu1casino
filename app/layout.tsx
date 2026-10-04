import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://fugu1casino.vercel.app'

const TITLE =
  'Fugu Casino — официальный сайт и рабочее зеркало: играть онлайн'

const DESCRIPTION =
  'Fugu Casino — официальный сайт казино. Рабочее зеркало для входа, играть онлайн в слоты, рулетку и карты. Быстрая регистрация, бонусы новым игрокам и честные выплаты.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Fugu Casino',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/images/fq7-hero.jpg',
        width: 1200,
        height: 509,
        alt: 'Fugu Casino — официальный сайт',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/fq7-hero.jpg'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0e3b2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="fq7-root">
      <head>
        <meta name="yandex-verification" content="d525f5958878175a" />
        {/* Дополнительные пользовательские теги можно вставлять сюда */}
      </head>
      <body>{children}</body>
    </html>
  )
}
