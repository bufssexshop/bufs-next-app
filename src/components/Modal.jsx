'use client'
import React from 'react'
import ClickAwayListener from './ClickAwayListener'

const modalWidths = {
  small: 'w-72 py-4 px-2',
  medium: 'w-80 p-6',
  large: 'w-3/12 p-8'
}

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  firstButton,
  secondButton,
  size
}) => {
  return (
    <section>
      {isOpen && (
        <ClickAwayListener setValue={onClose}>
          <div className='fixed inset-0 flex items-center justify-center z-90'>
            <div className='absolute inset-0 bg-black opacity-75'>'</div>
            <div className={`
              bg-white rounded-lg z-10
              ${modalWidths[size]}`}
            >
              <div className='bg-white rounded-lg z-10'>
                <h2 className='text-xl font-bold text-slate-500 mb-4 flex flex-col items-center'>{title}</h2>
                {children}
                <hr className='border-t my-4' />
                <div className='flex justify-end'>
                  {firstButton && (
                    <button
                      className='bg-customPink hover:opacity-90 text-white px-4 py-2 rounded mx-1'
                      onClick={firstButton}
                    >
                      {firstButton.label}
                    </button>
                  )}
                  {secondButton && (
                    <button
                      className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mx-1'
                      onClick={onClose}
                    >
                      {secondButton.label}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ClickAwayListener>
      )}
    </section>
  )
}

export default Modal
