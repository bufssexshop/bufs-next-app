'use client'
import React from 'react'
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import Modal from './Modal'
import InputText from './InputText'

const Login = ({ onClose, open }) => {
  return (
    open
      ? (
        <Modal
          onClose={onClose}
          title='Iniciar sesion'
          size='small'
          secondaryButton={{
            variant: 'primary',
            label: 'Iniciar sesion'
          }}
        >
          <div>
            <div className='mb-2'>
              <InputText
                id='email'
                placeholder='Correo'
                error=''
                icon={<AtSymbolIcon />}
              />
            </div>
            <InputText
              id='password'
              placeholder='Contraseña'
              error=''
              type='password'
              icon={<LockClosedIcon />}
            />
          </div>
        </Modal>
        )
      : null
  )
}

export default Login
