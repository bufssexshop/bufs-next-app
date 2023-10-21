'use client'

import {
  TruckIcon, EyeSlashIcon, ShoppingCartIcon, SparklesIcon
} from '@heroicons/react/24/solid'

import React, { useState } from 'react'
import { getData } from '@/api/fetchData'
import { useQuery } from '@tanstack/react-query'
import Loader from '@/components/Loader'
import Image from 'next/image'
import { camelCaseToNormal } from '@/helpers/strings'
import useResponsive from '@/hooks/useResponsive'
import { Button } from '@nextui-org/react'

const ButtonCounter = ({ label, available, click }) => (
  <Button isIconOnly size='sm' color={available ? 'primary' : 'default'} variant='ghost' disabled={!available} onClick={click}>
    {label}
  </Button>
)

const ShowProductDetails = ({ details }) => {
  const sanitizedHTML = details
    .replace(/\r\n/g, '<br />')
    .replace(/<li>/g, '<span>&#8226; </span>')

  return <div className='dark:bg-slate-800 dark:text-slate-50' dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
}

const ProductDetails = ({ params }) => {
  const { id } = params
  const { isMobile } = useResponsive()
  const [count, setCount] = useState(1)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const productQuery = useQuery({
    queryKey: ['hydrate-users'],
    queryFn: () => getData(`productos/getProduct/${id}`),
    enabled: true,
    staleTime: 0
  })

  const handleAddItems = () => setCount((prev) => prev + 1)
  const handleRemovetems = () => setCount((prev) => prev > 1 ? prev - 1 : prev)

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const { data, isLoading, isFetching } = productQuery || {}

  if (!data || isLoading || isFetching) {
    return (
      <div className='w-full h-96 xs:h-72 bg-white dark:bg-slate-800 flex justify-center items-center'>
        <Loader />
      </div>
    )
  }

  const zoomAreaSize = 200

  const formatterPeso = new Intl.NumberFormat('es-CO', {
    currency: 'COP',
    minimumFractionDigits: 0
  })

  const productIsAvailable = data.disponible

  return (
    <section className='px-20 xs:px-10 flex flex-col gap-8'>
      <p className='text-4xl text-slate-500 dark:text-slate-50 xs:text-center'>Detalles</p>
      <section className='flex xs:flex-col gap-8'>
        <div
          className='relative w-[402px] xs:w-full h-[402px] xs:h-[250px] border bg-white border-slate-300 cursor-zoom-in dark:rounded-lg dark:truncate duration-500'
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={data?.image}
            alt={data?.nombre}
            quality={100}
            fill
            style={{
              objectFit: 'contain'
            }}
            className='img1'
          />
        </div>

        {(isHovering && !isMobile) && (
          <div
            className='absolute right-5 w-[450px] h-[450px] border border-slate-300'
            style={{
              backgroundImage: `url("${data?.image}")`,
              backgroundPosition: `-${
                  mousePosition.x * 0.9 - zoomAreaSize / 2
                }px -${mousePosition.y * 0.9 - zoomAreaSize / 2}px`,
              backgroundSize: '800px 800px',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}

        <div>
          {/* CATEGORY */}
          <p className='text-xs text-slate-500 dark:text-slate-50 font-bold'>
            Categoría:
            <span className='capitalize ml-1'>
              {data.categoria} /
            </span>
            <span className='ml-1 text-customPink dark:text-darkPink'>
              {camelCaseToNormal(data.subcategoria)}
            </span>
          </p>

          {/* NAME */}
          <p className='text-slate-700 dark:text-slate-50 font-semibold mt-1'>
            {data.nombre}
          </p>

          {/* CODE */}
          <p className='text-xs text-slate-700 dark:text-slate-50 mt-1'>
            Código: {data.codigo}
          </p>

          {data.promocion && (
            <div className='my-4 flex items-center gap-2 px-2 text-slate-50 rounded-md bg-customPink dark:bg-darkPink w-min'>
              <SparklesIcon class='h-5 w-5 text-slate-50' />
              <p>Promoción</p>
            </div>
          )}

          {/* PRICE */}
          {data.promocion
            ? (
              <div>
                <p className='text-xs text-slate-700 dark:text-slate-50'>
                  ANTES: $ <span className='line-through'>{formatterPeso.format(data.precio)}</span> COP
                </p>
                <p className='text-xl text-slate-700 dark:text-slate-50'>
                  AHORA: $ <span>{formatterPeso.format(data?.precio - data?.valorPromocion)} COP</span>
                </p>
              </div>
              )
            : (
              <p className='details-product-price-after dark:text-slate-50 mt-4'>$ {formatterPeso.format(data.precio)} COP</p>
              )}

          <section className='mt-8 flex gap-8 md:hidden'>
            <section className='flex items-center gap-4'>
              <ButtonCounter label='-' click={handleRemovetems} available={productIsAvailable} />
              <p className='text-slate-500 dark:text-slate-50'>{productIsAvailable ? count : 0}</p>
              <ButtonCounter label='+' click={handleAddItems} available={productIsAvailable} />
            </section>
            <Button color='primary' disabled={!productIsAvailable} icon={<ShoppingCartIcon className='h-6 w-6 text-slate-50' />} label='Agregar al carrito' />
          </section>

          {/* AVAILABLE */}
          <p className={`mt-5 text-sm ${productIsAvailable ? 'text-green-700 dark:text-darkPink' : 'text-red-600 dark:text-red-400'}`}>
            {productIsAvailable ? 'Disponible' : 'No disponible'}
          </p>

          {/* SEND */}
          <div className='mt-4 flex gap-3 items-center'>
            <TruckIcon className='h-6 w-6 text-green-700 dark:text-darkPink' />
            <p className='text-slate-700 dark:text-slate-50 text-sm'>Envíos a toda Colombia</p>
          </div>
          <div className='mt-2 flex gap-3 items-center'>
            <EyeSlashIcon className='h-6 w-6 text-green-700 dark:text-darkPink' />
            <p className='text-slate-700 dark:text-slate-50 text-sm'>Envios con total discreción (confidencialidad).</p>
          </div>

          <p className='mt-6 text-sm text-slate-500 dark:text-slate-50'>
            Todos los articulos se envian discretamente en un embalaje sencillo, sin marcar ninguna palabra sinonimo de "actividad sexual"
          </p>

          {/* BUTTONS DESKTOP */}
          <section className='mt-8 flex gap-8 xs:hidden'>
            <section className='flex items-center gap-4'>
              <ButtonCounter label='-' click={handleRemovetems} available={productIsAvailable} />
              <p className='text-slate-500 dark:text-slate-50'>{productIsAvailable ? count : 0}</p>
              <ButtonCounter label='+' click={handleAddItems} available={productIsAvailable} />
            </section>
            <Button color={productIsAvailable ? 'primary' : 'default'} radius='full' disabled={!productIsAvailable} startContent={<ShoppingCartIcon className='h-6 w-6 text-slate-50' />}>
              Agregar al carrito
            </Button>
          </section>
        </div>
      </section>

      <section>
        <ShowProductDetails details={data.detalles} />
      </section>
    </section>
  )
}

export default ProductDetails
