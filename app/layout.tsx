import type { Metadata } from 'next'
import { Playfair_Display, Instrument_Serif, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import LenisProvider from '@/components/ui/LenisProvider'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kléro — Généalogie successorale · Paris',
  description:
    "Cabinet de généalogie successorale depuis 1984. Nous retrouvons les héritages oubliés : comptes dormants, legs non réclamés, successions non closes. Diagnostic confidentiel, contrôle notarial.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Kléro Généalogie',
    title: 'Kléro — Ce que votre famille a oublié. Nous le retrouvons.',
    description:
      "Cabinet de généalogie successorale depuis 1984. Diagnostic d'éligibilité confidentiel.",
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${instrument.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-full bg-navy-0 text-bone font-sans">
        <div className="bg-layer" aria-hidden="true" />
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
