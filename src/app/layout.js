import './globals.css'
import Providers from '@/utils/reactQueryProvider'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar.jsx'
import Announcement from '@/components/Announcement.jsx'
import Footer from '@/components/Footer.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bufs sex shop',
  description: 'Sex shop, envios discretos, a todo el pais, promociones, estudio fotográfico para webcams.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} box-border`}>
        <Providers>
          <header>
            <Navbar />
          </header>
          <Announcement />
          <section className='col-span-6 xs:hidden md:block'>
            <ul className='flex flex-col md:flex-row justify-around items-center h-full'>
              <SubMenu />
            </ul>
          </section>
          <section className=''>
            {children}
          </section>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
