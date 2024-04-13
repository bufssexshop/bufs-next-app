'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Input } from '@nextui-org/react'

const AdvancedSearch = ({ isOpen, onOpenChange }) => {
  const router = useRouter()
  const [advancedSearch, setAdvancedSearch] = useState({})

  const executeSearch = (close) => {
    close()
    router.push(`/products/search?search=${advancedSearch.name}&min=${advancedSearch?.price?.min || 0}&max=${advancedSearch?.price?.max || 0}`)
  }

  const handleKeyEnter = (e, close) => {
    if (advancedSearch.name && advancedSearch.name !== '' && e.key === 'Enter') executeSearch(close)
  }

  const handleSearch = (close) => {
    if (advancedSearch.name !== '') executeSearch(close)
  }

  useEffect(() => {
    return () => {
      setAdvancedSearch({})
    }
  }, [])

  return (
    <Modal
      isOpen={isOpen}
      size='2xl'
      onOpenChange={onOpenChange}
      placement='top-center'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Busqueda avanzada</ModalHeader>
            <ModalBody
              onKeyDown={(e) => handleKeyEnter(e, onClose)}
            >
              <Input
                autoFocus
                label='Buscar'
                placeholder='¿Qué estas buscando?'
                variant='bordered'
                onChange={(e) => setAdvancedSearch((prev) => ({ ...prev, name: e.target.value }))}
              />

              <div className='flex justify-between gap-4'>
                <Input
                  label='Precio - min'
                  placeholder='Minimo'
                  variant='bordered'
                  type='number'
                  value={advancedSearch?.price?.min}
                  onChange={(e) => setAdvancedSearch((prev) => ({ ...prev, price: { ...prev.price, min: e.target.value } }))}
                />

                <Input
                  label='Precio - max'
                  placeholder='Máximo'
                  variant='bordered'
                  type='number'
                  value={advancedSearch?.price?.max}
                  onChange={(e) => setAdvancedSearch((prev) => ({ ...prev, price: { ...prev.price, max: e.target.value } }))}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='flat' onPress={onClose}>
                Cerrar
              </Button>
              <Button
                color='primary'
                onPress={() => {
                  handleSearch(onClose)
                }}
              >
                Buscar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default AdvancedSearch
