'use client'

import {
  TruckIcon, EyeSlashIcon, ShoppingCartIcon, SparklesIcon
} from '@heroicons/react/24/solid'

import React, { useState } from 'react'
import { getData } from '@/api/fetchData'
import { useQuery } from '@tanstack/react-query'
import Loader from '@/components/Loader'
import Button from '@/components/Button'
import Image from 'next/image'
import { camelCaseToNormal } from '@/helpers/strings'

const ShowProductDetails = ({ details }) => {
  const sanitizedHTML = details
    .replace(/\r\n/g, '<br />')
    .replace(/<li>/g, '<span>&#8226; </span>')

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
}

const ProductDetails = ({ params }) => {
  const { id } = params
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

  if (!data || isLoading || isFetching) return <Loader />

  const zoomAreaSize = 200

  const formatterPeso = new Intl.NumberFormat('es-CO', {
    currency: 'COP',
    minimumFractionDigits: 0
  })

  return (
    <section className='px-20 py-14 flex flex-col gap-8'>
      <section className='flex gap-8'>
        <div
          className='relative w-[402px] h-[402px] border border-slate-300 cursor-zoom-in'
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

        {isHovering && (
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
          <p className='text-xs text-slate-500 font-bold'>
            Categoría:
            <span className='capitalize ml-1'>
              {data.categoria} /
            </span>
            <span className='ml-1 text-customPink'>
              {camelCaseToNormal(data.subcategoria)}
            </span>
          </p>

          {/* NAME */}
          <p className='text-slate-700 font-semibold mt-1'>
            {data.nombre}
          </p>

          {/* CODE */}
          <p className='text-xs text-slate-700 mt-1'>
            Código: {data.codigo}
          </p>

          {data.promocion && (
            <div className='my-4 flex items-center gap-2 px-2 text-slate-50 rounded-md bg-customPink w-min'>
              <SparklesIcon class='h-5 w-5 text-slate-50' />
              <p>Promoción</p>
            </div>
          )}

          {/* PRICE */}
          {data.promocion
            ? (
              <div className=''>
                <p className='text-xs text-slate-700'>
                  ANTES: $ <span className='line-through'>{formatterPeso.format(data.precio)}</span> COP
                </p>
                <p className='text-xl text-slate-700'>
                  AHORA: $ <span>{formatterPeso.format(data?.precio - data?.valorPromocion)} COP</span>
                </p>
              </div>
              )
            : (
              <p className='details-product-price-after'>{formatterPeso.format(data.precio)} COP</p>
              )}

          {/* AVAILABLE */}
          <p className={`mt-5 text-sm ${data.disponible ? 'text-green-700' : 'text-red-600'}`}>
            {data.disponible ? 'Disponible' : 'No disponible'}
          </p>

          {/* SEND */}
          <div className='mt-4 flex gap-3 items-center'>
            <TruckIcon className='h-6 w-6 text-green-700' />
            <p className='text-slate-700 text-sm'>Envíos a toda Colombia</p>
          </div>
          <div className='mt-2 flex gap-3 items-center'>
            <EyeSlashIcon className='h-6 w-6 text-green-700' />
            <p className='text-slate-700 text-sm'>Envios con total discreción (confidencialidad).</p>
          </div>

          <p className='mt-6 text-sm text-slate-500'>
            Todos los articulos se envian discretamente en un embalaje sencillo, sin marcar ninguna palabra sinonimo de "actividad sexual"
          </p>

          {/* BUTTONS */}
          <section className='mt-8 flex gap-8'>
            <section className='flex items-center gap-4'>
              <Button disabled={!data.disponible} className='p-2' onClick={handleRemovetems} label='-' variant='secondary' />
              <p>{data.disponible ? count : 0}</p>
              <Button disabled={!data.disponible} onClick={handleAddItems} label='+' variant='secondary' />
            </section>
            <Button disabled={!data.disponible} icon={<ShoppingCartIcon className='h-6 w-6 text-slate-50' />} label='Agregar al carrito' />
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