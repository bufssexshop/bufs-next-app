'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const links = [
  {
    id: 'KljS9Pm7',
    label: 'Juguetes',
    route: '/products',
    options: [
      'TVs',
      'Laptops',
      'Smartphones'
    ]
  },
  {
    id: 'XizR5Ov2',
    label: 'Lenceria y disfraces',
    route: '/'
  },
  {
    id: 'GhNc3Wx4',
    label: 'Bondage',
    route: '/sales',
    options: [
      {
        label: 'aaa',
        subOptions: ['a1', 'a2', 'a3']
      },
      'tops',
      'dejas'
    ]
  },
  {
    id: 'YzMj0Ut9',
    label: 'Lubricantes',
    route: '/content'
  },
  {
    id: 'QweF8Nx6',
    label: 'Estimulantes sexuales',
    route: '/contact'
  },
  {
    id: 'JklI4As8',
    label: 'Sex academy',
    route: '/sexacademy',
    options: [
      {
        label: 'aaa',
        subOptions: [
          'Angeles y demonios',
          'Colegialas',
          'Complementos',
          'Conejas y animalitos',
          'Deportes',
          'Disfraces masculinos',
          'Enfermeras',
          'Marineras y piratas',
          'Militares',
          'Mucamas',
          'Personajes de fantasia',
          'Policias y ladronas',
          'Profesiones y oficios',
          'Superheroes'
        ]
      },
      {
        label: 'tops',
        subOptions: ['a1', 'a2', 'a3']
      }
    ]
  },
  {
    id: 'PloR2Gz5',
    label: 'Cuidado personal',
    route: '/cuidadopersonal'
  },
  {
    id: 'BhuM7Ty1',
    label: 'Novedades',
    route: '/novedades'
  },
  {
    id: 'RtyU9Vx3',
    label: 'Ofertas',
    route: '/ofertas'
  },
  {
    id: 'FdeN6Zc0',
    label: 'Webcams',
    route: '/webcams'
  },
  {
    id: 'MnbV5Qw1',
    label: 'Cuidado personal',
    route: '/cuidadopersonal'
  },
  {
    id: 'ZxcD3Fr9',
    label: 'Blog',
    route: '/blog'
  }
]

const SubMenu = () => {
  const [activeLink, setActiveLink] = useState(null)
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [activeOption, setActiveOption] = useState(null)

  const handleMouseEnter = (link) => {
    setActiveLink(link)
    setIsMouseOver(true)
  }

  const handleMouseLeave = () => {
    setActiveLink(null)
    setIsMouseOver(false)
    setActiveOption(null)
  }

  const handleOptionSelect = (option, label, hasOptions) => {
    if (label && option) setActiveOption(option)
    if (label && option === null) setActiveOption(option)
    if (isMouseOver && activeOption !== null && !hasOptions) {
      setActiveOption(null)
      handleMouseLeave()
    }
  }

  const renderOptions = (options) => {
    return options.map((option) => {
      if (typeof option === 'object') {
        const { label, subOptions } = option
        return (
          <div key={label} className='grid grid-cols-2 gap-4'>
            <li
              className={`${activeOption === option ? 'text-customPink' : 'text-slate-500'}
              px-4 py-2 text-left w-48 md:w-28 cursor-pointer bg-white flex justify-between items-center`}
              key={label}
              onClick={() => handleOptionSelect(option, label, true)}
            >
              {label}
              <ChevronRightIcon class='h-4 w-4' />
            </li>
            {activeOption === option && subOptions && subOptions.length > 0 && (
              <ul className='absolute left-full rounded shadow-lg'>
                {subOptions.map((subOption) => (
                  <li
                    className='px-4 py-2 text-left md:w-28 lg:w-52 text-xs cursor-pointer bg-white bl-1-solid'
                    key={subOption}
                    onClick={() => handleOptionSelect(subOption)}
                  >
                    {subOption}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      }
      return (
        <div key={option} className='bg-white grid grid-cols-2 gap-4'>
          <li
            className='px-4 py-2 text-left md:w-28 cursor-pointer'
            key={option}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </li>
        </div>
      )
    })
  }

  return (
    <section className='bg-white sx:flex flex-col md:flex-row box-border items-center justify-items-center'>
      <ul className='flex flex-row md:full-width'>
        {links.map(({ id, label, route, options }) => (
          <li
            key={id}
            onMouseEnter={() => handleMouseEnter(route)}
            className='text-slate-500 lg:m-2 text-center md:text-xs md:m-0.5 lg:text-lg'
          >
            <Link href={route}>{label}</Link>
            {activeLink === route && isMouseOver && options && (
              <div className='relative bg-white opacity-95'>
                <ul
                  className='absolute mt-2 rounded shadow-lg w-36 h-9 z-50 md:w-28'
                  onMouseEnter={() => handleMouseEnter(route)}
                  onMouseLeave={handleMouseLeave}
                >
                  {renderOptions(options)}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>

  )
}

export default SubMenu
