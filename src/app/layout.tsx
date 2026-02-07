import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Kushal Sai | Full Stack Developer & ML Engineer',
  description: 'Full Stack Developer and ML Engineer building AI-powered applications, RAG systems, and production-grade web apps. CS undergrad with research experience in Machine Learning.',
  keywords: ['Full Stack Developer', 'ML Engineer', 'AI Engineer', 'React', 'Node.js', 'Python', 'Machine Learning', 'RAG', 'LLMs'],
  authors: [{ name: 'Kushal Sai' }],
  openGraph: {
    title: 'Kushal Sai | Full Stack Developer & ML Engineer',
    description: 'Building AI-powered applications and production-grade systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kushal Sai | Full Stack Developer & ML Engineer',
    description: 'Building AI-powered applications and production-grade systems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
