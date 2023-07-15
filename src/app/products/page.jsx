'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchData } from '@/api/fetchData'
import ProductCard from '@/components/ProductCard'

const method = 'POST'
const body = {
  subcategoria: 'vibradores'
}

const Products = () => {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['hydrate-users'],
    queryFn: () => fetchData('productos/getProducts', method, body)
  })

  return (
    <main className='w-full'>
      {/* This section is a product menu */}
      <section className='flex justify-center items-center h-14 bg-slate-200 z-30 sticky top-[148px]'>
        <h1>Here menu</h1>
      </section>
      <section className='px-20 py-14'>
        {error && <p>Hubo un error, sorry</p>}
        {(isLoading || isFetching) && <p>Loading...</p>}
        {data
          ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
              {data.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            )
          : null}
      </section>
    </main>
  )
}

export default Products
