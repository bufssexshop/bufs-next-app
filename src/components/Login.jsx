'use client'

import React, { useEffect, useState } from 'react'

import Modal from './Modal'
import Actions from './Actions'
import { MailIcon } from '@/SVG/mail'
import { Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { loginSchema } from '@/helpers/formSchemas'
import { EyeFilledIcon } from '../SVG/EyeFilledIcon'
import { joiResolver } from '@hookform/resolvers/joi'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { EyeSlashFilledIcon } from '../SVG/EyeSlashFilledIcon'
import { LockIcon } from '@/SVG/Lock'

const Login = ({ onClose, open, onSubmit }) => {
  const schema = loginSchema.messages({
    'any.required': 'Este campo es requerido',
    'string.empty': 'Este campo es requerido'
  })

  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  const {
    watch,
    setValue,
    unregister,
    register,
    handleSubmit,
    clearErrors,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(schema),
    mode: 'onChange'
  })

  useEffect(() => {
    register('email')
    register('password')

    if (open) clearErrors()

    return () => {
      unregister('email')
      unregister('password')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const email = watch('email')
  const password = watch('password')

  const handleChange = (name, e) => setValue(name, e.target.value)

  const submit = (data) => onSubmit.mutate(data)

  return (
    open
      ? (
        <Modal
          onClose={onClose}
          title='Iniciar sesion'
          size='small'
          icon={<UserCircleIcon className='h-20 w-20 text-slate-500' />}
        >
          <>
            <form onSubmit={handleSubmit(submit)}>
              <div className='flex flex-col gap-4 pt-2 items-center'>
                <Input
                  type='email'
                  value={email}
                  placeholder='Usuario'
                  labelPlacement='outside'
                  onChange={(e) => {
                    clearErrors('email')
                    handleChange('email', e)
                  }}
                  startContent={
                    <MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  error={errors?.email?.message}
                />

                <Input
                  placeholder='Contraseña'
                  value={password}
                  endContent={
                    <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
                      {isVisible
                        ? (<EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />)
                        : (<EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />)}
                    </button>
                  }
                  type={isVisible ? 'text' : 'password'}
                  onChange={(e) => {
                    clearErrors('password')
                    handleChange('password', e)
                  }}
                  startContent={
                    <LockIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  className='max-w-xs'
                  error={errors?.password?.message}
                />

                <Actions
                  primary={{
                    color: 'primary',
                    label: 'Iniciar sesion',
                    type: 'submit'
                  }}
                  secondary={{
                    label: 'Cancelar',
                    onClick: onClose
                  }}
                />
              </div>
            </form>
          </>
        </Modal>
        )
      : null
  )
}

export default Login
