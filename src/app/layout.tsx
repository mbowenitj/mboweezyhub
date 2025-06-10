import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackgroundParticles from './components/BackgroundParticles'
import ParallaxLayers from './components/ParallaxLayers'
import ScrollToTop from './components/ScrollToTop'
import { GoogleAnalytics } from "nextjs-google-analytics";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mboweezy Hub',
  description: 'Innovative IT solutions for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Google Analytics Script */}
        <GoogleAnalytics trackPageViews />

        <BackgroundParticles />
        <ParallaxLayers />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
