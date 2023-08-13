import IconButton from './IconButton'
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const Pagination = ({ currentPage, totalPages, itemsPerPage, onPageChange, onItemsPerPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage !== currentPage) {
      onPageChange(newPage)
    }
  }

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value)
    if (newItemsPerPage !== itemsPerPage) {
      onItemsPerPageChange(newItemsPerPage)
    }
  }

  return (
    <div className='flex xs:flex-col items-center justify-between my-16'>
      <div className='flex items-center'>
        <span className='text-slate-500 font-semibold dark:text-slate-50 mr-2'>Productos por página:</span>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className='px-2 py-1 border rounded text-slate-500 outline-none cursor-pointer'
        >
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
          <option value='25'>25</option>
          <option value='30'>30</option>
        </select>
      </div>
      <div className='flex items-center gap-6 duration-700'>
        <IconButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowSmallLeftIcon class='h-6 w-6 text-gray-500 dark:text-slate-50' />
        </IconButton>
        <span className='text-slate-500 font-semibold dark:text-slate-50'>Página {currentPage} de {totalPages}</span>
        <IconButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowSmallRightIcon class='h-6 w-6 text-gray-500 dark:text-slate-50' />
        </IconButton>
      </div>
    </div>
  )
}

export default Pagination
