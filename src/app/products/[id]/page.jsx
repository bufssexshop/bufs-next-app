const ProductDetails = ({ params }) => {
  const { id } = params

  return (
    <section>
      <h1>Detalles del producto {id}</h1>
    </section>
  )
}

export default ProductDetails
