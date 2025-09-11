// Converted from React JavaScript to TypeScript (.tsx)
import React from 'react';

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Krea AI - AI Gallery',
  description: 'Generate creative content with AI tools',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
