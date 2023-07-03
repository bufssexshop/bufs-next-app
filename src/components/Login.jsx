'use client'
import React, { useState, useEffect } from 'react'
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import Modal from './Modal'
import InputText from './InputText'

const Login = ({ open }) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(open)
  }, [open])

  const closeModal = () => setShowModal(false)

  return (
    <div>
      {showModal &&
        <Modal
          isOpen={showModal}
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
