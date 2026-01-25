import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wilson Marin - Portfolio',
  description: 'Computer Science Student & ML/AI Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
