import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sijan Paudel - Computer Engineer | Developer | Creative Coder',
  description:
    'Personal portfolio of Sijan Paudel - A passionate developer, designer, and creative coder specializing in AI, NLP, and modern web development.',
  keywords: [
    'Sijan Paudel',
    'Developer',
    'Computer Engineer',
    'AI',
    'NLP',
    'Machine Learning',
    'Web Development',
    'Portfolio',
  ],
  authors: [{ name: 'Sijan Paudel' }],
  creator: 'Sijan Paudel',
  openGraph: {
    title: 'Sijan Paudel - Computer Engineer | Developer | Creative Coder',
    description:
      'Personal portfolio of Sijan Paudel - A passionate computer engineer, developer, and creative coder specializing in AI, NLP, and modern web development.',
    type: 'website',
    url: 'https://sijanpaudel.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          storageKey='portfolio-theme'
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
