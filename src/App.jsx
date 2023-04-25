import React, { useState } from 'react'
import SideNav from './side-bar'
import Dashboard from './Dashboard.jsx'
import DashboardTop from './DashboardTop.jsx'
import LineGraph from './lineGraph.jsx'
import TopReferral from './Top-Referral'
import TopLocation from './Top-locations'



function App() {
  return (
    <>
    <div className='flex'>
    <SideNav/>

    <div className='flex flex-col'>
    <DashboardTop username="Blessing"  />
    <Dashboard/> 
    <LineGraph/>
    <div className='flex'>
    <TopLocation/>
    <TopReferral/>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
