'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ChevronRightIcon, Bars3Icon, XMarkIcon, ChevronDownIcon
} from '@heroicons/react/24/solid'
import { submenuItems } from '@/helpers/submenuItems'

const Submenu = () => {
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
      console.log(`select: ${option}`)
      setActiveOption(null)
      handleMouseLeave()
    }
  }

  const renderOptions = (options, route) => {
    return options.map((option) => {
      if (Object.prototype.hasOwnProperty.call(option, 'subOptions')) {
        const { label, subOptions } = option
        return (
          <div key={label} className='md:grid md:grid-cols-2 md:gap-4 w-full'>
            <li
              className={
                `md:ml-0 xs:w-36 xs:py-1 text-left md:w-28 text-sm md:p-1 flex items-center
                cursor-pointer bl-1-solid  xs:pl-1 justify-between lg:text-base
                ${activeOption === option ? 'text-customPink' : 'text-slate-500'}`
              }
              key={label}
              onClick={() => handleOptionSelect(option, label, true)}
              onMouseEnter={() => handleOptionSelect(option, label, true)}
            >
              {label}
              <ChevronRightIcon className='h-4 w-4' />
            </li>
            {activeOption === option && subOptions && subOptions.length > 0 && (
              <ul className='absolute left-full rounded xs:top-0 bg-white xs:h-28 xs:overflow-y-auto'>
                {subOptions.map((subOption) => (
                  <li
                    className='
                    xs:ml-1 md:ml-0 xs:w-36 xs:py-2 text-left md:w-28 text-sm md:p-1
                    cursor-pointer bl-1-solid xs:pl-2 flex justify-between lg:text-sm lg:w-36'
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
        <div key={option.label} className='md:grid md:grid-cols-2 md:gap-4 xs:my-2 w-full'>
          <li
            className={
              `md:ml-0 xs:w-36 xs:py-1 text-left md:w-28 text-sm md:p-1
              cursor-pointer bl-1-solid  xs:pl-1 flex justify-between lg:text-base
              ${activeOption === option ? 'text-customPink' : 'text-slate-500'}`
            }
            key={option}
            onClick={() => {
              handleMouseEnter(route)
              handleOptionSelect(option)
            }}
          >
            <Link href={`/products/${option.route}`}>{option.label}</Link>
          </li>
        </div>
      )
    })
  }

  return (
    <div className='z-40 fixed bg-white py-2 top-[148px] xs:items-start flex md:items-center w-full lg:px-4 justify-between shadow-md'>
      <section className='xs:hidden flex box-border w-full'>
        <ul className='w-full flex justify-center gap-12'>
          {submenuItems.map(({ id, label, category, options }) => (
            <li
              key={id}
              onMouseEnter={() => handleMouseEnter(category)}
              className='text-slate-500 text-center text-xs p-1 rounded-sm lg:text-base flex items-center'
            >
              <Link href={category}>{label}</Link>
              <ChevronDownIcon className='text-slate-500 ml-1 h-4 w-4' />
              {activeLink === category && isMouseOver && (
                <div className='absolute top-full xs:w-32 md:w-28 lg:w-32'>
                  <ul
                    className='bg-white'
                    onMouseEnter={() => handleMouseEnter(category)}
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
          className={`${menuMobile ? 'hidden' : 'h-8 w-8 text-slate-500'}`}
          onClick={() => setMenuMobile(true)}
        />
        <XMarkIcon
          className={`${menuMobile ? 'h-8 w-8 text-customPink' : 'hidden'} relative z-10`}
          onClick={() => setMenuMobile(false)}
        />
        {menuMobile && (
          <section className='bg-white absolute top-0 left-0 w-40 mt-8 ml-1'>
            <ul className='flex flex-col'>
              {submenuItems.map(({ id, label, category, options }) => (
                <li
                  key={id}
                  onClick={() => setActiveLinkMobile(category)}
                  className='text-slate-500 text-left text-sm my-1 lg:text-lg w-40 p-1'
                >
                  <p
                    onClick={() => handleOption(label)}
                    className={`${options ? 'flex justify-between' : 'flex flex-start'}`}
                  >
                    {label}
                    {options && <ChevronRightIcon className='h-4 w-4' />}
                  </p>
                  {activeLinkMobile === category && options && (
                    <div className='relative bg-white opacity-95 md:mt-4 hover-duration-500'>
                      <ul
                        className='mt-2 rounded w-36 z-50'
                        onClick={() => handleMouseEnter(category)}
                      >
                        {renderOptions(options, category)}
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

export default Submenu
