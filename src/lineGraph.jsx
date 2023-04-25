import React, { useEffect, useRef } from 'react';

const LineGraph = () => {
  const chartRef = useRef();

  useEffect(() => {
    const chartConfig = {
      type: 'line',
      data: {
        labels: ['', '15 Dec', '10 Dec', '20 Dec', '21 Dec', '22 Dec', '23 Dec', '24 Dec'],
        datasets: [
          {
            data: [50, 45, 60, 70, 65, 80, 90, 60],
            borderColor: 'rgba(0, 0, 180)',
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
      
    };
    

    const myChart = new Chart(chartRef.current, chartConfig);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
    <div className='border flex flex-col p-5'>
     
    <p className="text-lg font-bold">Page Views</p>
            <p>All Time</p>
            <h1 className='font-bold text-5xl mt-6'>500</h1>
            
            <canvas ref={chartRef}  /* style={{ width: '100%', height: '40px' }}  */ />
  </div>
  </>
  )
};

export default LineGraph;
