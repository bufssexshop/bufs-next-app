'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import { useQuery } from '@tanstack/react-query'
import { getData } from '@/api/fetchData'
import Loader from '@/components/Loader'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const Dashboard = () => {
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

  const chartData = {
    labels: ['Productos', 'Inactivos', 'Promociones', 'Usuarios'],
    datasets: [
      {
        label: '# of Votes',
        data: [data?.cantidad, data?.inactivos, data?.promociones, data?.usuarios],
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 128, 0, 0.5)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 128, 0, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <>
      <section className='w-full mt-20 flex justify-center items-center'>
        <div className='xs:w-[96] lg:w-[500px] flex'>
          <Pie data={chartData} />
        </div>
      </section>
    </>
  )
}

export default Dashboard
