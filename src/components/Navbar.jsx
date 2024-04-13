'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

// ICONS
import {
  ShoppingCartIcon, Bars4Icon, XMarkIcon,
  HomeIcon, TagIcon, PhotoIcon, PhoneIcon, MagnifyingGlassIcon
} from '@heroicons/react/24/solid'
import ClickAwayListener from './ClickAwayListener'
import IconButton from './IconButton'
import { Switch } from '@nextui-org/react'
import { SunIcon } from '@/SVG/sun'
import { MoonIcon } from '@/SVG/moon'
import AdvancedSearch from './AdvancedSearch'

// NAVBAR ITEMS
const links = [{
  id: 'iTyPHORO',
  label: 'Inicio',
  route: '/',
  icon: (color) => <HomeIcon className={`${color} h-6 w-6 text-gray-500`} />
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
  const [openAdvancedSearch, setOpenAdvancedSearch] = useState(false)
  const [theme, setTheme] = useState('')

  const closeAdvancedSearch = () => setOpenAdvancedSearch(false)

  const handleShowMenu = () => setShowMenu((prev) => !prev)

  const handleChangeTheme = () => setTheme((prev) => prev === 'light' ? 'dark' : 'light')

  const getThemeFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const mode = localStorage.getItem('theme')
      setTheme(mode || 'dark')
    }
  }

  useEffect(() => {
    getThemeFromLocalStorage()
  }, [])

  useEffect(() => {
    if (showMenu) handleShowMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    const element = document.documentElement
    if (theme === 'dark') element.classList.add(theme)
    if (theme === 'light') element.classList.remove('dark')

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', theme)
      window.dispatchEvent(new Event('changeMode'))
    }
  }, [theme])

  return (
    <>
      <nav className={`z-50 box-border fixed top-9 w-full grid grid-flow-row-dense grid-cols-12 grid-rows-12  xs:${showMenu ? 'h-60' : 'h-16'} md:h-28 py-2 shadow-sm dark:shadow-slate-600 bg-white dark:bg-slate-700 duration-700`}>
        <section className='xs:col-span-8 xs:ml-8 md:col-span-2 lg:col-span-3 flex xs:justify-start md:justify-center items-center'>
          <Image
            src='/bufssexshoppink.png'
            priority
            width={100}
            height={100}
            alt='bufs sex shop representative logo'
            className='xs:w-[50px] w-[90px] dark:brightness-0 dark:invert duration-500'
          />
        </section>

        {/* Desktop menu items - links */}
        <section className='col-span-6 xs:hidden md:block'>
          <ul className='flex justify-center gap-24 sm:gap-12 items-center h-full'>
            {links.map(({ label, route }) => (
              <li className={`${pathname === route ? 'text-customPink' : theme === 'light' ? 'text-slate-500' : 'text-slate-50'} duration-0 hover:text-customPink dark:hover:text-customPink hover:duration-500`} key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}

            {/* SEARCH ICON */}
            <div className='cursor-pointer'>
              <MagnifyingGlassIcon onClick={() => setOpenAdvancedSearch((prev) => !prev)} className={`h-5 w-5 ${theme === 'light' ? 'text-slate-500' : 'text-slate-50'}`} />
            </div>
          </ul>
        </section>

        {/* Mobile menu items - links */}
        <section className={`col-span-12 xs:${showMenu ? 'block' : 'hidden'} duration-500 md:hidden pl-10 py-2`}>
          <ClickAwayListener setValue={setShowMenu}>
            <div className='flex'>
              <ul className='w-4/5 flex-col justify-around items-center'>
                {links.map(({ id, label, route, icon }) => (
                  <div key={id} className='flex items-center gap-4'>
                    {icon(pathname === route ? 'text-pink-400' : theme === 'light' ? 'text-slate-500' : 'text-slate-50')}
                    <li className={`${pathname === route ? 'text-customPink' : theme === 'light' ? 'text-slate-500' : 'text-slate-50'} my-2`} key={route}>
                      <Link href={route}>
                        {label}
                      </Link>
                    </li>
                  </div>
                ))}

                <div className='flex items-center gap-2 mt-4'>
                  <Switch
                    size='lg'
                    color='default'
                    endContent={<MoonIcon />}
                    startContent={<SunIcon />}
                    onChange={handleChangeTheme}
                    isSelected={theme === 'dark'}
                  />
                </div>
              </ul>
              <section className='flex flex-col items-start justify-end gap-4'>
                <IconButton>
                  <ShoppingCartIcon className='h-8 w-8 text-gray-500 dark:text-slate-50' />
                </IconButton>
              </section>
            </div>
          </ClickAwayListener>
        </section>

        <section className='xs:hidden md:flex lg:col-span-3 md:col-span-4 md:gap-3 h-full justify-center items-center'>
          <ShoppingCartIcon className='h-6 w-6 text-gray-500 dark:text-slate-50 md:mr-6' />

          <Switch
            size='lg'
            color='default'
            endContent={<MoonIcon />}
            startContent={<SunIcon />}
            onChange={handleChangeTheme}
            isSelected={theme === 'dark'}
          />

        </section>

        {/* Only visible in mobile - menu icon */}
        <section className='xs:flex xs:mr-8 justify-end items-center md:hidden col-span-4 h-full'>
          {showMenu
            ? (<XMarkIcon onClick={handleShowMenu} className='h-9 w-9 text-gray-500 dark:text-slate-50' />)
            : (<Bars4Icon onClick={handleShowMenu} className='h-9 w-9 text-gray-500 dark:text-slate-50' />)}
        </section>
      </nav>
      <AdvancedSearch isOpen={openAdvancedSearch} onOpenChange={closeAdvancedSearch} />
    </>
  )
}

export default Navbar
