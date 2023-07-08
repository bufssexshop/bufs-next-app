'use client'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

async function getUsers (url) {
  const res = await fetch(url)
  const users = (await res.json())
  return users
}

const Products = () => {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['hydrate-users'],
    queryFn: () => getUsers('https://jsonplaceholder.typicode.com/users')
  })

  console.log('xxx data: ', data)

  return (
    <main>
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
    </main>
  )
}

export default Products
