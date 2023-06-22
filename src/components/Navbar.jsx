'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ShoppingCartIcon, Bars4Icon } from '@heroicons/react/24/solid'
import Button from './Button'

const links = [{
  label: 'Inicio',
  route: '/'
}, {
  label: 'Productos',
  route: '/products'
}, {
  label: 'Promociones',
  route: '/sales'
}, {
  label: 'Contenido',
  route: '/content'
}, {
  label: 'Contacto',
  route: '/contact'
}]

const Navbar = () => {
  const pathname = usePathname()
  console.log('xxx pathname: ', pathname)

  return (
    <nav className='fixed top-0 w-full grid grid-flow-row-dense grid-cols-12 grid-rows-12  xs:h-16 sm:h-28 shadow-md bg-white'>
      <section className='xs:col-span-8 xs:ml-8 md:col-span-3 flex  xs:justify-start md:justify-center items-center h-full'>
        <Image
          src='/bufssexshoppink.png'
          width={100}
          height={100}
          alt='bufs sex shop representative logo'
          className='xs:w-[50px] w-[90px]'
        />
      </section>
      <section className='col-span-6 xs:hidden md:block'>
        <ul className='flex justify-around items-center h-full'>
          {links.map(({ label, route }) => (
            <li className={`${pathname === route ? 'text-pink' : 'text-slate-500'} duration-0 hover:text-pink hover:duration-500`} key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className='xs:hidden md:flex col-span-3 h-full justify-center items-center'>
        <div className='flex lg:w-1/2 items-center justify-around'>
          <ShoppingCartIcon class='h-6 w-6 text-gray-500' />
          <Button onClick={undefined} label='Iniciar sesion' />
        </div>
      </section>
      <section className='xs:flex xs:mr-8 justify-end items-center md:hidden col-span-4 h-full'>
        <Bars4Icon class='h-9 w-9 text-gray-500' />
      </section>
    </nav>
  )
}

export default Navbar
