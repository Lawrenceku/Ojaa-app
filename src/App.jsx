import React, { useState } from 'react'
import SideNav from './side-bar'
import Dashboard from './Dashboard.jsx'
import DashboardTop from './DashboardTop.jsx'
import LineGraph from './lineGraph.jsx'
import DoughnutChart from './doughnut-graph.jsx'

function App() {
  return (
    <>
    <div className='flex'>
    <SideNav/>
    <div className='flex flex-col'>
    <DashboardTop username="Blessing"  />
    <Dashboard/> 
    <LineGraph/>
    <DoughnutChart/>
    </div>
    </div>
    </>
  )
}

export default App
