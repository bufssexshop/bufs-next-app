'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '@/components/ProductCard'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Special_Elite as SpecialElite } from 'next/font/google'
import { imagesParagraphStyles, groupLabelsStyle } from '@/helpers/repetitiveStyles'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import AliceCarousel from 'react-alice-carousel'
import InputText from '@/components/InputText'
import { getData } from '@/api/fetchData'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import SearchFilters from '@/components/SearchFilters'

const images = {
  light: 'https://res.cloudinary.com/dsykiysl8/image/upload/v1691452375/backgrounds/pexels-bedbible-com-11393547_1920_cojbkd.jpg',
  dark: 'https://res.cloudinary.com/dsykiysl8/image/upload/v1691453329/backgrounds/pexels-alexander-krivitskiy-10970728_icokfm.jpg',
  yellowImage: 'https://res.cloudinary.com/dsykiysl8/image/upload/v1691900051/images/add5_a7cfxk.jpg',
  pinkImage: 'https://res.cloudinary.com/dsykiysl8/image/upload/v1691900049/images/add3_uwbjyz.jpg',
  purpleImage: 'https://res.cloudinary.com/dsykiysl8/image/upload/v1691900049/images/add4_mtssps.jpg',
  lenceryImage: 'https://res.cloudinary.com/dsykiysl8/image/upload/v1691900050/images/addone_kown2x.jpg',
  toysImage: 'https://res.cloudinary.com/dsykiysl8/image/upload/v1691900049/images/addtwo_bsofsd.jpg'
}

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 4 },
  1536: { items: 6 }
}

const specialElite = SpecialElite({ weight: '400', subsets: ['latin'] })

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(images.light)

  useEffect(() => {
    AOS.init()
    getBackgroundImage()
  }, [])

  const getBackgroundImage = () => {
    const mode = localStorage.getItem('theme')
    if (mode === 'dark') setBackgroundImage(images.dark)
    else setBackgroundImage(images.light)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('changeMode', getBackgroundImage)
      return () => {
        window.removeEventListener('changeMode', getBackgroundImage)
      }
    }
  }, [])

  const lingerieQuery = useQuery({
    queryKey: ['hydrate-lingerie'],
    queryFn: () => getData('productos/getProducts/lenceria?page=1&limit=10'),
    enabled: true
  })

  const { data: lingerieProducts } = lingerieQuery || {}

  const vibratorsQuery = useQuery({
    queryKey: ['hydrate-vibrators'],
    queryFn: () => getData('productos/getProducts/vibradores?page=1&limit=10'),
    enabled: true,
    onSuccess: () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  })

  const { data: vibratorsProducts } = vibratorsQuery || {}

  const sliderLingerieTtems = lingerieProducts?.products.map((product) => (
    <ProductCard key={product._id} product={product} />
  ))

  const sliderVibratorsTtems = vibratorsProducts?.products.map((product) => (
    <ProductCard key={product._id} product={product} />
  ))

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
          <div className='flex items-center'>
            <InputText
              className='dark:opacity-0'
              id='searchBar'
              placeholder='Buscar...'
              icon={<MagnifyingGlassIcon className='h-6 w-6 text-gray-500' />}
              error=''
            />
            <SearchFilters />
          </div>
        </section>
      </div>

      {/* ADDS */}
      <section className='md:mt-60 xs:mt-20 pb-28 md:px-28 flex flex-col overflow-hidden'>

        <div data-aos='fade-up' data-aos-duration='1000' className='w-full flex justify-center'>
          <p
            className='
              xs:w-3/4 lg:w-2/4 sm:w-full
            text-customPink dark:text-darkPink
              xs:text-3xl sm:text-6xl md:text-5xl 2xl:text-7xl
              text-center
            '
          >
            Placer sin límites: Productos eróticos para todas tus fantasías.
          </p>
        </div>

        {/* NUMBER 1 */}
        <section className='w-full flex xs:flex-col mt-32'>
          <div className='flex flex-col justify-center items-center xs:w-full lg:w-2/4 xs:text-center'>
            <p
              data-aos='fade-right'
              data-aos-duration='600'
              className='
                text-slate-500 dark:text-slate-50
                xs:text-3xl md:text-3xl xl:text-4xl 2xl:text-6xl
              '
            >
              Descubre tu lado más sensual:
              <span className='ml-2 text-customPink dark:text-darkPink'>
                explora nuestra colección íntima.
              </span>
            </p>
          </div>

          <div data-aos='fade-left' data-aos-duration='600' className='relative group xs:w-full lg:w-2/4 xs:mt-8'>
            <Link href='products/lenceria'>
              <Image
                src={images.lenceryImage}
                alt='adds one'
                width={900}
                height={900}
                priority
                className='md:rounded-lg'
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
        <article className='mt-20 w-full xs:ml-2'>
          <AliceCarousel responsive={responsive} mouseTracking items={sliderLingerieTtems} />
        </article>

        {/* NUMBER 2 */}
        <section className='xs:mt-20 lg:mt-52 w-full flex xs:flex-col'>
          <div data-aos='fade-right' data-aos-duration='600' className='relative group xs:w-full lg:w-2/4'>
            <Link href='products/vibradores'>
              <Image
                src={images.toysImage}
                alt='adds one'
                width={900}
                height={900}
                priority
                className='md:rounded-lg'
              />
              <div className='absolute px-4 rounded-lg flex justify-center items-center bottom-0 w-full h-full text-center bg-slate-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <p className='xs:text-xl text-6xl text-slate-800 dark:text-darkPink'>
                  Juguetes
                </p>
              </div>
            </Link>
          </div>

          <div data-aos='fade-left' data-aos-duration='600' className='flex flex-col justify-center items-center xs:w-full lg:w-2/4 xs:mt-8'>
            <p
              className='
                text-slate-500 dark:text-slate-50
                xs:text-center md:text-right xs:text-3xl md:text-3xl xl:text-4xl 2xl:text-6xl
                pl-5
              '
            >
              Descubre nuevas sensaciones:
              <span className='ml-2 text-customPink dark:text-darkPink'>
                Productos íntimos para todos los gustos.
              </span>
            </p>
          </div>
        </section>

        {/* VIBRATORS PRODUCTS */}
        <article className='mt-20 w-full xs:ml-2'>
          <AliceCarousel responsive={responsive} mouseTracking items={sliderVibratorsTtems} />
        </article>

        <div data-aos='fade-up' data-aos-duration='1000' className='w-full md:my-20 flex justify-center xs:my-10'>
          <p className='w-3/4 text-center text-customPink dark:text-darkPink xs:text-3xl md:text-5xl lg:text-5xl 2xl:text-7xl'>
            !Explora, juega y disfruta¡
          </p>
        </div>

        {/* JUMBOTRON OF 3 IMAGES */}
        <section className='w-full flex'>
          <div data-aos='fade-right' data-aos-duration='600' className='relative group'>
            <Image
              src={images.yellowImage}
              alt='adds one'
              width={900}
              height={900}
              priority
              className='md:rounded-l-lg'
            />
            <div className={imagesParagraphStyles}>
              <p className={groupLabelsStyle}>
                Intimidad & diversión
              </p>
            </div>
          </div>
          <div data-aos='fade-up' data-aos-duration='600' className='relative group'>
            <Image
              src={images.pinkImage}
              alt='adds one'
              width={900}
              height={900}
              priority
            />
            <div className={imagesParagraphStyles}>
              <p className={groupLabelsStyle}>
                Encuentra tu felicidad íntima
              </p>
            </div>
          </div>
          <div data-aos='fade-left' data-aos-duration='600' className='relative group'>
            <Image
              src={images.purpleImage}
              alt='adds one'
              width={900}
              height={900}
              priority
              className='md:rounded-r-lg'
            />
            <div
              className={imagesParagraphStyles}
            >
              <p className={groupLabelsStyle}>
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
