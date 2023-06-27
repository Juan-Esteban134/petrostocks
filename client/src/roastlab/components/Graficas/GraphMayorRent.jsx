import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export function MayorRentabilidad(props){
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels = props.Lista;

const data = {
  labels,
  datasets: [
    {
        fill: true,
        label: 'Rentabilidad %',
        data: props.Rentabilidad,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)'
    }
  ],
}
return <Line options={options} data={data}/>
}