'use client'
import React from 'react'
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import InputText from './InputText'

const Modal = ({
  isOpen,
  onClose
}) => {
  return (
    <section>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50 opacity-90'>
          <div className='absolute inset-0 bg-black'>""</div>
          <div className='bg-white p-8 rounded-lg z-10'>
            <h2 className='text-xl font-bold text-slate-500 mb-4 flex flex-col items-center'>Log in</h2>
            <InputText
              opacity
              id='email'
              placeholder='Email'
              error=''
              icon={<AtSymbolIcon />}

            />
            <InputText
              opacity
              id='password'
              placeholder='password'
              error=''
              icon={<LockClosedIcon />}
            />
            <button
              className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mt-4 rounded'
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Modal
