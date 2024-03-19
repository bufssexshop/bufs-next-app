'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import ModalPoliticaEnvio from './Modal.PoliticaEnvio'
import ModalPrivacyPolicies from './Modal.PrivacyPolicies'

const upIcon = <ChevronUpIcon className='xs:block xs:mb-8 md:hidden h-6 w-6 text-gray-500 dark:text-slate-50' />
const downIcon = <ChevronDownIcon className='xs:block md:hidden h-6 w-6 text-gray-500 dark:text-slate-50' />

// INFORMATION ITEMS
const informationItems = [
  {
    label: '¿Quiénes Somos?',
    route: '#'
  },
  {
    label: 'Políticas de cambio y garantías',
    route: '#'
  },
  {
    label: 'Política de envío',
    route: '#',
    modal: 'shippingPolicies'
  },
  {
    label: 'Política de privacidad',
    route: '#',
    modal: 'privacyPolicies'
  }
]

// HELP ITEMS
const helpLinks = [
  {
    label: 'Preguntas frecuentes',
    route: '#'
  },
  {
    label: '¿Cómo comprar?',
    route: '#'
  },
  {
    label: 'Contáctanos',
    route: '#'
  }
]

const Footer = () => {
  const [informationOpen, setInformationOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [socialMediaOpen, setSocialMediaOpen] = useState(false)

  const [openModal, setOpenModal] = useState({ modal: '', open: false })

  const toggleInformation = () => {
    setInformationOpen(!informationOpen)
    setHelpOpen(false)
    setSocialMediaOpen(false)
  }

  const toggleHelp = () => {
    setHelpOpen(!helpOpen)
    setInformationOpen(false)
    setSocialMediaOpen(false)
  }

  const toggleSocialMedia = () => {
    setSocialMediaOpen(!socialMediaOpen)
    setInformationOpen(false)
    setHelpOpen(false)
  }

  return (
    <footer className='w-full h-96 py-20 xs:py-10 grid grid-cols-1 md:grid-cols-4 xs:divide-y dark:divide-slate-600 dark:bg-slate-700'>
      {/* LOGO SECTION */}
      <section className='flex justify-center items-start xs:mb-10'>
        <Image
          src='/bufssexshoppink.png'
          priority
          width={120}
          height={120}
          alt='Bufs sex shop logo'
          className='dark:brightness-0 dark:invert duration-500 xs:w-[100px]'
        />
      </section>

      {/* INFORMATION SECTION */}
      <section className='text-slate-500 xs:p-6 dark:bg-slate-700'>
        <div
          className='xs:flex justify-center xs:gap-x-2 cursor-pointer'
          onClick={toggleInformation}
        >
          <p className='xs:w-full text-customPink font-bold xs:uppercase md:pb-8'>Información</p>
          {informationOpen ? upIcon : downIcon}
        </div>
        <div className={`flex flex-col gap-y-2 xs:${informationOpen ? 'flex' : 'hidden'} dark:text-slate-50`}>
          {informationItems.map(({ label, route, modal }) => (
            <p className='cursor-pointer' key={route} onClick={() => setOpenModal({ open: true, modal })}>
              {label}
            </p>
          ))}
        </div>
      </section>

      {/* HELP SECTION */}
      <section className='text-slate-500 xs:p-6 dark:bg-slate-700'>
        <div
          className='xs:flex justify-center xs:gap-x-2 cursor-pointer'
          onClick={toggleHelp}
        >
          <p className='xs:w-full text-customPink font-bold xs:uppercase md:pb-8'>Ayuda</p>
          {helpOpen ? upIcon : downIcon}
        </div>
        <div className={`xs:w-4/5 flex flex-col gap-y-2 xs:${helpOpen ? 'flex' : 'hidden'} dark:text-slate-50`}>
          {helpLinks.map(({ label, route }) => (
            <Link key={route} href={route}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* SOCIAL MEDIA SECTION */}
      <section className='xs:p-6 dark:bg-slate-700'>
        <div
          className='xs:flex justify-center xs:gap-x-2 cursor-pointe'
          onClick={toggleSocialMedia}
        >
          <p className='xs:w-full text-customPink font-bold xs:uppercase md:pb-8'>Síguenos en nuestras redes</p>
          {socialMediaOpen ? upIcon : downIcon}
        </div>
        <div className={`flex gap-x-2 xs:justify-center xs:${socialMediaOpen ? 'flex' : 'hidden'}`}>
          <Link href='https://facebook.com'>
            <svg xmlns='http://www.w3.org/2000/svg' height='2em' viewBox='0 0 448 512'>
              <path
                fill='#FF7BAC'
                d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z'
              />
            </svg>
          </Link>
          <Link href='https://instagram.com/bufssexshop'>
            <svg xmlns='http://www.w3.org/2000/svg' height='2em' viewBox='0 0 448 512'>
              <path
                fill='#FF7BAC'
                d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z'
              />
            </svg>
          </Link>
        </div>
      </section>
      <ModalPoliticaEnvio
        size='3xl'
        isOpen={openModal.modal === 'shippingPolicies'}
        onClose={
          () => setOpenModal({ })
        }
      />
      <ModalPrivacyPolicies
        size='4xl'
        isOpen={openModal.modal === 'privacyPolicies'}
        onClose={
          () => setOpenModal({ })
        }
      />
    </footer>
  )
}

export default Footer
