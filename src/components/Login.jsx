'use client'

import React, { useEffect } from 'react'

import InputText from './InputText'
import { useForm } from 'react-hook-form'
import { AtSymbolIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { joiResolver } from '@hookform/resolvers/joi'
import { loginSchema } from '@/helpers/formSchemas'
import Actions from './Actions'
import Modal from './Modal'

const Login = ({ onClose, open, onSubmit }) => {
  const schema = loginSchema.messages({
    'any.required': 'Este campo es requerido',
    'string.empty': 'Este campo es requerido'
  })

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
                <InputText
                  id='email'
                  type='email'
                  value={email}
                  defaultValue=''
                  placeholder='Correo'
                  icon={<AtSymbolIcon />}
                  // {...register('email', { required: 'Ingrese un correo' })}
                  handleChange={(e) => {
                    clearErrors('email')
                    handleChange('email', e)
                  }}
                  error={errors?.email?.message}
                />

                <InputText
                  id='password'
                  type='password'
                  value={password}
                  defaultValue=''
                  placeholder='Contraseña'
                  icon={<LockClosedIcon />}
                  // {...register('password', { required: 'Ingrese una contraseña' })}
                  handleChange={(e) => {
                    clearErrors('password')
                    handleChange('password', e)
                  }}
                  error={errors?.password?.message}
                />

                <Actions
                  primary={{
                    variant: 'primary',
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
