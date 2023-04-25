import React, { useEffect, useRef, useState } from 'react';

const LineGraph = () => {
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
              borderColor: 'red',
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
      <div className='border flex flex-col p-5 mx-6 rounded-md shadow-lg'>
        <p className='text-lg font-bold'>Page Views</p>
        <p>All Time</p>
        <h1 className='font-bold text-5xl mt-6'>{Object.values(graphData).reduce((acc, curr) => acc + curr, 0)}</h1>
        <canvas ref={chartRef} />
      </div>
    </>
  );
};

export default LineGraph;
