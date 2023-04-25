import React, { useEffect, useRef } from 'react';


const DoughnutChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    fetch('https://fe-task-api.mainstack.io/')
      .then((response) => response.json())
      .then((data) => {
        const topLocations = data.top_locations;
        const chartConfig = {
          type: 'doughnut',
          data: {
            labels: topLocations.map((location) => location.country),
            datasets: [
              {
                label: 'Top Locations',
                data: topLocations.map((location) => location.percent),
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(153, 102, 255)',
                ],
                hoverOffset: 4,
                borderWidth: 0,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                position: 'bottom',
              },
              tooltip: {
                callbacks: {
                  label: (context) =>
                    `${context.label}: ${context.parsed}%`,
                },
              },
            },
          },
        };

        const myChart = new Chart(chartRef.current, chartConfig);

        return () => {
          myChart.destroy();
        };
      })
      .catch((error) => {
        console.error('Error fetching top locations data: ', error);
      });
  }, []);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;
