'use client'

import { SnackbarProvider } from 'notistack'
import Providers from '@/utils/reactQueryProvider'
import { NextUIProvider } from '@nextui-org/react'
import { NavigationProvider } from '@/context/navigationContext'

const ClientProviders = ({ children }) => {
  console.log('ClientProviders')

  return (
    <NextUIProvider>
      <SnackbarProvider maxSnack={3}>
        <Providers>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </Providers>
      </SnackbarProvider>
    </NextUIProvider>
  )
}

export default ClientProviders
