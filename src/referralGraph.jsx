import React, { useEffect, useRef } from 'react';
//import Chart from 'chart.js/auto';

const LocationGraph = () => {
  const chartRef = useRef();

  useEffect(() => {
    const chartConfig = {
      type: 'doughnut',
      data: {
        labels: ['Google', 'Instagram', 'Facebook', 'LinkedIn'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [25, 34, 20, 21],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)'],
          },
        ],
      },
    };

    fetch('https://example.com/api/data')
      .then(response => response.json())
      .then(data => {
        const sources = data.top_sources;
        const labels = sources.map(source => source.source.charAt(0).toUpperCase() + source.source.slice(1));
        const counts = sources.map(source => source.count);
        chartConfig.data.labels = labels;
        chartConfig.data.datasets[0].data = counts;
        const myChart = new Chart(chartRef.current, chartConfig);
        return () => {
          myChart.destroy();
        };
      });
  }, []);

  return <canvas ref={chartRef} />;
};

export default LocationGraph;
