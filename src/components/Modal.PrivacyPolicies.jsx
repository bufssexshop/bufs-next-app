import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader, Modal as NextModal } from '@nextui-org/react'

const ModalPrivacyPolicies = ({ size, isOpen, onClose, content }) => {
  return (
    <NextModal
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior='inside'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1 uppercase'>Política de tratamiento de datos personales y privacidad</ModalHeader>
            <ModalBody>
              <p className='font-bold'>I. CONSIDERACIONES GENERALES</p>
              <p>
                El artículo 15 de la Constitución de la República de Colombia consagra el derecho de cualquier persona de conocer, actualizar y
                rectificar los datos personales que existan sobre ella en banco de datos o archivos de entidades públicas o privadas. Igualmente,
                ordena a quienes tienen datos personales de terceros, respetar los derechos y garantías previstas en la Constitución cuando se recolecta,
                trata y circula esa clase de información.
              </p>

              <p>
                El presente manual tiene por objeto el cumplimiento de las disposiciones legales, constitucionales y jurisprudenciales concernientes al
                desarrollo del derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar la información que se haya recogido
                sobre ellas en bases de datos o archivos relativos al artículo 15 de la Constitución Política, así como el derecho a la
                información consagrado en el artículo 20 de la misma.
              </p>

              <p>
                En términos generales, el presente manual establece las políticas y los procedimientos a través de los cuales el titular de los datos personales
                puede hacer efectivos sus derechos relacionados con el tratamiento de sus datos y a su vez, el tratamiento que el responsable debe darle a los
                datos de terceros, así como los mecanismos para instar el cumplimiento de los deberes en cabeza del responsable del tratamiento. Así mismo,
                se dan algunas definiciones relativas a términos necesarios para la correcta aplicación de las mencionadas políticas, junto con los principios
                sobre los que se fundamenta la recolección y tratamiento de los datos personales.
              </p>

              <p>
                La entrega de tu pedido se tomará como cumplida una vez la unidad es dejada en la dirección del destinatario, cesando la responsabilidad del transportador en la custodia de la misma.
                Se entiende como responsable de recibir la unidad, la persona mayor de edad que firme la guía en constancia de recibido, a quien le asiste la obligación mínima de cerciorarse que la
                unidad es entregada en buenas condiciones en cuanto a su empaque externo.
                Si esta persona nota alguna novedad deberá reportarla en la guía de entrega y de manera inmediata a nuestro equipo de servicio al cliente a través de la sección de Contáctanos.
                Es indispensable dejar registro fotográfico del estado en que llegó el empaque.
                Debes tener presente que si no queda registro de la novedad en el empaque en la guía, no será posible tramitar ninguna reclamación al respecto con la empresa transportadora.
              </p>

              <p className='font-bold'>II. OBJETO</p>
              <p>
                Reglamentar las políticas y procedimientos que serán aplicables en el manejo de información de datos personales por parte de BUF’SEXSHOP,
                según las disposiciones contenidas en la Ley 1581 de 2012 y el decreto 1377 de 2013.
              </p>

              <p className='font-bold'>III. RESPONSABLES DEL TRATAMIENTO</p>
              <p>
                Razón social: <span className='font-bold'>BUF’SEXSHOP</span>
              </p>
              <p>
                Oficina principal: <span className='font-bold'>NO</span>
              </p>
              <p>
                Página web: <span className='font-bold'>www.bufssexshop.com</span>
              </p>
              <p>
                Responsable: <span className='font-bold'>Bufs sex shop</span>
              </p>

              <p className='font-bold'>IV. ALCANCE</p>
              <p>
                El presente manual le es aplicable a los datos personales de personas naturales registrados en las bases de datos relativas a Empleados, miembros de Juntas,
                Proveedores, Clientes, beneficiarios actuales, beneficiarios de años anteriores, personas naturales que han aplicado a alguno de nuestros programas,
                los cuales sean susceptibles de tratamiento. Aplicará a los datos personales que sean objeto de recolección y manejo por parte de BUF’SEXSHOP.
              </p>

              <p>El presente manual no aplicará:</p>

              <ol>
                <li>1. A los datos de uso exclusivamente personal o doméstico.</li>
                <li>2. A los datos que tengan por finalidad la seguridad y defensa nacional, así como la prevención, detección, monitoreo y control del lavado de activos y el financiamiento del terrorismo.</li>
                <li>3. A los datos que contengan información de inteligencia y contrainteligencia del Estado.</li>
                <li>4. A los datos de información periodística y otros contenidos editoriales.</li>
                <li>5. A las bases de datos y archivos regulados por la Ley Estatutaria 1266 de 2008.</li>
                <li>6. A las bases de datos y archivos regulados por la Ley 79 de 1993.</li>
              </ol>

              <p className='font-bold'>V. DEFINICIONES</p>
              <p>
                Para la aplicación de las reglas y procedimientos establecidos en el presente manual, y de acuerdo a lo establecido en el artículo 3 de la Ley Estatutaria 1581 de 2012, se entenderá por:
              </p>

              <p className='font-bold'>
                1. Aviso de privacidad:
                <span className='font-normal pl-1'>
                  Documento físico, electrónico o en cualquier otro formato, generado por el responsable del Tratamiento que se pone a disposición del Titular para el
                  Tratamiento de sus datos personales. A través de este, se comunica al Titular de la información la existencia de las políticas aplicables para el
                  tratamiento de sus datos personales, junto con la forma como acceder a las mismas y las características del tratamiento de los datos personales.
                </span>
              </p>

              <p className='font-bold'>
                2. Dato personal:
                <span className='font-normal pl-1'>
                  Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables, tales como nombre y apellidos,
                  documento de identidad, edad, domicilio, región, país, ciudad, código postal, número de teléfono fijo, número de teléfono móvil, dirección, dirección de
                  correo electrónico, preferencias publicitarias, preferencia de consumo, preferencias de canales, quejas y reclamos, novedades de servicio, datos básicos
                  y personales, datos de contacto, datos demográficos, datos de gustos, preferencias y hábitos.
                </span>
              </p>

              <p className='font-bold'>
                3. Datos sensibles:
                <span className='font-normal pl-1'>
                  Se entiende por datos sensibles aquellos que afectan la intimidad de Titular o cuyo uso indebido puede generar su discriminación,
                  tales como aquellos revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas,
                  la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promuevan intereses de cualquier partido político o
                  que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual
                  y los datos biométricos.
                </span>
              </p>

              <p className='font-bold'>
                4. Encargado del Tratamiento:
                <span className='font-normal pl-1'>
                  Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros,
                  realice el Tratamiento de datos personales por cuenta del Responsable del Tratamiento.
                </span>
              </p>

              <p className='font-bold'>
                5. Responsable del Tratamiento:
                <span className='font-normal pl-1'>
                  Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos.
                </span>
              </p>

              <p className='font-bold'>
                6. Titular:
                <span className='font-normal pl-1'>
                  Persona natural cuyos datos personales sean objeto de Tratamiento.
                </span>
              </p>

              <p className='font-bold'>
                7. Tratamiento:
                <span className='font-normal pl-1'>
                  Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso,
                  circulación o supresión de datos, en cualquier tecnología conocida o por conocer.
                </span>
              </p>

              <p className='font-bold'>VI. PRINCIPIOS</p>
              <p>
                Los principios que a continuación se enuncian, constituyen los parámetros generales mediante los cuales se dará aplicación a lo establecido
                en el presente manual referente a los datos personales de las personas a las que le es aplicable el tratamiento de sus datos
              </p>

              <p className='font-bold'>
                1. Principio de finalidad:
                <span className='font-normal pl-1'>
                  El Tratamiento de datos personales por parte de BUF’SEXSHOP debe obedecer a una finalidad legítima, la cual debe ser informada al Titular.
                </span>
              </p>
              <p className='font-bold'>
                2. Principio de libertad:
                <span className='font-normal pl-1'>
                  El Tratamiento de datos personales sólo podrá ejercerse mediando con el consentimiento, previo, expreso e informado del Titular de la información.
                  Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento.
                </span>
              </p>
              <p className='font-bold'>
                3. Principio de veracidad o calidad:
                <span className='font-normal pl-1'>
                  La información sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible.
                  Se prohíbe el Tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error.
                </span>
              </p>
              <p className='font-bold'>
                4. Principio de transparencia:
                <span className='font-normal pl-1'>
                  En el Tratamiento debe garantizarse el derecho del Titular a obtener de BUF’SEXSHOP, en cualquier momento y sin restricciones, información acerca de la
                  existencia de datos que le conciernan.
                </span>
              </p>
              <p className='font-bold'>
                5. Principio de acceso y circulación restringida:
                <span className='font-normal pl-1'>
                  Los datos personales, salvo la información pública, no podrán estar disponibles en Internet u otros medios de divulgación o comunicación masiva,
                  salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido sólo a los Titulares o terceros autorizados.
                </span>
              </p>
              <p className='font-bold'>
                6. Principio de seguridad:
                <span className='font-normal pl-1'>
                  La información sujeta a Tratamiento por BUF’SEXSHOP, se deberá manejar con las medidas técnicas, humanas y administrativas que sean necesarias para
                  otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
                </span>
              </p>
              <p className='font-bold'>
                7. Principio de confidencialidad:
                <span className='font-normal pl-1'>
                  Todas las personas que intervengan en el Tratamiento de datos personales que no tengan la naturaleza de públicos están obligadas a garantizar
                  la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el Tratamiento.
                </span>
              </p>

              <p className='font-bold'>VII. CONTENIDO</p>
              <p className='font-bold'>
                Tratamiento a que serán sometidos los datos y finalidad del tratamiento.
              </p>

              <p>
                El tratamiento es cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección,
                almacenamiento, uso, circulación o supresión. Los datos personales que recolecta BUF’SEXSHOP en la prestación de sus
                servicios y en general en el desarrollo de su objeto social, serán tratados conforme a las normas constitucionales y
                legales sobre la materia, y serán utilizados principalmente para identificar y mantener un registro y control de los
                Empleados, miembros de Juntas, Proveedores, Clientes, beneficiarios de cualquiera de sus programas educativos y personas
                que hubieren aplicado a cualquier programa de propiedad o administrado por BUF’SEXSHOP.
              </p>

              <p className='font-bold'>Tratamientos Generales de la información:</p>
              <p>
                Los datos personales serán tratados de manera leal y lícita con las siguientes finalidades de:
              </p>

              <p>
                1. Efectuar las gestiones pertinentes para el desarrollo de la etapa precontractual, contractual y poscontractual con BUF’SEXSHOP,
                respecto de cualquiera de los programas educativos, productos o servicios ofrecidos por BUF’SEXSHOP, que haya o no sido elegido, o
                respecto de cualquier relación negocial subyacente que tenga con ella, así como para dar cumplimiento a la ley colombiana o extranjera
                y a las órdenes de autoridades judiciales o administrativas.
              </p>
              <p>
                2. Gestionar trámites (solicitudes, quejas, reclamos), realizar análisis de comportamiento o desempeño del beneficiario y efectuar
                encuestas de satisfacción respecto de los servicios de BUF’SEXSHOP.
              </p>

              <p>
                3. Dar a conocer, transferir y/o trasmitir los datos personales dentro o fuera del país a terceros a consecuencia de un contrato,
                ley o vínculo lícito que así lo requiera o para implementar servicios de computación en la nube.
              </p>

              <p>
                4. Reportar datos sobre el cumplimiento o incumplimiento de las obligaciones dinerarias del titular del dato a centrales de información crediticia,
                entre otras CIFIN, DATACRÉDITO o a operadores de bancos de datos de información financiera, crediticia, comercial y provenientes de terceros
                países a que se refiere la ley 1266 de 2008 y la ley 1581 de 2012, para los fines indicados en dichas leyes y sus normas reglamentarias o modificatorias.
              </p>

              <p>
                Así mismo, sobre los datos personales también se realizará el siguiente tratamiento:
              </p>

              <p>
                5. Procesar
              </p>
              <p>
                6. Confirmar
              </p>
              <p>
                7. Cumplir
              </p>
              <p>
                8. Proveer los servicios adquiridos.
              </p>
              <p>
                9. Promocionar y publicitar nuestras actividades, productos o servicios.
              </p>
              <p>
                10. Realizar transacciones.
              </p>
              <p>
                11. Efectuar reportes con las distintas autoridades administrativas, de control y vigilancia nacional, entidades públicas,
                de policía o autoridades judiciales, entidades financieras y/o compañías de seguros.
              </p>

              <p>
                12. Fines administrativos internos y/o comerciales tales como: investigación de mercados, auditorias, reportes contables, análisis estadísticos o facturación.
              </p>

              <p>
                13. Recolección.
              </p>
              <p>
                14. Almacenamiento.
              </p>
              <p>
                15. Grabación.
              </p>
              <p>
                16. Uso.
              </p>
              <p>
                17. Circulación.
              </p>
              <p>
                18. Procesamiento.
              </p>
              <p>
                19. Supresión.
              </p>
              <p>
                20. Transmisión y/o transferencia a terceros países de los datos suministrados, para la ejecución de las actividades relacionadas
                con los servicios y productos adquiridos.
              </p>
              <p>
                21. Registros contables.
              </p>
              <p>
                22. Correspondencia.
              </p>
              <p>
                23. Identificación de fraudes y prevención de lavado de activos y de otras actividades delictivas.
              </p>

              <p className='font-bold'>Tratamiento General de Información de los proveedores:</p>

              <p>1. Para fines comerciales.</p>
              <p>2. Contabilización.</p>
              <p>3. Cumplimiento de decisiones judiciales y disposiciones administrativas y legales, fiscales y regulatorias.</p>
              <p>
                4. Cumplimiento de obligaciones contractuales, por lo cual la información podrá ser transferida a terceros, tales como
                entidades financieras, notarías, listas OFAC y de terrorismo, abogados, etc.
              </p>

              <p>5. Para realizar los procesos en que se encuentran vinculados los proveedores.</p>

              <p>
                6. Cualquier otro uso que el proveedor autorice por escrito para el uso de su información.
              </p>

              <p>
                7. Transmisión de información y datos personales en procesos de auditorías.
              </p>

              <p className='font-bold'>
                Tratamiento General de Información de los beneficiarios de programas y de aquellas personas que hayan aplicado a programas aún sin haber sido seleccionadas:
              </p>

              <p>
                1. Para administrar, hacer seguimiento, e informar sobre los programas educativos cursados.
              </p>

              <p>
                2. Para suministrar información a las entidades públicas con las cuales se tiene Convenio o a las cuales se les administran programas educativos.
              </p>

              <p>
                3. Para informar sobre nuevos programas, servicios o productos ofrecidos.
              </p>

              <p>
                4. Ofrecimiento de bienes y servicios.
              </p>

              <p>
                5. Publicidad y mercadeo.
              </p>

              <p>
                6. Alianzas comerciales.
              </p>

              <p>
                7. Contabilización.
              </p>

              <p>
                8. Cumplimiento de obligaciones contractuales, por lo cual la información podrá ser transferida a terceros, tales como entidades
                financieras, bancos de datos, listas OFAC y de terrorismo, abogados, etc.
              </p>

              <p>
                9. Cumplimiento de decisiones judiciales y disposiciones administrativas y legales, fiscales y regulatorias.
              </p>

              <p>
                10. Transmisión de información y datos personales en procesos de auditorías.
              </p>

              <p>
                11. Facturación.
              </p>

              <p className='font-bold'>
                Tratamiento General de Información de los empleados, ex empleados y candidatos a ocupar vacantes:
              </p>

              <p>
                1. Para fines pertinentes a la relación laboral (EPS, ARL, fondos de pensiones y cesantías, cajas de compensación familiar, etc.)
              </p>

              <p>
                2. En el caso de los empleados con la suscripción del contrato laboral se entiende autorización expresa para darle Tratamiento a la información.
              </p>

              <p>
                3. En el caso de requerimientos judiciales y legales.
              </p>

              <p>
                4. Contabilización y pago de nómina.
              </p>

              <p>
                5. Reclutar y seleccionar personal que ocuparán las vacantes.
              </p>

              <p>
                6. Procesar, confirmar y cumplir con las obligaciones laborales legales y extralegales derivadas del contrato laboral.
              </p>

              <p>
                7. Realizar transacciones.
              </p>

              <p>
                8. Pago de beneficios extralegales.
              </p>

              <p>
                9. Auditorias.
              </p>

              <p>
                10. Análisis estadísticos.
              </p>

              <p>
                11. Mantener base de datos de candidatos.
              </p>

              <p>
                12. Capacitación y formación.
              </p>

              <p>
                13. Compartir los datos personales con entidades bancarias, empresas que ofrezcan beneficios a nuestros trabajadores activos, entre otros.
              </p>

              <p className='font-bold'>VIII. Autorización.</p>

              <p>
                La compilación, almacenamiento, consulta, uso, intercambio, transmisión, transferencia y tratamiento de datos personales
                requiere el consentimiento libre, expreso e informado del Titular de la información. Basado en lo anterior y a través de
                este manual, se implementa los mecanismos que permitan la consulta posterior por parte del titular de la información.
              </p>

              <p className='font-bold'>
                IX. Mecanismos para otorgar Autorización
              </p>

              <p>
                La autorización por parte del titular podrá constar en un documento físico, electrónico o cualquier otro formato que permita concluir de
                forma razonable y comprobable que el Titular otorgó la autorización.
              </p>

              <p>
                Teniendo en cuenta lo anterior, BUF’SEXSHOP deja de presente que la autorización en todo caso será mediante documento físico y/o digital,
                el cual deberá contar con la firma del Titular de la información, lo cual no obsta para que más adelante se establezcan mecanismos
                diferentes para otorgar la autorización.
              </p>

              <p>
                A través de la autorización se pondrá en conocimiento del Titular de la información el hecho de que la información será recolectada, incluyendo la
                finalidad, las modificaciones, almacenamiento y el uso especifico que se dará a los mismos, y además:
              </p>

              <p>
                1. La persona quien recopila la información (especificando si es el Responsable o el Encargado del tratamiento).
              </p>

              <p>
                2. Los datos que serán recopilados, incluyendo si se recopilan Datos Sensibles.
              </p>

              <p>
                3. La finalidad del tratamiento de los datos.
              </p>

              <p>
                4. Los mecanismos a través de los cuales pueden ejercer sus derechos como Titulares de la información
                (acceso, corrección, actualización o supresión de los datos).
              </p>

              <p className='font-bold'>
                X. Prueba de la Autorización.
              </p>

              <p>
                BUF’SEXSHOP en su calidad de Responsable y de Encargado del Tratamiento dispondrá de los medios necesarios para mantener los registros técnicos y tecnológicos de cuándo
                y cómo se obtuvo la autorización por parte del Titular de la información para el tratamiento de los mismos.
              </p>

              <p className='font-bold'>
                XI. Aviso de privacidad.
              </p>

              <p>
                El aviso de privacidad es un documento físico, electrónico o cualquier otro formato, mediante el cual informamos al titular de la información
                sobre la existencia de políticas que le serán aplicables, así como la forma en la que pueden acceder a las mismas y las características del
                tratamiento que se le dará a los datos personales.
              </p>

              <p className='font-bold'>
                Contenido del aviso de privacidad.
              </p>

              <p>
                1. La identidad, domicilio y datos de contacto del Responsable o del Encargado del Tratamiento.
              </p>

              <p>
                2. El Tratamiento al que serán sometidos los datos y la finalidad del mismo.
              </p>

              <p>
                3. Los mecanismos dispuestos por BUF’SEXSHOP para que el Titular conozca la política de tratamiento de la información y los cambios sustanciales
                que se produzcan en ella o en el aviso de privacidad correspondiente. En todos los casos, informaremos al Titular cómo acceder o consultar la
                política de tratamiento de información.
              </p>

              <p>
                Se conservará el modelo del aviso de privacidad que se transmitió a los Titulares de la información mientras se lleve a cabo el tratamiento de los datos
                personales y perduren las obligaciones que de éste se deriven. Para el almacenamiento del modelo, se podrán emplear medios informáticos, electrónicos o
                cualquier otra tecnología a elección de BUF’SEXSHOP.
              </p>

              <p>
                Según el grupo de personas cuyos datos personales se recaban, habrá un único modelo de aviso de privacidad, en el cual se especificará detalladamente
                los puntos anteriormente descritos para cada uno de los mismos.
              </p>

              <p className='font-bold'>
                XII. Derechos de los Titulares de la información.
              </p>

              <p>
                De conformidad con el artículo 8 de la Ley Estatutaria 1581 de 2012, el Titular de los datos personales tiene los siguientes derechos:
              </p>

              <p>
                1. Conocer, actualizar y rectificar sus datos personales frente a BUF’SEXSHOP en su calidad de Responsable y Encargado del tratamiento.
              </p>

              <p>
                2. Solicitar prueba de la autorización otorgada a BUF’SEXSHOP.
              </p>

              <p>
                3. Ser informado por BUF’SEXSHOP respecto del uso que le ha dado a sus datos personales.
              </p>

              <p>
                4. Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la Ley Estatutaria 1581 de 2012, habiéndose
                agotado el trámite de consulta o reclamo según lo indicado en la mencionada Ley.
              </p>

              <p>
                5. Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se respeten
                los principios, derechos y garantías constitucionales y legales.
              </p>

              <p>
                6. Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento.
              </p>

              <p className='font-bold'>
                XIII. Deberes de BUF’SEXSHOP con relación al tratamiento de datos personales en su calidad de Responsables y Encargado del Tratamiento.
              </p>

              <p>
                Se deja de presente que los datos personales objeto del tratamiento son de propiedad de las personas a las que se refieren y ellas son las
                facultadas para disponer los mismos. Basado en lo anterior, BUF’SEXSHOP solo hará uso de los datos personales conforme a las finalidades
                establecidas en la Ley y respetando lo establecido en la Ley Estatutaria 1581 de 2012.
              </p>

              <p>
                De conformidad con el artículo 17 de la Ley Estatutaria 1581 de 2012, se comprometen a cumplir los siguientes deberes:
              </p>

              <p>
                1. Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeas data.
              </p>

              <p>
                2. Informar a solicitud del Titular sobre el uso dado a sus datos.
              </p>

              <p>
                3. Solicitar y conservar copia de la respectiva autorización otorgada por el Titular.
              </p>

              <p>
                4. Informar debidamente al Titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada.
              </p>

              <p>
                5. Realizar en los términos previstos en los artículos 14 y 15 de la Ley Estatutaria 1581 de 2012, la actualización, rectificación o supresión de los datos.
              </p>

              <p>
                6. Tramitar las consultas y reclamos formulados por el titular en los términos señalados en el artículo 14 de la Ley Estatutaria 1581 de 2012.
              </p>

              <p>
                7. Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
              </p>

              <p>
                8. Garantizar que la información que se suministre al Encargado del Tratamiento sea veraz, completa, exacta, actualizada, comprobable y comprensible.
              </p>

              <p>
                9. Actualizar la información, comunicando de forma oportuna al Encargado del Tratamiento, todas las novedades respecto de los datos que previamente
                le haya suministrado y adoptar las demás medidas necesarias para que la información suministrada a este se mantenga actualizada.
              </p>

              <p>
                10. Actualizar la información, comunicando de forma oportuna al Encargado del Tratamiento, todas las novedades respecto de los datos que previamente.
              </p>

              <p>
                11. Informar a la Superintendencia de Industria y Comercio cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los titulares.
              </p>

              <p>
                12. Tramitar las consultas y reclamos formulados por los titulares de la información.
              </p>

              <p>
                13. Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio.
              </p>

              <p>
                14. Aplicar las normas que reglamenten la Ley Estatutaria 1581 de 2012.
              </p>

              <p className='font-bold'>
                XIV. Procedimientos para acceso, consulta y reclamación.
              </p>

              <p>
                Puntos aplicables para todos los Procedimientos:
              </p>

              <p>
                1. Para el ejercicio de los derechos indicados en este punto por parte de los titulares o sus causahabientes, y también para evitar acceso
                a la información por personas no autorizadas legalmente, se deberá verificar previamente y de acuerdo con la Ley, la doPara el ejercicio de
                los derechos indicados en este punto por parte de los titulares o sus causahabientes, y también para evitar acceso a la información por
                personas no autorizadas legalmente, se deberá verificar previamente y de acuerdo con la Ley, la documentación que permita concluir que la
                persona que solicita la información sí es el Titular o causahabiente.cumentación que permita concluir que la persona que solicita la
                información sí es el Titular o causahabiente.
              </p>

              <p>
                2. En caso de existir alguna duda en cuanto a la aplicación de los procedimientos acá indicados, la misma será informada por el área responsable
                de la base de datos que es objeto de la aplicación del procedimiento y resuelta por la Dirección General, quien resolverá el tema con asesores
                jurídicos, teniendo en cuenta la Ley, los Decretos y demás normas reglamentarias o instructivas, y las jurisprudencias que en la materia se emitan.
              </p>

              <p className='font-bold'>
                Acceso
              </p>

              <p>
                Teniendo en cuenta que la facultad de disponer o de decidir sobre los datos personales está en cabeza del Titular de la información, esta facultad
                implica necesariamente el derecho del titular a acceder y conocer la información personal que está siendo objeto de tratamiento, incluyendo en este
                aspecto el alcance, condiciones y generalidades del tratamiento.
              </p>

              <p>
                Teniendo en cuenta lo anterior, se garantiza este derecho en cabeza del Titular, el cual incluye.
              </p>

              <p>
                1. El conocimiento de la existencia del tratamiento de sus datos personales.
              </p>

              <p>
                2. El acceso a sus datos personales.
              </p>

              <p>
                3. Las circunstancias del tratamiento de los datos personales.
              </p>

              <p className='font-bold'>
                Consulta.
              </p>

              <p>
                De conformidad con el artículo 14 de la Ley Estatutaria 1581 de 2012, los Titulares o sus causahabientes podrán consultar la información personal del
                Titular que repose en cualquier base de datos. Basado en esto, se garantiza este derecho suministrando a estos toda la información contenida en el
                registro individual o que esté vinculada con la identificación del Titular, y BUF’SEXSHOP suministrará toda la información contenida en el registro
                individual o que esté vinculada con la identificación del Titular.
              </p>

              <p>
                Según la naturaleza de la base de datos personales, la consulta será gestionada por el área responsable de la atención a la misma al interior
                de BUF’SEXSHOP, pero en todo caso podrá ser direccionada a la Dirección Financiera y Administrativa de la Entidad.
              </p>

              <p>
                Las consultas serán atendidas en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo de la misma.
                Cuando no fuere posible atender la consulta dentro de dicho término, se informará al interesado dentro del primer término conferido,
                en donde se expresará los motivos de la demora y señalando la fecha en que se atenderá su consulta, la cual en ningún caso podrá superar
                los cinco (5) días hábiles siguientes al vencimiento del primer término.
              </p>

              <p className='font-bold'>
                Reclamo
              </p>

              <p>
                De conformidad con el artículo 15 de la Ley Estatutaria 1581 de 2012, el Titular o sus causahabientes que consideren que la información contenida en una
                base de datos debe ser objeto de corrección, actualización o supresión, o cuando adviertan el presunto incumplimiento de cualquiera de los deberes
                contenidos en la Ley Estatutaria 1581 de 2012, podrán presentar un reclamo el cual será tramitado bajo las siguientes reglas:
              </p>

              <p>
                1. El reclamo se formulará mediante comunicación realizada por el titular o sus causahabientes dirigida a BUF’SEXSHOP responsable o el encargado del Tratamiento,
                la cual debe incluir la información señalada en el artículo 15 de la Ley Estatutaria 1581 de 201. Si el reclamo resulta incompleto, se requerirá al
                interesado dentro de los cinco (5) días siguientes a la recepción del reclamo para que subsane las fallas. Transcurridos dos (2) meses desde la
                fecha del requerimiento, sin que el solicitante presente la información requerida, se entenderá que ha desistido del reclamo. En todo caso si la
                comunicación es dirigida a BUF’SEXSHOP y no tiene la calidad para responder la comunicación, BUF’SEXSHOP sin necesidad de comunicarlo a la persona
                que realiza la reclamación, dará conocimiento de la misma a la sociedad que deba dar respuesta.
              </p>

              <p>
                2. En caso de que BUF’SEXSHOP reciba un reclamo que no sea competente para resolver, dará traslado a quien corresponda en un término máximo de dos (2)
                días hábiles e informará de la situación al interesado.
              </p>

              <p>
                3. Una vez recibido el reclamo completo, se incluirá en la base de datos una leyenda que diga "reclamo en trámite" y el motivo del mismo, en un término no mayor a dos (2)
                días hábiles. Dicha leyenda deberá mantenerse hasta que el reclamo sea decidido.
              </p>

              <p>
                4. El término máximo para atender el reclamo será de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Cuando no fuere
                posible atender el reclamo dentro de dicho término, se informará al interesado los motivos de la demora y la fecha en que se atenderá su reclamo,
                la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término.
              </p>

              <p>
                5. En cualquier tiempo y gratuitamente, la persona natural Titular de los datos personales o su representante podrá solicitar la rectificación,
                actualización o supresión de sus datos personales previa acreditación de su identidad.
              </p>

              <p>
                La solicitud de rectificación, actualización o supresión de sus datos personales debe ser presentada a través de los medios proporcionados señalados
                en el aviso de privacidad y deberá contener como mínimo la siguiente información:
              </p>

              <p>
                1. El nombre y domicilio del Titular o representante o cualquier otro medio para recibir la respuesta a su solicitud.
              </p>

              <p>
                2. Los documentos que acrediten la identidad o la representación del Titular de los datos personales.
              </p>

              <p>
                3. La descripción clara y precisa de los datos personales y de los hechos que dan lugar al reclamo.
              </p>

              <p>
                4. Los documentos que se desean hacer valer en la reclamación.
                La supresión implica la eliminación total o parcial de la información personal de acuerdo por lo solicitado por el Titular, de los registros, archivos y bases de datos o tratamientos realizados por BUF’SEXSHOP.
              </p>

              <p>
                Según la naturaleza de la Base de datos personales, la reclamación será gestionada por el área responsable de la atención a la misma al interior de BUF’SEXSHOP.
              </p>

              <p className='font-bold'>
                Requisito de procedibilidad.
              </p>

              <p>
                El Titular o causahabiente sólo podrá elevar queja ante la Superintendencia de Industria y Comercio una vez haya agotado el trámite de consulta o reclamo ante BUF’SEXSHOP.
              </p>

              <p className='font-bold'>
                XV. Revocatoria de la autorización.
              </p>

              <p>
                De acuerdo con lo establecido con la Ley, en el supuesto en que en el Tratamiento no se respeten los principios, derechos y garantías constitucionales y
                legales, los Titulares o sus representantes (como es el caso de padres que ejerzan la patria potestad de un infante o adolescente) podrán solicitar
                la revocatoria de la autorización otorgada para el Tratamiento de los mismos, salvo que por disposición legal o contractual se impida dicha revocatoria,
                indicando en dicho caso, las razones concretas con base en las cuales considera que se está dando la situación de no respeto a los mencionados alcances.
              </p>

              <p>
                BUF’SEXSHOP al ser responsable del Tratamiento, deberá confirmar haber recibido la solicitud de revocatoria de autorización, incluyendo su fecha de recepción.
                Se podrá objetar la misma si a juicio de BUF’SEXSHOP no se presenta el supuesto indicado por el Titular o si tal revocatoria implica una afectación para el
                seguimiento o cumplimiento de derechos o de obligaciones por parte de la entidad y respecto del Titular, caso en el cual deberá informarlo al mismo por escrito
                para que éste tome las medidas ante las autoridades que considere pertinentes.
              </p>

              <p>
                La solicitud de revocatoria de la autorización puede ser total o parcial. Será total cuando se solicite la revocatoria de la totalidad de las finalidades consentidas
                a través de la autorización; será parcial cuando se solicite la revocatoria de algunas finalidades dependiendo de la solicitud de revocatoria. Este calificativo deberá
                ser expresado de manera clara en la solicitud de revocatoria de la autorización.
              </p>

              <p className='font-bold'>
                XVI. Seguridad de la información.
              </p>

              <p>
                Medidas de seguridad de la información.
              </p>

              <p>
                En desarrollo del principio de seguridad establecido en la Ley Estatutaria 1581 de 2012, BUF’SEXSHOP implementará las medidas técnicas, humanas y administrativas
                adicionales en caso de requerirse, que sean necesarias para otorgar seguridad a los registros, mediante los cuales se evitará su adulteración, pérdida, consulta,
                uso o acceso no autorizado o fraudulento.
              </p>

              <p className='font-bold'>
                XVII. Registro de las Bases.
              </p>

              <p>
                BUF’SEXSHOP en su calidad de Responsable y Encargado de Tratamiento ha procedido a registrar las bases de datos en los términos indicados por
                las normas colombianas, ante la Superintendencia de Industria y Comercio.
              </p>

              <p className='font-bold'>
                XVIII. Aceptación.
              </p>

              <p>
                Los Titulares de la información aceptan el tratamiento de sus datos personales conforme los términos de este Manual, al momento de proporcionar sus datos.
              </p>

              <p className='font-bold'>
                XIX. Acceso a Registro como usuario de BUF’SEXSHOP - Identificación
              </p>

              <p>
                La información proporcionada de carácter personal que permita identificar a una persona determinada (tal como nombre, domicilio o dirección de correo electrónico),
                cualquier información que pueda ser considerada sensible o que pueda comprometer la privacidad de los usuarios, estará bajo estricto manejo por parte de la Fundación
                para efectos de personalización del portal y no será divulgada en ningún momento a terceros.
              </p>

              <p className='font-bold'>
                XX. Registro
              </p>

              <p>
                Para poder acceder a toda la información de BUF’SEXSHOP será necesario que se registre como usuario, siendo necesario que se identifique con su cédula y una clave.
                Los datos de registro deberán ser conservados por el usuario, asumiendo toda la responsabilidad del manejo de los mismos.
              </p>

              <p>
                En caso de que el usuario olvide su clave, BUF’SEXSHOP estará en plena disposición de recordársela por medio de un correo electrónico, siempre y cuando haya cumplido con un
                procedimiento que se le pedirá al momento del registro.
              </p>

              <p>
                Su número de cédula, que lo identifica como un usuario registrado, será también empleado por la Fundación, con total confidencialidad,
                para hacer mediciones de tráfico y patrones de navegación de la página web.
              </p>

              <p className='font-bold'>
                XXI. El usuario y sus responsabilidades
              </p>

              <p>
                Al ingresar a la pagina de BUF’SEXSHOP, el usuario adquiere el compromiso de suministrar información personal correcta y verdadera, así como proceder
                a la actualización de sus datos cada vez que se requiera. De igual forma, BUF’SEXSHOP verificará que la información que ingrese sea verídica
                (en el caso de los candidatos actuales, beneficiarios y ex-becarios).
              </p>

              <p>
                Cuando se trate de publicidad registrada con nosotros, la información será responsabilidad del anunciante y se le prohíbe poner en, o transmitir a,
                desde este sitio cualquier material ilegal, amenazador, calumniador, difamatorio, obsceno, escandaloso, pornográfico o profano, o cualquier
                otro material que pudiera dar lugar a cualquier responsabilidad civil o penal en los términos de la ley.
              </p>

              <p className='font-bold'>
                XXII. Nota de privacidad
              </p>

              <p>
                Debido a los cambios tecnológicos, BUF’SEXSHOP podrá modificar estas políticas sin previo aviso por lo cual se le recomienda al usuario revisar continuamente las mismas.
              </p>

              <p className='font-bold'>
                XXIII. Vigencia
              </p>

              <p>
                Esta Política General para la Protección de Datos Personales estará vigente desde la fecha de su publicación en la página de BUF’SEXSHOP.
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

export default ModalPrivacyPolicies
