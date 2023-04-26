import React from 'react';

function DashboardTop({ username }) {
  return (
    <div className="bg-white py-6">
      <h1 className="text-2xl ml-12 font-bold text-gray-900">Dashboard</h1>
      <div className=" ml-4 mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col ">
          <p className="text-gray-900 font-bold text-xl">Good morning, {username}⛅️</p>
        </div>
        <div className='flex'>
        <p className="mt-1 lg:flex-1 md:mr-64 text-sm text-gray-500">
          Check out your dashboard summary
        </p>
        <p className="mt-1 mr-0 text-sm text-orange-500">
         View Analytics
        </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardTop;
