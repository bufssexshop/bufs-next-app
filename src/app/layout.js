import './globals.css'
import Providers from '@/utils/reactQueryProvider'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar.jsx'
import Announcement from '@/components/Announcement.jsx'
import Footer from '@/components/Footer.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Buf\'s sex shop | Medellín | Servicios para webcams',
  description: 'Sex shop, envios discretos, a todo el pais, promociones, estudio fotográfico para webcams.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} box-border`}>
        <Providers>
          <header>
            <Announcement />
            <Navbar />
          </header>
          <section className='xs:mt-[100px] md:mt-[148px]'>
            {children}
          </section>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
