'use client'

import { useEffect, useState } from 'react'
import { Special_Elite as SpecialElite } from 'next/font/google'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { keepServerAlive } from '@/helpers/keepServerAlive'
import InputText from '@/components/InputText'
import Image from 'next/image'
import Link from 'next/link'

const backgroundImages = {
  light: 'https://res.cloudinary.com/dsykiysl8/image/upload/v1691452375/backgrounds/pexels-bedbible-com-11393547_1920_cojbkd.jpg',
  dark: 'https://res.cloudinary.com/dsykiysl8/image/upload/v1691453329/backgrounds/pexels-alexander-krivitskiy-10970728_icokfm.jpg'
}

const specialElite = SpecialElite({ weight: '400', subsets: ['latin'] })

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages.light)

  useEffect(() => {
    const intervalTime = 5 * 60 * 1000

    const interval = setInterval(() => {
      keepServerAlive(intervalTime)
    }, intervalTime)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const getBackgroundImage = () => {
    const mode = localStorage.getItem('theme')
    if (mode === 'dark') setBackgroundImage(backgroundImages.dark)
    else setBackgroundImage(backgroundImages.light)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('changeMode', getBackgroundImage)
      return () => {
        window.removeEventListener('changeMode', getBackgroundImage)
      }
    }
  }, [])

  return (
    <>
      <div className='relative h-screen'>
        <Image
          src={backgroundImage}
          alt='Background'
          fill
          style={{
            objectFit: 'cover'
          }}
          quality={100}
          priority
          className='shadow-md'
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

      {/* ADDS */}
      <section className='md:mt-60 xs:mt-20 pb-28 md:px-28 flex flex-col gap-36'>

        <div className='w-full flex justify-center'>
          <p className='w-2/4 xs:w-3/4 text-center text-customPink dark:text-darkPink text-7xl xs:text-3xl'>
            Placer sin límites: Productos eróticos para todas tus fantasías.
          </p>
        </div>

        {/* NUMBER 1 */}
        <section className='w-full flex xs:flex-col'>
          <div className='flex flex-col justify-center items-center md:w-2/4 xs:text-center'>
            <p className='text-slate-500 dark:text-slate-50 text-6xl xs:text-3xl'>
              Descubre tu lado más sensual:
              <span className='ml-2 text-customPink dark:text-darkPink'>
                explora nuestra colección íntima.
              </span>
            </p>
          </div>
          <div className='relative group md:w-2/4 xs:mt-8'>
            <Link href='products/lenceria'>
              <Image
                src='/addone.jpg'
                alt='adds one'
                width={900}
                height={900}
                priority
                className='rounded-lg'
              />
              <div className='absolute px-4 rounded-lg flex justify-center items-center bottom-0 w-full h-full text-center bg-slate-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <p className='xs:text-xl text-6xl text-slate-800 dark:text-darkPink'>
                  Lencería
                </p>
              </div>
            </Link>
          </div>
        </section>
        {/* LENCERY PRODUCTS */}
        <section className='w-full bg-black h-80'>
          <p>Holi</p>
        </section>

        {/* NUMBER 2 */}
        <section className='mt-52 w-full flex xs:flex-col'>
          <div className='relative group md:w-2/4'>
            <Image
              src='/addtwo.jpg'
              alt='adds one'
              width={900}
              height={900}
              priority
              className='rounded-lg'
            />
            <div className='absolute px-4 rounded-lg flex justify-center items-center bottom-0 w-full h-full text-center bg-slate-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <p className='xs:text-xl text-6xl text-slate-800 dark:text-darkPink'>
                Juguetes
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center md:w-2/4 xs:mt-8'>
            <p className='text-slate-500 dark:text-slate-50 text-6xl xs:text-3xl md:text-right xs:text-center pl-5'>
              Descubre nuevas sensaciones:
              <span className='ml-2 text-customPink dark:text-darkPink'>
                Productos íntimos para todos los gustos.
              </span>
            </p>
          </div>
        </section>
        {/* HERE SHOULD BE SOME PRODUCTS LENCERY */}

        <div className='w-full my-20 flex justify-center'>
          <p className='w-3/4 text-center text-customPink text-7xl xs:text-3xl'>!Explora, juega y disfruta¡</p>
        </div>

        {/* JUMBOTRON OF 3 IMAGES */}
        <section className='w-full flex'>
          <div className='relative group'>
            <Image
              src='/add5.jpg'
              alt='adds one'
              width={900}
              height={900}
              priority
              className='rounded-l-lg'
            />
            <div className='absolute px-4 rounded-b-lg flex flex-col justify-center items-center bottom-0 w-full h-1/3 text-center bg-slate-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <p className='xs:text-xl text-6xl text-slate-700 dark:text-darkPink'>
                Intimidad & diversión
              </p>
            </div>
          </div>
          <div className='relative group'>
            <Image
              src='/add3.jpg'
              alt='adds one'
              width={900}
              height={900}
              priority
            />
            <div className='absolute px-4 rounded-b-lg flex justify-center items-center bottom-0 w-full h-1/3 text-center bg-slate-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <p className='xs:text-xl text-6xl text-slate-700 dark:text-darkPink'>
                Encuentra tu felicidad íntima
              </p>
            </div>
          </div>
          <div className='relative group'>
            <Image
              src='/add4.jpg'
              alt='adds one'
              width={900}
              height={900}
              priority
              className='rounded-r-lg'
            />
            <div className='absolute px-4 rounded-b-lg flex justify-center items-center bottom-0 w-full h-1/3 text-center bg-slate-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <p className='xs:text-xl text-6xl text-slate-700 dark:text-darkPink'>
                Explora tus deseos
              </p>
            </div>
          </div>
        </section>

      </section>
    </>
  )
}

export default Home
