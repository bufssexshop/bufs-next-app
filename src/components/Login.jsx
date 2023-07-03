'use client'
import React, { useState, useEffect } from 'react'
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import Modal from './Modal'
import InputText from './InputText'

const Login = ({ open }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(open)
  }, [open])

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      {isModalOpen &&
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title='Iniciar sesion'
          size='large'
          firstButton={{
            label: 'Aceptar'
          }}
          secondButton={{
            label: 'Cancelar'
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
              icon={<LockClosedIcon />}
            />
          </div>
        </Modal>}
    </div>
  )
}

export default Login