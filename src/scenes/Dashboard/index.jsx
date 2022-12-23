import React from 'react'
import DashCard from '../../components/DashCard'
import RecentOrder from '../../components/RecentOrder'
import TopProduct from '../../components/TopProduct'
import SalesReport from '../../components/SalesReport'

const Dashboard = () => {
  return (
    <>
      <DashCard />
      <RecentOrder />
      <div className="row">
        <TopProduct />
        <SalesReport />
      </div>

    </>
  )
}

export default Dashboard