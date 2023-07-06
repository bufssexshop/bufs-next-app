'use client'
import React from 'react'
import Button from './Button'

const modalWidths = {
  small: 'w-4/12 py-4 px-2',
  medium: 'w-5/12 p-6',
  large: 'w-6/12 p-8'
}

const Modal = ({
  // isOpen,
  onClose,
  children,
  title,
  secondaryButton,
  size = 'medium'
}) => {
  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <section className='fixed inset-0 flex items-center justify-center'>

      {/* Background black */}
      <div
        className='absolute inset-0 bg-black opacity-75 backdrop-filter backdrop-blur-sm'
        onClick={handleModalClick}
      />

      <div className={`
        bg-white rounded-lg z-10
        ${modalWidths[size]}`}
      >
        <div className='bg-white rounded-lg z-10'>
          <h1 className='text-xl font-bold text-slate-500 mb-4 flex flex-col items-center'>{title}</h1>
          {children}
          <hr className='border-t my-4' />
          <div className='flex justify-end gap-3'>
            <Button
              variant='secondary'
              onClick={onClose}
              label='Cancelar'
            />
            {secondaryButton && (
              <Button
                {...secondaryButton}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modal
