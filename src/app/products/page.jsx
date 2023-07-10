'use client'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '@/api/fetchData'

const Products = () => {
  const method = 'POST'
  const body = {
    subcategoria: 'lenceria'
  }

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
      <section className='px-52 py-8'>
        {error && <p>Hubo un error, sorry</p>}
        {(isLoading || isFetching) && <p>Loading...</p>}
        {data
          ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gap: 20
              }}
            >
              {data.map((user) => (
                <div
                  key={user.id}
                  style={{ border: '1px solid #ccc', textAlign: 'center' }}
                >
                  <Image
                    src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                    alt={user.name}
                    width={180}
                    height={180}
                  />
                  <h3>{user.name}</h3>
                </div>
              ))}
            </div>
            )
          : null}

      </section>
    </main>
  )
}

export default Products
