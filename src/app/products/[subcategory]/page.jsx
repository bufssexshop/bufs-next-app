'use client'

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { camelCaseToNormal } from '@/helpers/strings'
import ProductCard from '@/components/ProductCard'
import { getData } from '@/api/fetchData'
import Loader from '@/components/Loader'
import Image from 'next/image'

const Products = ({ params }) => {
  const { subcategory } = params

  const productsQuery = useQuery({
    queryKey: ['hydrate-users'],
    queryFn: () => getData(`productos/getProducts/${subcategory}`),
    enabled: true
  })

  useEffect(() => {
    productsQuery.refetch()
  }, [subcategory])

  const { data, isLoading, isFetching, error } = productsQuery || {}

  if (isLoading || isFetching) {
    return (
      <div className='w-full h-96 xs:h-72 bg-white dark:bg-slate-800 flex justify-center items-center'>
        <Loader />
      </div>
    )
  }

  return (
    <main className='w-full box-border dark:bg-slate-800'>
      <section className='py-14 xs:py-4 px-20'>
        {error && <p>Hubo un error, sorry</p>}

        {data.length > 0 && (
          <div className='w-full'>
            <p className='w-full xs:text-center text-3xl text-slate-700 dark:text-slate-50 mb-14 xs:mb-7'>
              {camelCaseToNormal(subcategory)}
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
              {data.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        )}

        {data.length <= 0 && (
          <div className='flex flex-col justify-center items-center gap-4'>
            <Image
              src='https://res.cloudinary.com/dsykiysl8/image/upload/v1691291047/images/no-products_r91w9f.png'
              alt='No products'
              width={400}
              height={400}
              className='xs:w-[100%]'
            />
            <p className='text-slate-700 dark:text-slate-50 text-2xl xs:text-sm xs:text-center mt-[-250px] xs:mt-[-130px]'>Esta sección aún no tiene productos, lo sentimos.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Products
