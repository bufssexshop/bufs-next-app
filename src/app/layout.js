import './globals.css'
import 'aos/dist/aos.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar.jsx'
import Providers from '@/utils/reactQueryProvider'
import Announcement from '@/components/Announcement.jsx'
import Footer from '@/components/Footer.jsx'
import Submenu from '@/components/SubMenu'

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
            <Submenu />
          </header>
          <section className='mt-[196px] xs:mt-[148px] dark:bg-slate-800 duration-700'>
            {children}
          </section>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
