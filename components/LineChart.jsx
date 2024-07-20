import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, annotationPlugin);

const LineChart = ({ percentile }) => {
  const baseData = [4, 35, 10, 30, 20, 50, 33, 55, 70, 20, 6];
  const labels = Array.from({ length: 101 }, (_, i) => i.toString()); // Labels from 0 to 100

  // Calculate the corresponding data value for each percentile
  const interpolatedData = Array.from({ length: 101 }, (_, i) => {
    const index = Math.floor(i / 10);
    const nextIndex = index + 1;
    const ratio = (i % 10) / 10;
    return baseData[index] + ratio * (baseData[nextIndex] - baseData[index]);
  });

  // Highlighting the user's percentile
  const pointRadius = interpolatedData.map((_, index) => (index === percentile ? 5 : 0));

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Number of Students',
        data: interpolatedData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Your Percentile',
        data: interpolatedData.map((value, index) => (index === percentile ? value : null)),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.1,
        pointRadius: pointRadius,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Percentile',
        },
        ticks: {
          callback: function (val, index) {
            return index % 10 === 0 ? this.getLabelForValue(val) : '';
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.dataset.label === 'Your Percentile') {
              return `Your Percentile: ${percentile}% - ${context.parsed.y} students`;
            }
            return `${context.dataset.label}: ${context.parsed.y}`;
          },
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            xMin: percentile,
            xMax: percentile,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            label: {
              content: `Your Percentile: ${percentile}%`,
              enabled: true,
              position: 'top',
              backgroundColor: 'rgba(255, 99, 132, 0.8)',
              color: 'white',
            },
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-fit bg-white">
      <div className="bg-white rounded-lg w-full h-full">
        <div>
          <h2>Your Percentile: {percentile}</h2>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
