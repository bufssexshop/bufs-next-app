'use client'

import Image from 'next/image'
import { Special_Elite as SpecialElite } from 'next/font/google'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { keepServerAlive } from '@/helpers/keepServerAlive'
import useResponsive from '@/hooks/useResponsive'
import InputText from '@/components/InputText'
import { useEffect } from 'react'

const specialElite = SpecialElite({ weight: '400', subsets: ['latin'] })

const Home = () => {
  const { isMobile } = useResponsive()

  useEffect(() => {
    const intervalTime = 5 * 60 * 1000

    const interval = setInterval(() => {
      keepServerAlive(intervalTime)
    }, intervalTime)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const backgroundMobile = 'https://res.cloudinary.com/dsykiysl8/image/upload/v1687658465/backgrounds/background1_ke0jnm.jpg'
  const backgroundDesktop = 'https://res.cloudinary.com/dsykiysl8/image/upload/v1691452375/backgrounds/pexels-bedbible-com-11393547_1920_cojbkd.jpg'
  const backgroundDesktopDarkMode = 'https://res.cloudinary.com/dsykiysl8/image/upload/v1691453329/backgrounds/pexels-alexander-krivitskiy-10970728_icokfm.jpg'

  return (
    <>
      <div className='relative h-screen'>
        <Image
          src={isMobile ? backgroundMobile : backgroundDesktopDarkMode || backgroundDesktop || backgroundDesktopDarkMode}
          alt='Background'
          fill
          style={{
            objectFit: 'cover'
          }}
          quality={100}
        />
        <section className='relative pt-28 flex flex-col items-center gap-2'>
          <h1 className={`${specialElite.className} uppercase text-slate-500 dark:text-slate-50 xs:text-3xl md:text-5xl`}>buf's sex shop</h1>
          <InputText
            className='dark:opacity-0'
            id='searchBar'
            placeholder='Buscar...'
            icon={<MagnifyingGlassIcon className='h-6 w-6 text-gray-500' />}
            error=''
          />
        </section>
      </div>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
      <h1>Hola Mundo!</h1>
    </>
  )
}

export default Home
