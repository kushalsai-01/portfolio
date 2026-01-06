import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Portfolio | Backend Software Engineer',
  description: 'Backend-focused software engineer specializing in scalable systems, infrastructure, and developer tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="noise-bg bg-black text-white">
        <ParticlesBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
