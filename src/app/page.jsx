'use client'
import { Special_Elite as SpecialElite } from 'next/font/google'
import useResponsive from '@/hooks/useResponsive'
import InputText from '@/components/InputText'

const specialElite = SpecialElite({ weight: '400', subsets: ['latin'] })

import { AtSymbolIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

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
        <section className='mt-28 text-center'>
          <h1 className={`${specialElite.className} uppercase text-slate-500 xs:text-3xl md:text-5xl`}>buf's sex shop</h1>
          <InputText
            placeholder='Buscar'
            opacity={75}
            fullWidth
            icon={<MagnifyingGlassIcon class='h-6 w-6 mr-4 text-gray-500'/>}
          />
        </section>
      </div>
      <h1>Hola Mundo!</h1>
    </>
  )
}

export default Home
