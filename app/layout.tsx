import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Headers from "../components/Header"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mayur Patil || PortFolio',
  description: 'Mayur Patil || PortFolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headers />
        {children}
        </body>
    </html>
  )
}
