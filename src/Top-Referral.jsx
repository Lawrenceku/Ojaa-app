import React from 'react'
import LocationGraph from './referralGraph'

function TopReferral(){
return(
    <div className='flex-col flex-grow-0 flex-1 ml-0 border px-24 ml-6 my-4 rounded-md'>
        <div className='flex'>
        <p className='flex-1 font-bold'>Top Referall Source</p>
        <p className='text-orange-600'>View Full Reports</p>
        </div>
        <ul>
            <li>Google</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>linkedin</li>
        </ul>
        <LocationGraph/>
    </div>
    
)
}
export default TopReferral