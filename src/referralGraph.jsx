/* import React, { useEffect, useRef } from 'react';

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
 */
import React, { useEffect, useRef } from 'react';


const LocationGraph = () => {
  const chartRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fe-task-api.mainstack.io/');
      const data = await response.json();
      const chartData = {
        labels: [],
        datasets: [
          {
            label: 'Top Sources',
            data: [],
            backgroundColor: [],
          },
        ],
      };
      data.top_sources.forEach((source) => {
        chartData.labels.push(source.source);
        chartData.datasets[0].data.push(source.count);
        chartData.datasets[0].backgroundColor.push(getRandomColor());
      });
      const myChart = new Chart(chartRef.current, {
        type: 'doughnut', // Changed chart type to doughnut
        data: chartData,
        options: {
          responsive: true,
        },
      });
      return () => {
        myChart.destroy();
      };
    };
    fetchData();
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return <canvas ref={chartRef} />;
};

export default LocationGraph;
