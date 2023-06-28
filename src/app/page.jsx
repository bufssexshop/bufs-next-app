'use client'
import { Special_Elite as SpecialElite } from 'next/font/google'
import useResponsive from '@/hooks/useResponsive'
import InputWithIcon from '@/components/InputWithIcon'

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
        <section className='mt-28 text-center'>
          <h1 className={`${specialElite.className} uppercase text-slate-500 xs:text-3xl md:text-5xl`}>buf's sex shop</h1>
          <InputWithIcon
            label="Hola"
            placeholder="mundo"
            opacity={60}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
              </svg>
            }
            fullWidth={true}
          />
        </section>
      </div>
      <h1>Hola Mundo!</h1>
    </>
  )
}

export default Home
