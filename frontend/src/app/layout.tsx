// src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ClientProviders from './components/ClientProviders'
import ClientComponents from './components/ClientComponents' // already 'use client'

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
        <ClientProviders />
        <ClientComponents />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
