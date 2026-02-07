import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Kushal Sai — Full Stack Developer & ML Researcher',
  description:
    'Full-stack developer and ML researcher building AI-powered applications, encrypted systems, and production infrastructure. CS undergrad at DSCE with 9.2 CGPA.',
  keywords: [
    'Kushal Sai',
    'Full Stack Developer',
    'ML Researcher',
    'AI Engineer',
    'React',
    'Node.js',
    'Python',
    'Golang',
    'Machine Learning',
    'RAG',
    'Portfolio',
  ],
  authors: [{ name: 'Kushal Sai' }],
  openGraph: {
    title: 'Kushal Sai — Full Stack Developer & ML Researcher',
    description:
      'Building AI-powered applications, encrypted systems, and production infrastructure.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kushal Sai — Full Stack Developer & ML Researcher',
    description:
      'Building AI-powered applications, encrypted systems, and production infrastructure.',
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
      </body>
    </html>
  )
}
