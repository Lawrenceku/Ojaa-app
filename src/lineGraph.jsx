import React, { useEffect, useRef, useState } from 'react';

const LineGraph = () => {
  const linechart ={
  position:"relative"
  }
  
  const chartRef = useRef();
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    fetch('https://fe-task-api.mainstack.io/')
      .then(response => response.json())
      .then(data => setGraphData(data.graph_data.views))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (Object.keys(graphData).length) {
      const chartConfig = {
        type: 'line',
        data: {
          labels: Object.keys(graphData),
          datasets: [
            {
              data: Object.values(graphData),
              borderColor: 'rgb(255, 84, 3)',
              borderWidth: 2,
              fill: {
                type: 'linear',
                colorStops: [
                  { offset: 0, color: 'red' },
                  { offset: 1, color: 'rgb(10,10,1)' },
                ],
                fill: 'origin',
              },
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 7,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  borderDash: [4, 4],
                  color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            intersect: false,
          },
        },
      };

      const myChart = new window.Chart(chartRef.current, chartConfig);

      return () => {
        myChart.destroy();
      };
    }
  }, [graphData]);

  return (
    <>
      <div className='border  flex flex-col p-5 mx-6 rounded-md '>
        <div className='flex'>
        <p className='text-lg font-bold flex-1'>Page Views</p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.58333 11.75H8.41667V7.16667H7.58333V11.75ZM8 5.97917C8.13889 5.97917 8.26056 5.93056 8.365 5.83333C8.46889 5.73611 8.52083 5.61111 8.52083 5.45833C8.52083 5.31944 8.46889 5.20139 8.365 5.10417C8.26056 5.00694 8.13889 4.95833 8 4.95833C7.86111 4.95833 7.73944 5.00694 7.635 5.10417C7.53111 5.20139 7.47917 5.31944 7.47917 5.45833C7.47917 5.61111 7.53111 5.73611 7.635 5.83333C7.73944 5.93056 7.86111 5.97917 8 5.97917ZM8 15.5C6.95833 15.5 5.97917 15.3056 5.0625 14.9167C4.14583 14.5278 3.35083 13.9967 2.6775 13.3233C2.00361 12.6494 1.47222 11.8542 1.08333 10.9375C0.694444 10.0208 0.5 9.04167 0.5 8C0.5 6.95833 0.694444 5.97917 1.08333 5.0625C1.47222 4.14583 2.00361 3.35056 2.6775 2.67667C3.35083 2.00333 4.14583 1.47222 5.0625 1.08333C5.97917 0.694444 6.95833 0.5 8 0.5C9.04167 0.5 10.0208 0.694444 10.9375 1.08333C11.8542 1.47222 12.6494 2.00333 13.3233 2.67667C13.9967 3.35056 14.5278 4.14583 14.9167 5.0625C15.3056 5.97917 15.5 6.95833 15.5 8C15.5 9.04167 15.3056 10.0208 14.9167 10.9375C14.5278 11.8542 13.9967 12.6494 13.3233 13.3233C12.6494 13.9967 11.8542 14.5278 10.9375 14.9167C10.0208 15.3056 9.04167 15.5 8 15.5ZM8 14.6667C9.84722 14.6667 11.4203 14.0175 12.7192 12.7192C14.0175 11.4203 14.6667 9.84722 14.6667 8C14.6667 6.15278 14.0175 4.57972 12.7192 3.28083C11.4203 1.9825 9.84722 1.33333 8 1.33333C6.15278 1.33333 4.58 1.9825 3.28167 3.28083C1.98278 4.57972 1.33333 6.15278 1.33333 8C1.33333 9.84722 1.98278 11.4203 3.28167 12.7192C4.58 14.0175 6.15278 14.6667 8 14.6667Z" fill="#31373D"/>
</svg>
        </div>
        <p>All Time</p>
        <h1 className='font-bold text-5xl my-6'>{Object.values(graphData).reduce((acc, curr) => acc + curr, 0)}</h1>
        <canvas style={linechart} ref={chartRef} />
      </div>
    </>
  );
};

export default LineGraph;
