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
    <main className='w-full box-border'>
      {/* This section is a product menu */}
      <section className='px-52 py-8'>
        {error && <p className='xs:w-full'>Hubo un error, sorry</p>}
        {(isLoading || isFetching) && <p>Loading...</p>}
        {data
          ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                gap: 20
              }}
            >
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
