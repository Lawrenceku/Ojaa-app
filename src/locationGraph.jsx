import React, { useEffect, useRef } from 'react';

const DoughnutChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const chartConfig = {
      type: 'doughnut',
      data: {
        labels: ['Nigeria', 'US', 'Netherlands', "Andora", "others"],
        datasets: [
          {
            label: 'My First Dataset',
            data: [34, 19, 25,20,2],
            backgroundColor: ['rgb(0, 0, 255)', 'rgb(155, 48, 250)', 'rgb(0, 128, 0)','rgba(255, 255, 0,)','(255, 165, 0)'],
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

export default DoughnutChart;
