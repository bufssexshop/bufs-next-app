import React from 'react'
import cn from 'classnames'
import { Pagination, PaginationItemType, Select, SelectItem } from '@nextui-org/react'
import { ChevronIcon } from '../SVG/ChevronIcon'

const items = [
  { label: '10', value: 10 },
  { label: '15', value: 15 },
  { label: '20', value: 20 },
  { label: '25', value: 25 },
  { label: '30', value: 30 }
]

const ColoredPagination = ({ total, page, initialPage, onChange, itemsPerPage, onChangeItemsPerPage }) => {
  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value)
    if (newItemsPerPage !== itemsPerPage) {
      onChangeItemsPerPage(newItemsPerPage)
    }
  }

  const renderItem = ({
    ref,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className
  }) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button className={cn(className, 'bg-default-200/50 min-w-8 w-8 h-8')} onClick={onNext}>
          <ChevronIcon className='rotate-180' />
        </button>
      )
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button className={cn(className, 'bg-default-200/50 min-w-8 w-8 h-8')} onClick={onPrevious}>
          <ChevronIcon />
        </button>
      )
    }

    if (value === PaginationItemType.DOTS) {
      return <button className={className}>...</button>
    }

    return (
      <button
        ref={ref}
        className={cn(
          className,
          isActive &&
          'text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold'
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    )
  }

  return (
    <section className='flex xs:flex-col xs:gap-10 items-center md:justify-between my-10'>
      <Select
        size='sm'
        labelPlacement='inside'
        label='Items por página'
        placeholder={itemsPerPage}
        onChange={handleItemsPerPageChange}
        className='max-w-xs'
      >
        {items.map((num) => (
          <SelectItem key={num.value} value={num.value}>
            {num.label}
          </SelectItem>
        ))}
      </Select>

      <Pagination
        disableCursorAnimation
        showControls
        page={page}
        total={total}
        initialPage={initialPage}
        className='gap-2'
        radius='full'
        renderItem={renderItem}
        variant='light'
        onChange={onChange}
      />
    </section>
  )
}

export default ColoredPagination
