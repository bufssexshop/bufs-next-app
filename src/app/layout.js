import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bufs sex shop',
  description: 'Sex shop, envios discretos, a todo el pais, promociones, estudio fotográfico para webcams.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} box-border`}>
        <header>
          <Navbar />
        </header>
        <section className='mt-28'>
          {children}
        </section>
      </body>
    </html>
  )
}
