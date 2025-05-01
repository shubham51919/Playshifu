import type React from "react"
import type { Metadata } from "next"
import { Fredoka } from 'next/font/google';
import "./globals.css"
// import { ThemeProvider} from "@/components/theme-provider"




export const metadata: Metadata = {
  title: "PlayKids - Educational Toys for Children",
  description: "Shop award-winning educational toys for children of all ages",
}

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // adjust as needed
  variable: '--font-fredoka',
  display: 'swap'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={fredoka.variable}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}