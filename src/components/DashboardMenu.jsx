'use client'

import {
  ChartPieIcon, ArrowsUpDownIcon, HeartIcon, NoSymbolIcon, UsersIcon
} from '@heroicons/react/24/solid'

import { Card, CardHeader, Avatar, Button } from '@nextui-org/react'

import { getData } from '@/api/fetchData'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import Loader from './Loader'

const iconClasses = 'h-7 w-9 text-gray-600 dark:text-slate-100'

const icons = {
  products: <ChartPieIcon className={iconClasses} />,
  disabled: <NoSymbolIcon className={iconClasses} />,
  visited: <ArrowsUpDownIcon className={iconClasses} />,
  sales: <HeartIcon className={iconClasses} />,
  users: <UsersIcon className={iconClasses} />
}

const NextCard = ({ label, icon, info }) => {
  return (
    <Card className='lg:w-64'>
      <CardHeader className='bg-slate-100 dark:bg-slate-700 justify-between'>
        <div className='flex gap-2'>
          <Avatar
            radius='full'
            size='md'
            icon={icon}
          />
          <div className='flex flex-col gap-1 items-start justify-center'>
            <h4 className='text-lg font-semibold leading-none text-default-600'>{info}</h4>
            <h5 className='text-xs tracking-tight text-default-600'>{label}</h5>
          </div>
        </div>
        <Button
          className=''
          color='primary'
          radius='full'
          size='sm'
          variant='solid'
          onPress={() => undefined}
        >
          Ver
        </Button>
      </CardHeader>
    </Card>
  )
}

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
        <NextCard
          label='Total Productos'
          icon={icons.products}
          info={data?.cantidad}
        />
      </Link>

      {/* <Link href='/dashboard/productos'> */}
      <NextCard
        label='Productos Inactivos'
        icon={icons.disabled}
        info={data?.inactivos}
      />
      {/* </Link> */}

      {/* <Link href='/dashboard/productos'> */}
      <NextCard
        label='Total Visitas'
        icon={icons.visited}
        info='531'
      />
      {/* </Link> */}

      {/* <Link href='/dashboard/productos'> */}
      <NextCard
        label='Total Promociones'
        icon={icons.sales}
        info={data?.promociones}
      />
      {/* </Link> */}

      {/* <Link href='/dashboard/productos'> */}
      <NextCard
        label='Total Usuarios'
        icon={icons.users}
        info={data?.usuarios}
      />
      {/* </Link> */}
    </section>
  )
}

export default DashboardMenu
