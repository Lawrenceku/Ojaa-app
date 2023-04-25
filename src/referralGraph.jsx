import React, { useEffect, useRef } from 'react';

const LocationGraph = () => {
  const chartRef = useRef();

  useEffect(() => {
    const chartConfig = {
      type: 'doughnut',
      data: {
        labels: ['Google', 'instagram', 'facebook', 'linkedin'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [25, 34, 20,21],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
          },
        ],
      },
    };

    const myChart = new Chart(chartRef.current, chartConfig);

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default LocationGraph;
