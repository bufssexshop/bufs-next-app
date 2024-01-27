'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Pagination from '@/components/Pagination'
import { camelCaseToNormal } from '@/helpers/strings'
import { useNavigation } from '@/context/navigationContext'
import ProductCard from '@/components/ProductCard'
import { useSearchParams } from 'next/navigation'
import { getData } from '@/api/fetchData'
import Loader from '@/components/Loader'
import Image from 'next/image'

const Products = ({ params }) => {
  const { subcategory: currentSubcategory } = params
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')
  const {
    currentPage, setPage,
    category, setCategory,
    subcategory, setSubcategory
  } = useNavigation()
  const [itemsPerPage, setItemsPerPage] = useState(10)

  useEffect(() => {
    if (currentCategory !== category) {
      setCategory(currentCategory)
    }

    if (currentSubcategory !== subcategory) {
      setSubcategory(currentSubcategory)
    }
  }, [currentCategory, category, setCategory, currentSubcategory, subcategory, setSubcategory])

  // order filter
  const [orderBy, setOrderBy] = useState('name')
  const [orderDirection, setOrderDirection] = useState('asc')

  const productsQuery = useQuery({
    queryKey: ['hydrate-users', category, currentSubcategory, currentPage, itemsPerPage],
    queryFn: () => getData(`productos/getProducts/${category}/${currentSubcategory}?page=${currentPage}&limit=${itemsPerPage}`),
    enabled: true,
    onSuccess: () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  })

  const { data, isLoading, isFetching, error } = productsQuery || {}

  if (isLoading || isFetching) {
    return (
      <div className='w-full h-96 xs:h-72 bg-white dark:bg-slate-800 flex justify-center items-center'>
        <Loader />
      </div>
    )
  }

  const handlePageChange = (newPage) => setPage(newPage)

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setPage(1)
    setItemsPerPage(newItemsPerPage)
  }

  const { products, totalPages } = data || []

  const handleOrderChange = (newOrderBy) => {
    if (newOrderBy === 'masVendido') return

    if (newOrderBy === orderBy) {
      setOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setOrderBy(newOrderBy)
      setOrderDirection(newOrderBy === 'price' ? 'asc' : 'desc')
    }
    setPage(1)
  }

  const orderType = {
    name: 'nombre',
    nameDesc: 'nombre',
    price: 'precio',
    priceDesc: 'precio',
    available: 'disponible'
  }

  const sortedProducts = [...products].sort((a, b) => {
    const type = orderType[orderBy]
    const aValue = a[type]
    const bValue = b[type]

    if (orderBy === 'price') {
      return aValue - bValue
    }

    if (orderBy === 'priceDesc') {
      return bValue - aValue
    }

    if (orderBy === 'name') {
      return orderDirection === 'asc'
        ? (bValue || '').localeCompare(aValue || '')
        : (aValue || '').localeCompare(bValue || '')
    }

    if (orderBy === 'nameDesc') {
      return orderDirection === 'asc'
        ? (aValue || '').localeCompare(bValue || '')
        : (bValue || '').localeCompare(aValue || '')
    }

    if (orderBy === 'available') {
      if (aValue && !bValue) return orderDirection === 'asc' ? 1 : -1
      if (!aValue && bValue) return orderDirection === 'asc' ? -1 : 1
      return 0
    }

    return 0
  })

  return (
    <main className='w-full box-border'>
      <section>
        {error && <p>Hubo un error, sorry</p>}

        {sortedProducts.length > 0 && (
          <div className='w-full'>
            <p className='w-full xs:text-center text-3xl text-slate-700 dark:text-slate-50 mb-10 xs:mb-7'>
              {camelCaseToNormal(currentSubcategory)}
            </p>

            <div className='flex items-center gap-4 mb-10'>
              <p className='text-slate-700 dark:text-slate-50 text-xl'>Ordenar por</p>
              <select
                value={orderBy}
                onChange={(e) => handleOrderChange(e.target.value)}
                className='px-2 py-1 rounded outline-none text-slate-500 bg-transparent'
              >
                <option value='masVendido' disabled>Más vendido</option>
                <option value='available'>Disponible</option>
                <option value='name'>Alfabeticamente A-Z</option>
                <option value='nameDesc'>Alfabeticamente Z-A</option>
                <option value='price'>Precio - menor a mayor</option>
                <option value='priceDesc'>Precio - mayor a menor</option>
              </select>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
              {sortedProducts
                .filter((product) => product.disponible)
                .map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
        )}

        {sortedProducts.length <= 0 && (
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

        {totalPages > 1 && (
          <Pagination
            initialPage={1}
            page={currentPage}
            total={totalPages}
            itemsPerPage={itemsPerPage}
            onChange={handlePageChange}
            onChangeItemsPerPage={handleItemsPerPageChange}
          />
        )}
      </section>
    </main>
  )
}

export default Products
