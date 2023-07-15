'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

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
    id: 'ZxcD3Fr9',
    label: 'Blog',
    route: '/blog'
  }
]

const SubMenu = () => {
  const [activeLink, setActiveLink] = useState(null)
  const [activeLinkMobile, setActiveLinkMobile] = useState(null)
  const [isMouseOver, setIsMouseOver] = useState(true)
  const [activeOption, setActiveOption] = useState(null)
  const [menuMobile, setMenuMobile] = useState(false)

  const handleMouseEnter = (link) => {
    setActiveLink(link)
    setIsMouseOver(true)
  }

  const handleOption = (route) => {
    setActiveLinkMobile(route)
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

  const renderOptions = (options, route) => {
    return options.map((option) => {
      if (typeof option === 'object') {
        const { label, subOptions } = option
        return (
          <div key={label} className='md:grid md:grid-cols-2 md:gap-4'>
            <li
              className={
                `className='md:ml-0 xs:w-36 xs:py-2 xs:m text-left xs:text-[15px] md:w-32 lg:w-32 md:text-[16px] md:p-2
                text-xs cursor-pointer bg-slate-200 bl-1-solid  xs:pl-2 flex justify-between
                ${activeOption === option ? 'text-customPink' : 'text-slate-500'}`
              }
              key={label}
              onClick={() => handleOptionSelect(option, label, true)}
            >
              {label}
              <ChevronRightIcon className='h-4 w-4' />
            </li>
            {activeOption === option && subOptions && subOptions.length > 0 && (
              <ul className='absolute left-full rounded shadow-lg'>
                {subOptions.map((subOption) => (
                  <li
                    className='
                    text-left md:w-28 lg:w-36 cursor-pointer bg-slate-200 bl-1-solid xs:text-[14px]
                    md:w-28 lg:w-40 lg:text-base md:p-1 xs:ml-1 md:text-sm'
                    key={subOption}
                    onClick={() => {
                      handleOptionSelect(subOption)
                      handleMouseEnter(route)
                    }}
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
        <div key={option} className='bg-slate-200 md:grid md:grid-cols-2 md:gap-4 xs:my-2'>
          <li
            className='xs:ml-2 xs:w-36 md:ml-0 xs:py-2 xs:m text-left xs:text-[14px]
              md:w-28 lg:w-32 md:text-[15px] md:p-2
              text-xs cursor-pointer bg-slate-200 bl-1-solid'
            key={option}
            onClick={() => {
              handleMouseEnter(route)
              handleOptionSelect(option)
            }}
          >
            {option}
          </li>
        </div>
      )
    })
  }

  return (
    <div className='xs:items-start md:items-center w-full md:justify-items-center md:items-start lg:px-4'>
      <section className='xs:hidden bg-slate-200 sx:flex flex-col md:flex-row box-border items-center w-full justify-items-center'>
        <ul className='flex flex-row md:full-width justify-between'>
          {links.map(({ id, label, route, options }) => (
            <li
              key={id}
              onMouseEnter={() => handleMouseEnter(route)}
              className={`
                text-slate-500 text-center md:text-xs md:text-base md:p-1 rounded-sm lg:text-lg lg:ml-3
                ${activeLink && activeLink === route ? 'bg-slate-300' : 'bg-slate-200'}
              `}
            >
              <Link href={route}>{label}</Link>
              {activeLink === route && isMouseOver && options && (
                <div className='relative bg-slate-200 opacity-95'>
                  <ul
                    className='absolute mt-4 rounded shadow-lg w-36 h-9 z-50 md:w-32 left-0 justify-items-start'
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

      <div className='relative md:hidden xs:mt-3 xs:ml-1' onTouchStart={() => handleMouseLeave()}>
        <Bars3Icon
          className={`${menuMobile ? 'hidden' : 'h-7 w-7 text-slate-500'}`}
          onClick={() => setMenuMobile(true)}
        />
        <XMarkIcon
          className={`${menuMobile ? 'h-7 w-7 text-customPink' : 'hidden'} relative z-10`}
          onClick={() => setMenuMobile(false)}
        />
        {menuMobile && (
          <section className='bg-slate-200 absolute top-0 left-0 w-40 mt-8 ml-1 opacity-90'>
            <ul className='flex flex-col'>
              {links.map(({ id, label, route, options }) => (
                <li
                  key={id}
                  onClick={() => setActiveLinkMobile(route)}
                  className='text-slate-500 text-left text-sm my-1 lg:text-lg w-40 p-1'
                >
                  <p
                    onClick={() => handleOption(label)}
                    className={`${options ? 'flex justify-between' : 'flex flex-start'}`}
                  >
                    {label}
                    {options && <ChevronRightIcon className='h-4 w-4' />}
                  </p>
                  {activeLinkMobile === route && options && (
                    <div className='relative bg-slate-200 opacity-95 md:mt-4'>
                      <ul
                        className='mt-2 rounded w-36 h-9 z-50'
                        onClick={() => handleMouseEnter(route)}
                      >
                        {renderOptions(options, route)}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>)}
      </div>
    </div>

  )
}

export default SubMenu
