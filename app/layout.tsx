import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/home/NavBar"
import Footer from "@/components/home/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "MyLeslieApp",
  description: "Created by Jorge Ayala",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gradient-to-tr from-lime-400 to-lime-700`}
      >
        <div className="container mx-auto">
          {/* NAV LINKS */}
          <NavBar />

          {/* CONTENT CHANGING */}
          {children}

          <hr className="my-0 sm:my-5 md:my-10 h-1 bg-white rounded-lg" />

          {/* FOOTER */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
