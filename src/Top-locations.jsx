import React  from "react";
import LocationGraph from "./location-graph";

function TopLocation(){
    return(
       < div className='flex-col border px-24 ml-6 my-4'>
        <div className='flex'>
        <p className='flex-1'>Top Referall Source</p>
        <p className='text-orange-600'>View Full Reports</p>
        </div>
            <LocationGraph/>
        </div>
    )
}

export default TopLocation