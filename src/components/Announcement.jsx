import React from 'react'

const Announcement = () => {
  const message1 = 'envío gratis'
  const message2 = 'a partir de $150.000'

  return (
    <section
      className='
      bg-customPink dark:bg-darkPink text-slate-50
      w-full h-9
      flex justify-center items-center
      mt-0 top-0
      z-50
      '
      style={{
        position: 'fixed'
      }}
    >
      <span className='uppercase mr-1 font-bold'>
        {message1}
      </span>
      <p>
        {message2}
      </p>
    </section>
  )
}

export default Announcement
