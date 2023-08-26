import DashboardMenu from '@/components/DashboardMenu'

export default function DashboardLayout ({ children }) {
  return (
    <section className='sm:py-5 lg:py-10 2xl:p-5'>
      <DashboardMenu />
      {children}
    </section>
  )
}
