import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazirmatn = Vazirmatn({
  variable: '--font-vazir',
  subsets: ['arabic', 'latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'دیواژ نقش ماندگار | مهندسی سطح، رنگ و فینیشینگ',
  description:
    'دیواژ نقش ماندگار — استودیوی تخصصی پوشش، طراحی سطح و فینیشینگ صنعتی و دکوراتیو. مهندسی سطح با رنگ، تکنولوژی و تخصص.',
  generator: 'v0.app',
  keywords: [
    'پوشش',
    'فینیشینگ',
    'طراحی سطح',
    'کوتینگ',
    'رنگ صنعتی',
    'دیواژ',
    'coating',
    'surface design',
  ],
  openGraph: {
    title: 'دیواژ نقش ماندگار',
    description: 'مهندسی سطح با رنگ، تکنولوژی و تخصص',
    type: 'website',
    locale: 'fa_IR',
  },
  // ترفند طلایی: اجبار مرورگر به تبدیل لینک‌های ناامن HTTP به HTTPS در هوا
  other: {
    'Content-Security-Policy': 'upgrade-insecure-requests',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3ece0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${vazirmatn.className} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
