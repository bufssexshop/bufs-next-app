import Link from 'next/link'
import Image from 'next/image'
// import Button from './Button'
import { Button } from '@nextui-org/react'

import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const formatterPeso = new Intl.NumberFormat('es-CO', {
  currency: 'COP',
  minimumFractionDigits: 0
})

const ProductCard = ({ product }) => {
  const { disponible } = product

  return (
    <section
      key={product.id}
      className='relative xs:w-44 lg:w-56 xs: min-h-[310px] lg:min-h-[310px] hover:shadow-cardShadow duration-300 border dark:rounded-md bg-white'
    >
      <Link href='/products/[subcategory]/[id]' as={`/products/${product.subcategoria}/${product._id}`}>
        <div className='flex justify-center min-h-[180px] max-h-[180px] w-full'>
          <Image
            src={product.image}
            alt={product.nombre}
            quality={100}
            width={180}
            height={180}
            style={{
              objectFit: 'contain'
            }}
          />
        </div>
      </Link>
      <div className='border-t border-slate-200 mt-2 text-center'>
        <Link href='/products/[subcategory]/[id]' as={`/products/${product.subcategoria}/${product._id}`}>
          <p className='px-[10px] pt-[10px] uppercase xs:text-xs text-xs text-slate-500 leading-tight'>{product.nombre}</p>
        </Link>
        <div className='absolute w-full bottom-0 px-[10px] pb-[8px] text-xs text-slate-600 font-bold'>
          {product?.promocion
            ? (
              <p>
                $ <span className='line-through'>{formatterPeso.format(product?.precio)}</span> / {formatterPeso.format(product?.precio - product?.valorPromocion)} COP
              </p>
              )
            : (
              <p className=''>
                {product?.precio && `$ ${formatterPeso.format(product?.precio)} COP`}
              </p>
              )}
          <Button
            fullWidth
            radius='full'
            onClick={() => undefined}
            startContent={<ShoppingCartIcon className='h-5 w-5 text-slate-50' />}
            isDisabled={!product.disponible}
            color='primary'
            size='sm'
          >
            {disponible ? 'Agregar al carrito' : '!AGOTADO!'}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProductCard
