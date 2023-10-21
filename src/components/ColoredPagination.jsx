import React from 'react'
import cn from 'classnames'
import { Pagination, PaginationItemType } from '@nextui-org/react'
import { ChevronIcon } from '../SVG/ChevronIcon'

const ColoredPagination = ({ total, page, initialPage }) => {
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
    />
  )
}

export default ColoredPagination
