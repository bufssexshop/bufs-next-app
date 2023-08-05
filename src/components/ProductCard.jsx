import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

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
      className='relative w-56 min-h-[305px] hover:shadow-cardShadow duration-300 border'
    >
      <Link href='/products/[subcategory]/[id]' as={`/products/${product.subcategoria}/${product._id}`}>
        <div className='flex justify-center min-h-[180px] max-h-[180px] w-full'>
          <Image
            src={product.image}
            alt={product.name}
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
          <p className='px-[10px] pt-[10px] uppercase text-sm text-slate-500 leading-tight'>{product.nombre}</p>
        </Link>
        <div className='absolute w-full bottom-0 px-[10px] pb-[10px] text-xs text-slate-600 font-bold'>
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
            label={disponible ? 'Agregar al carrito' : '!AGOTADO!'}
            size='small'
            icon={<ShoppingCartIcon className='h-5 w-5 text-slate-50' />}
            fullWidth
            className='mt-1'
            disabled={!product.disponible}
            onClick={undefined}
          />
        </div>
      </div>
    </section>
  )
}

export default ProductCard
