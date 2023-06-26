import React from 'react'
import { Line, Bar, Pie, Radar, Doughnut, PolarArea, Bubble, Scatter } from 'react-chartjs-2'

const ChartBar = () => {
    return (
        <div>
            <Line
                width={600}
                height={400}

                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [
                        {
                            label: 'a',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            borderColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            borderWidth: 1,

                        },
                        // {
                        //     label: 'b',
                        //     data: [44, 26, 41, 12, 15, 32],
                        //     backgroundColor: 'orange',
                        //     borderColor: 'red',
                        //     borderWidth: 1,
                        // },

                    ]
                }}

                options={{
                    maintainAspectRatio: false,
                    scale: { yAxes: [{ ticks: { beginAtzero: true } }] },
                    legend: { labels: { fontSize: 25 } }
                }}
            />
        </div>
    )
}

export default ChartBar
