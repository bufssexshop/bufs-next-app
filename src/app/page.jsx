'use client'
import { Special_Elite as SpecialElite } from 'next/font/google'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import useResponsive from '@/hooks/useResponsive'
import InputText from '@/components/InputText'

const specialElite = SpecialElite({ weight: '400', subsets: ['latin'] })

const Home = () => {
  const { isMobile } = useResponsive()

  const backgroundMobile = 'url(https://res.cloudinary.com/dsykiysl8/image/upload/v1687658465/backgrounds/background1_ke0jnm.jpg)'
  const backgroundDesktop = 'url(https://res.cloudinary.com/dsykiysl8/image/upload/v1687661299/backgrounds/pexels-bedbible-com-11393547_be6ui4.jpg)'

  return (
    <>
      <div
        className='
        h-screen
        flex justify-center
        xs:bg-cover md:object-scale-down
      '
        style={{
          backgroundImage: isMobile ? backgroundMobile : backgroundDesktop,
          backgroundPosition: 'top'
        }}
      >
        <section className='mt-28 flex flex-col items-center gap-2'>
          <h1 className={`${specialElite.className} uppercase text-slate-500 xs:text-3xl md:text-5xl`}>buf's sex shop</h1>
          <InputText
            opacity
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
