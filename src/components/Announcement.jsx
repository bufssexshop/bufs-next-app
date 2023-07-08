import React from 'react'

const Announcement = () => {
  const message1 = 'envío gratis'
  const message2 = 'a partir de $150.000'

  return (
    <section
      className='
      bg-customPink text-slate-50
      w-full h-9
      flex justify-center items-center
      xs:mt-[65px] md:mt-28
      xs:top-[65px] md:top-[112px]
      z-40
      '
      style={{
        position: 'sticky'
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
