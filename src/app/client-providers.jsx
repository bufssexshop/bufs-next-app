'use client'

import { SnackbarProvider } from 'notistack'
import Providers from '@/utils/reactQueryProvider'

const ClientProviders = ({ children }) => {
  console.log('ClientProviders')

  return (
    <SnackbarProvider maxSnack={3}>
      <Providers>
        {children}
      </Providers>
    </SnackbarProvider>
  )
}

export default ClientProviders
