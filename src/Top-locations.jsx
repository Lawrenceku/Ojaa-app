import React  from "react";
import DoughnutChart from "./locationGraph";

function TopLocation(){
    return(
       < div className='flex-col border px-24 ml-6 my-4 rounded-md shadow-md'>
        <div className='flex'>
        <p className='flex-1'>Top Locations</p>
        <p className='text-orange-600'>View Full Reports</p>
        </div>
        <ul>
            <li>Nigeria</li>
            <li>United States</li>
            <li>Netherland</li>
            <li>Andorra</li>
            <li>Other</li>
        </ul>
            <DoughnutChart/>
        </div>
    )
}

export default TopLocation