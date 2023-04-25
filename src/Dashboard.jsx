import React from 'react';

function Dashboard() {
  return (
    <div className="flex mx-6 ">
<button class="bg-white hover:bg-orange-100 hover:text-orange-600 hover:border-orange-600 m-3 border textblack font-semibold py-2 px-4 rounded-full">
  1 Day
</button>
<button class="bg-white hover:bg-orange-100 hover:text-orange-600 hover:border-orange-600 m-3 border textblack font-semibold py-2 px-4 rounded-full">
  3 Days
</button>
<button class="bg-white hover:bg-orange-100 hover:text-orange-600 hover:border-orange-600 m-3 border textblack font-semibold py-2 px-4 rounded-full">
  7 Days
</button>
<button class="bg-white hover:bg-orange-100 hover:text-orange-600 hover:border-orange-600 m-3 border textblack font-semibold py-2 px-4 rounded-full">
  30 Days
</button>
<button class="bg-white hover:bg-orange-100 hover:text-orange-600 hover:border-orange-600 m-3 border textblack font-semibold py-2 px-4 rounded-full">
  All Time
</button>
<button class="bg-white hover:bg-orange-100 hover:text-orange-600 focus hover:border-orange-600 m-3 border textblack font-semibold py-2 px-4 rounded-full">
  Custom Date
</button>

    </div>
  );
}

export default Dashboard;
