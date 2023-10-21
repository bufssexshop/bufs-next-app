import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

const modalWidths = {
  small: 'xs:w-80 sm:w-96',
  medium: 'w-5/12 py-6',
  large: 'w-8/12 py-8'
}

const Modal = ({
  icon,
  title,
  onClose,
  children,
  size = 'medium'
}) => {
  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <section className='z-50 fixed inset-0 flex items-center justify-center'>

      {/* Background black */}
      <div
        className='absolute inset-0 bg-black opacity-75 backdrop-filter backdrop-blur-sm'
        onClick={handleModalClick}
      />

      <div className={`
        rounded-lg z-10
        ${modalWidths[size]}`}
      >
        <div className='relative'>
          <XMarkIcon onClick={onClose} className='cursor-pointer absolute hover:bg-slate-200 hover:rounded-full right-2 top-2 h-6 w-6 text-gray-500 duration-300' />
        </div>
        <div className='bg-white dark:bg-zinc-900 rounded-lg p-4 flex flex-col items-center'>
          {icon && icon}
          <h1 className='text-xl font-bold text-slate-500 mb-4 flex flex-col items-center'>{title}</h1>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Modal
