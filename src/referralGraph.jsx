/* import React, { useEffect, useRef } from 'react';


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
      let totalCount = 0;
      data.top_sources.forEach((source) => {
        totalCount += source.count;
      });
      data.top_sources.forEach((source) => {
        const percentage = ((source.count / totalCount) * 100).toFixed(2);
        //chartData.labels.push(`${source.source} (${percentage}%)`);
        chartData.labels.push(`${source.source} (${source.count})`);
        chartData.datasets[0].data.push(source.count);
        chartData.datasets[0].backgroundColor.push(getRandomColor());
      });
      const myChart = new Chart(chartRef.current, {
        type: 'doughnut',
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                boxWidth: 20,
                padding: 15,
              },
            },
          },
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
 */
import React, { useEffect, useRef } from 'react';
//import Chart from 'chart.js/auto';

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
        chartData.labels.push(`${source.source}: ${source.count}`);
        chartData.datasets[0].data.push(source.count);
        chartData.datasets[0].backgroundColor.push(getRandomColor());
      });
      const myChart = new Chart(chartRef.current, {
        type: 'doughnut',
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label;
                  const value = context.formattedValue;
                  return `${label}: ${value}`;
                },
              },
            },
          },
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
