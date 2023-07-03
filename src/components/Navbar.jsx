'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'
import Login from './Login'
import { usePathname } from 'next/navigation'

// ICONS
import {
  ShoppingCartIcon, Bars4Icon, XMarkIcon, UserCircleIcon,
  HomeIcon, ShoppingBagIcon, TagIcon, PhotoIcon, PhoneIcon
} from '@heroicons/react/24/solid'
import ClickAwayListener from './ClickAwayListener'
import IconButton from './IconButton'

// NAVBAR ITEMS
const links = [{
  id: 'iTyPHORO',
  label: 'Inicio',
  route: '/',
  icon: (color) => <HomeIcon className={`${color} h-6 w-6 text-gray-500`} />
}, {
  id: 'STumFIla',
  label: 'Productos',
  route: '/products',
  icon: (color) => <ShoppingBagIcon className={`${color} h-6 w-6 text-gray-500`} />
}, {
  id: 'oWAyBREm',
  label: 'Promociones',
  route: '/sales',
  icon: (color) => <TagIcon className={`${color} h-6 w-6 text-gray-500`} />
}, {
  id: 'IoNIciTY',
  label: 'Contenido',
  route: '/content',
  icon: (color) => <PhotoIcon className={`${color} h-6 w-6 text-gray-500`} />
}, {
  id: 'FACENtAt',
  label: 'Contacto',
  route: '/contact',
  icon: (color) => <PhoneIcon className={`${color} h-6 w-6 text-gray-500`} />
}]

const Navbar = () => {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const handleShowMenu = () => setShowMenu((prev) => !prev)
  const handleShowLogin = () => setShowLogin((prev) => !prev)

  useEffect(() => {
    if (showMenu) handleShowMenu()
    if (showLogin) handleShowLogin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <nav className={`z-10 box-border fixed top-0 w-full grid grid-flow-row-dense grid-cols-12 grid-rows-12  xs:${showMenu ? 'h-60' : 'h-16'} md:h-28 py-2 shadow-md bg-white`}>
      <section className='xs:col-span-8 xs:ml-8 md:col-span-3 flex  xs:justify-start md:justify-center items-center'>
        <Image
          src='/bufssexshoppink.png'
          width={100}
          height={100}
          alt='bufs sex shop representative logo'
          className='xs:w-[50px] w-[90px]'
        />
      </section>

      {/* Desktop menu items - links */}
      <section className='col-span-6 xs:hidden md:block'>
        <ul className='flex justify-around items-center h-full'>
          {links.map(({ label, route }) => (
            <li className={`${pathname === route ? 'text-customPink' : 'text-slate-500'} duration-0 hover:text-customPink hover:duration-500`} key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Mobile menu items - links */}
      <section className={`col-span-12 xs:${showMenu ? 'block' : 'hidden'} duration-500 md:hidden pl-10 py-2`}>
        <ClickAwayListener setValue={setShowMenu}>
          <div className='flex'>
            <ul className='w-4/5 flex-col justify-around items-center'>
              {links.map(({ id, label, route, icon }) => (
                <div key={id} className={`flex items-center gap-4 ${pathname === route ? 'text-customPink' : 'text-slate-500'}`}>
                  {icon(pathname === route ? 'text-pink-400' : 'text-slate-500')}
                  <li className='my-2' key={route}>
                    <Link href={route}>{label}</Link>
                  </li>
                </div>
              ))}
            </ul>
            <section className='flex flex-col items-start justify-end gap-4'>
              <IconButton>
                <ShoppingCartIcon class='h-8 w-8 text-gray-500' />
              </IconButton>
              <IconButton onClick={() => handleShowLogin()}>
                <UserCircleIcon class='h-8 w-8 text-gray-500' />
              </IconButton>
            </section>
          </div>
        </ClickAwayListener>
      </section>

      <section className='xs:hidden md:flex col-span-3 h-full justify-center items-center'>
        <div className='flex lg:w-1/2 items-center justify-around'>
          <ShoppingCartIcon class='h-6 w-6 text-gray-500' />
          <Button onClick={() => handleShowLogin()} label='Iniciar sesion' />
          {showLogin && <Login open={showLogin} />}
        </div>
      </section>

      {/* Only visible in mobile - menu icon */}
      <section className='xs:flex xs:mr-8 justify-end items-center md:hidden col-span-4 h-full'>
        {showMenu
          ? (<XMarkIcon onClick={handleShowMenu} class='h-9 w-9 text-gray-500' />)
          : (<Bars4Icon onClick={handleShowMenu} class='h-9 w-9 text-gray-500' />)}
      </section>
    </nav>
  )
}

export default Navbar
