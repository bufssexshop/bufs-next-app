'use client'

import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'

const searchProducts = async (data) => {
  const { search, min, max } = data || {}
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/productos/${(min > 0 || max > 0) ? 'getAdvancedSearch' : 'getSearch'}`,
    {
      method: 'POST',
      body: JSON.stringify({
        typeSearch: 'forName',
        search,
        min,
        max
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  const res = await response.json()
  return res
}

const SearchProducts = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const priceMin = searchParams.get('min')
  const priceMax = searchParams.get('max')
  const [results, setResults] = useState([])

  const productsQuery = useQuery({
    queryKey: ['hydrate-users', search, priceMin, priceMax],
    queryFn: () => searchProducts({ search, min: priceMin, max: priceMax }),
    enabled: true,
    onSuccess: () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  })

  useEffect(() => {
    const res = productsQuery.data
    setResults(res)
  }, [productsQuery.data, search])

  return (
    <section className='min-h-[600px]'>
      <p className='text-3xl text-center mb-8'>Resultados de tu busqueda: {results?.length}</p>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {results
          ?.filter((product) => product.disponible)
          ?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </section>
  )
}

export default SearchProducts
