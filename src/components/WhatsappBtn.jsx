'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WhatsappGreenLogo from '../../public/Digital_Glyph_Green.svg'
import WhatsappWhiteLogo from '../../public/Digital_Glyph_White.svg'

const WhatsappButton = () => {
  const [hover, setHover] = useState(false)
  const customMessage = '?text=Hola,%20tengo%20interés%20en%20algunos%20productos.'
  const phoneNumber = '3044580143'

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className='fixed bottom-10 right-10 bg-slate-50 hover:bg-green-500 w-14 hover:w-[250px] hover:gap-3 h-14 duration-200 rounded-full flex justify-center items-center'
      href={`https://wa.me/${phoneNumber}/${customMessage}`}
      target='_blank'
    >
      <Image src={hover ? WhatsappWhiteLogo.src : WhatsappGreenLogo.src} alt='whatsapp' width={30} height={30} />
      <p className={`${hover ? 'block text-white font-bold' : 'hidden'}`}>Chat on Whatsapp</p>
    </Link>
  )
}

export default WhatsappButton
