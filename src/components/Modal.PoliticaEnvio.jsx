import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader, Modal as NextModal } from '@nextui-org/react'

const ModalPoliticaEnvios = ({ size, isOpen, onClose, content }) => {
  return (
    <NextModal
      size={size}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>POLÍTICA DE ENVÍOS Y ENTREGA DE PRODUCTO</ModalHeader>
            <ModalBody>
              <p>
                Tenemos promesa de envío confidencial y en un empaque neutro que no evidencia el contenido.
                Entregaremos tu pedido en la dirección que registres en el formulario dispuesto para envíos durante el proceso de check out.
                Únicamente podremos realizar entregas en los departamentos y ciudades que se desplieguen en el menú.
                La dirección debe contener la nomenclatura exacta para realizar la entrega.
                Información que no corresponda al estándar de nomenclatura no podrá ser identificada ni tomada como una instrucción especial de entrega.
                Los horarios de entrega estarán sujetos a la capacidad logística de la empresa transportadora y a las condiciones de tránsito u orden público que permitan la circulación de los vehículos de transporte.
                De esta manera no es posible comprometer una hora exacta de entrega.
                Podrás monitorear el estado de tu envío directamente en el sitio web de la empresa de transporte asignada.
              </p>

              <p>
                La entrega en unidades o conjuntos residenciales no está permitido hacerlas directamente en la puerta del domicilio, de modo que los paquetes se entregarán en portería.
              </p>

              <p>
                Debes tener presente que podremos realizar un máximo de 3 intentos para la entrega sin costo.
                Posteriormente al tercer intento tendremos que realizar un nuevo cobro de envío.',
              </p>

              <p>
                La entrega de tu pedido se tomará como cumplida una vez la unidad es dejada en la dirección del destinatario, cesando la responsabilidad del transportador en la custodia de la misma.
                Se entiende como responsable de recibir la unidad, la persona mayor de edad que firme la guía en constancia de recibido, a quien le asiste la obligación mínima de cerciorarse que la
                unidad es entregada en buenas condiciones en cuanto a su empaque externo.
                Si esta persona nota alguna novedad deberá reportarla en la guía de entrega y de manera inmediata a nuestro equipo de servicio al cliente a través de la sección de Contáctanos.
                Es indispensable dejar registro fotográfico del estado en que llegó el empaque.
                Debes tener presente que si no queda registro de la novedad en el empaque en la guía, no será posible tramitar ninguna reclamación al respecto con la empresa transportadora.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </NextModal>
  )
}

export default ModalPoliticaEnvios
