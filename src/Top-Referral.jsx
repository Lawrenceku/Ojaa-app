import React from 'react'
import DoughnutChart from './doughnut-graph'
function TopReferral(){
return(
    <div className=' w-100 flex-col border px-24 ml-64 my-4'>
        <div className='flex'>
        <p className='flex-1'>Top Location</p>
        <p className='text-orange-600'>View Full Reports</p>
        </div>
        <DoughnutChart/>
    </div>
    
)
}
export default TopReferral