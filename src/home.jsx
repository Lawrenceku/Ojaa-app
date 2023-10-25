import React from "react";
import SideNav from './side-bar'
import Dashboard from './Dashboard'
import DashboardTop from './DashboardTop'
import LineGraph from './lineGraph'
import TopReferral from './Top-Referral'
import TopLocation from './Top-locations' 



function Home (){
return(<div className='flex'>
    <SideNav className=''/>
    <div className=' flex flex-col w-screen md:w-full'>
    <DashboardTop username="John" />
    <Dashboard/> 
    <LineGraph />
    <div className='flex flex-col md:flex-row w-screen md:w-full flex-grow  p-0 justify-center'>
    <TopLocation/>
    <TopLocation/>
    {/* <TopReferral/> */}
    </div>
    </div>
    </div> )
}
export default Home