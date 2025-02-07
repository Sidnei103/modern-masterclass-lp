import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Master Class Academia de Metas - Alta Performance em Vendas",
  description:
    "Descubra como transformar seu time de vendas em uma máquina de alta performance em 2025. Participe da Master Class exclusiva e gratuita.",
  openGraph: {
    title: "Master Class Academia de Metas",
    description: "Transforme seu time de vendas em uma máquina de alta performance",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Color%20logo%20-%20no%20background-NfEEZEWS4ew1UiYbL9JxRe3nC7yUpX.png",
        width: 1200,
        height: 630,
        alt: "Master Class Academia de Metas",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script-1" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NWMJLQ2J');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NWMJLQ2J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}

