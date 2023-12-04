import Image from 'next/image'
import NoContentImage from '@/SVG/NoContent.svg'

const NoContent = () => {
  return (
    <section className='flex items-center sm:flex-row flex-col-reverse'>
      {/* Div de los párrafos */}
      <div className='sm:w-1/2 px-8 py-2 md:p-14'>
        <p className='text-customPink text-base font-bold my-3 md:px-6'>¡Lo sentimos!</p>
        <p className='text-2xl my-3 md:text-4xl md:px-6'>En Construcción</p>
        <p className='text-justify my-4 md:px-6'>
          Actualmente, esta sección del sitio web se encuentra en desarrollo.
          Lamentamos los inconvenientes y te invitamos a que navegues por otras secciones.
          Esta parte estará lista muy pronto.
        </p>
      </div>
      {/* Contenedor de NoContent */}
      <div className='md:w-1/2'>
        <div className='h-full flex items-center justify-center px-8 py-4 md:p-6 lg:pl-0'>
          <Image className='sm:w-72 md:w-full' src={NoContentImage} alt='building section' width={800} height={800} />
        </div>
      </div>
    </section>
  )
}

export default NoContent
