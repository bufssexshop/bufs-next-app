'use client'

import {
  ChartPieIcon, ArrowsUpDownIcon, HeartIcon, NoSymbolIcon, UsersIcon
} from '@heroicons/react/24/solid'

import { getData } from '@/api/fetchData'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import Loader from './Loader'

const DashboardMenu = () => {
  const indicatorsQuery = useQuery({
    queryKey: ['indicators'],
    queryFn: () => getData('productos/getIndicators'),
    onError: (res) => console.log('xxx error: ', res)
  })

  const { data, isLoading, isFetching } = indicatorsQuery

  if (isLoading || isFetching) {
    return (
      <div className='w-full h-96 xs:h-72 bg-white dark:bg-slate-800 flex justify-center items-center'>
        <Loader />
      </div>
    )
  }

  return (
    <section className='flex justify-around flex-wrap'>

      <Link href='/dashboard/productos'>
        <main
          className='lg:w-64 m-5
          flex justify-between p-5 rounded-md
          bg-slate-100 dark:bg-slate-50
          '
        >
          <div className='w-14 h-14 bg-slate-300 rounded-full flex justify-center items-center'>
            <ChartPieIcon class='h-9 w-9 text-gray-800' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='text-2xl'>{data?.cantidad}</div>
            <div className='text-sm text-slate-500'>Total Productos</div>
          </div>
        </main>
      </Link>

      <main
        className='lg:w-64 m-5
          flex justify-between p-5 rounded-md
          bg-slate-100 dark:bg-slate-50
          '
      >
        <div className='w-14 h-14 bg-slate-300 rounded-full flex justify-center items-center'>
          <NoSymbolIcon class='h-9 w-9 text-gray-800' />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-2xl'>{data?.inactivos}</div>
          <div className='text-sm text-slate-500'>Productos inactivos</div>
        </div>
      </main>

      <main
        className='lg:w-64 m-5
          flex justify-between p-5 rounded-md
          bg-slate-100 dark:bg-slate-50
          '
      >
        <div className='w-14 h-14 bg-slate-300 rounded-full flex justify-center items-center'>
          <ArrowsUpDownIcon class='h-9 w-9 text-gray-800' />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-2xl'>531</div>
          <div className='text-sm text-slate-500'>Total Visitas</div>
        </div>
      </main>

      <main
        className='lg:w-64 m-5
          flex justify-between p-5 rounded-md
          bg-slate-100 dark:bg-slate-50
          '
      >
        <div className='w-14 h-14 bg-slate-300 rounded-full flex justify-center items-center'>
          <HeartIcon class='h-9 w-9 text-gray-800' />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-2xl'>{data?.promociones}</div>
          <div className='text-sm text-slate-500'>Total Promociones</div>
        </div>
      </main>

      <main
        className='lg:w-64 m-5
            flex justify-between p-5 rounded-md
          bg-slate-100 dark:bg-slate-50
          '
      >
        <div className='w-14 h-14 bg-slate-300 rounded-full flex justify-center items-center'>
          <UsersIcon class='h-9 w-9 text-gray-800' />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-2xl'>{data?.usuarios}</div>
          <div className='text-sm text-slate-500'>Total Usuarios</div>
        </div>
      </main>

    </section>
  )
}

export default DashboardMenu
