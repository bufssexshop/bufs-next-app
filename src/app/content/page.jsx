'use client'

import NoContent from '../../components/NoContent'
import PrivateContent from '../../components/PrivateContent'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Content = () => {
  const router = useRouter()
  const { isOpen, onOpenChange } = useDisclosure()
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      <Modal isOpen={!isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Contenido para adultos (+18)</ModalHeader>
              <ModalBody>
                <p>
                  ¿Ir a contenido?
                </p>
                <p>
                  Esta sección puede tener contenido explícito.
                  Si es mayor de edad, continúe.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={() => router.push('/')}>
                  Soy menor
                </Button>
                <Button
                  color='primary' onPress={() => {
                    onClose()
                    setShowContent(true)
                  }}
                >
                  Soy mayor
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {showContent
        ? (
          <NoContent />
          )
        : (
          <PrivateContent />
          )}
    </>
  )
}

export default Content
