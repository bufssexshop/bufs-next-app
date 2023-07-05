'use client'
import React, { useState } from 'react'
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import Modal from './Modal'
import InputText from './InputText'

const Login = () => {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => setShowModal(false)

  return (
    <section>
      {showModal &&
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          title='Iniciar sesion'
          size='large'
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
              icon={<LockClosedIcon />}
            />
          </div>
        </Modal>}
    </section>
  )
}

export default Login
