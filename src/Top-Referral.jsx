import React from 'react'
import LocationGraph from './referralGraph'

function TopReferral(){
return(
    <div className='flex-col border px-24 ml my-4 rounded-md shadow-sm'>
        <div className='flex'>
        <p className='flex-1'>Top Referall Source</p>
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