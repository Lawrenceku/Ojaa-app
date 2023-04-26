import React from 'react'
import LocationGraph from './referralGraph'

function TopReferral(){
return(
    <div className='flex-col  flex-1 ml-0 border w-1/2 p-5 ml-6 my-4 rounded-md'>
        <div className='flex  mb-10 w-full'>
        <p className=' flex-1 font-bold'>Top Referall Source</p>
        <p className='text-orange-600'>View Full Reports</p>
        </div>
        {/* <ul>
            <li>Google</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>linkedin</li>
        </ul> */}
        <div >
        <LocationGraph/>
        </div>
    </div>
    
)
}
export default TopReferral