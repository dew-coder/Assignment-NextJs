
import React from 'react';
import { Chart } from 'react-google-charts';
import Image from 'next/image';

export function Pie({ correctAnswers }) {
    const data = [
        ['Effort', 'Amount given'],
        ['Correct', parseInt(correctAnswers)],
        ['Incorrect', 15 - parseInt(correctAnswers)],
    ];

    const options = {
        pieHole: 0.7,
        pieSliceTextStyle: {
            color: 'black',
        },
        legend: 'none',
        slices: {
            0: { color: '#1d4ed8' },
            1: { color: '#d4e9fa' },
        },
        tooltip: { trigger: 'none' },
        pieSliceBorderColor: 'none',
        pieSliceText: 'none',
    };

    return (
        <div className="relative w-4/5 h-4/5">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width="100%"
                height="100%"
            />
            <Image 
            src={"https://res.cloudinary.com/dcvjujoc3/image/upload/v1721474405/vmcf9eaemmx7wis6aewt.jpg"}
            alt="dart img"
            className="absolute inset-0 m-auto"
            width={50}
            height={50}
            ></Image>
            
        </div>
    );
}
