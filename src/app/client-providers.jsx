'use client'

import { SnackbarProvider } from 'notistack'
import Providers from '@/utils/reactQueryProvider'
import { NextUIProvider } from '@nextui-org/react'

const ClientProviders = ({ children }) => {
  console.log('ClientProviders')

  return (
    <NextUIProvider>
      <SnackbarProvider maxSnack={3}>
        <Providers>
          {children}
        </Providers>
      </SnackbarProvider>
    </NextUIProvider>
  )
}

export default ClientProviders
