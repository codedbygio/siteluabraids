import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Studio Lua Sezio | Salão de Tranças Afro Feminino em Praia Grande - SP",
  description:
    "Studio Lua Sezio - Salão especializado em tranças afro femininas. Box braids, twist, nagô e alongamentos com técnicas delicadas. Terça a sábado com hora marcada em Praia Grande, SP.",
  keywords:
    "tranças afro, box braids, twist, nagô, alongamento, salão afro feminino, Praia Grande, SP, cabelo crespo, penteados afro, Studio Lua Sezio, hora marcada",
  authors: [{ name: "Studio Lua Sezio" }],
  creator: "Studio Lua Sezio",
  publisher: "Studio Lua Sezio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://studioluasezio.com.br",
    title: "Studio Lua Sezio | Salão de Tranças Afro Feminino",
    description: "O mais feminino e elegante espaço para realçar sua beleza natural com tranças afro delicadas.",
    siteName: "Studio Lua Sezio",
    images: [
      {
        url: "/images/logo-gold.png",
        width: 1200,
        height: 630,
        alt: "Studio Lua Sezio - Salão Feminino de Tranças Afro",
      },
    ],
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
    <head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#F8B91C" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-poppins antialiased bg-gradient-to-br from-pink-50 via-purple-50 to-amber-50 text-gray-800`}
      >
        <div className="floating-particles"></div>
        {children}
      </body>
    </html>
  )
}
