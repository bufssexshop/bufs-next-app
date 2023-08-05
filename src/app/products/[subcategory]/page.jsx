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
      <div className='w-full h-96 flex justify-center items-center'>
        <Loader />
      </div>
    )
  }

  return (
    <main className='w-full box-border'>
      <section className='px-20 py-14'>
        {error && <p>Hubo un error, sorry</p>}

        {data.length > 0 && (
          <div>
            <p className='text-3xl text-slate-700 mb-14'>
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
              src='https://res.cloudinary.com/dsykiysl8/image/upload/v1691273033/images/no-results_dw3ljr.jpg'
              alt='No products'
              width={400}
              height={400}
            />
            <p className='text-slate-700 text-2xl'>Esta sección aún no tiene productos, lo sentimos.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Products
