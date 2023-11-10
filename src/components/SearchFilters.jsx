import Actions from './Actions'
import Modal from './Modal'
import SelectInput from './SelectInput'
import React, { useState } from 'react'

import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import InputText from './InputText'

const priceOptions = [
  { value: 'under25000', label: 'Hasta $25,000 COP' },
  { value: '25000to50000', label: '25,000 - $50,000 COP' },
  { value: '50000to75000', label: '50,000 - $75,000 COP' },
  { value: '75000to100000', label: '75,000 - $100,000 COP' },
  { value: '100000to150000', label: '100,000 - $150,000 COP' },
  { value: 'over150000', label: 'Mas de 150,000' }
]

const SearchFilters = () => {
  const [selectedPrice, setSelectedPrice] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [search, setSearch] = useState('')

  const handleShowFilters = () => {
    setShowFilters(true) // Show the filters when the button is clicked
  }

  const handleChange = (e) => {
    const selectedOption = priceOptions.find(option => option.value === e.target.value)
    setSelectedPrice(selectedOption ? selectedOption.label : '')
  }

  const handleCloseModal = () => {
    setShowFilters(false)
    clear()
  }

  const clear = () => {
    setSearch('')
    setSelectedPrice('')
  }

  return (
    <div className='flex items-center'>
      {/* Add a button to trigger showing the filters */}
      <button
        onClick={handleShowFilters}
      >
        <AdjustmentsHorizontalIcon className='h-7 w-7 text-white' />
      </button>
      {showFilters && (
        <Modal
          onClose={() => {
            setShowFilters(false)
            clear()
          }}
          title='Busqueda avanzada'
          size='small'
        >
          <InputText
            id='search'
            value={search}
            icon={<MagnifyingGlassIcon className='text-gray-500' />}
            defaultValue=''
            placeholder='Buscar'
            size='medium'
            handleChange={(e) => setSearch(e.target.value)}
          />
          <SelectInput
            title='Por precios'
            options={priceOptions}
            onChange={handleChange}
            size='medium'
          />
          <p>
            Filtros: {`${search || ''} ${selectedPrice || ''}`}
          </p>

          <Actions
            primary={{
              variant: 'primary',
              label: 'Aceptar',
              type: 'submit'
            }}
            secondary={{
              label: 'Cancelar',
              onClick: handleCloseModal
            }}
          />
        </Modal>
      )}
    </div>
  )
}

export default SearchFilters
