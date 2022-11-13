import React from 'react';
import { Bubble } from 'react-chartjs-2';

export default function BubbleChart({ data }) {
    return (
        <div>
            <Bubble
                data={data}
                options={{
                    scales: {
                        y: {
                            min: 1,
                            ticks: {
                                count: 10,
                            },
                            title: {
                                text: 'Delivery Rating',
                                align: 'center',
                                display: true,
                                font: {
                                    size: 20,
                                },
                            },
                        },
                        x: {
                            min: 1.5,
                            ticks: {
                                count: 10,
                            },
                            title: {
                                text: 'Dining Rating',
                                align: 'center',
                                display: true,
                                font: {
                                    size: 20,
                                },
                            },
                        },
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label(d) {
                                    return `${d.dataset.data[d.dataIndex].name} - ${d.dataset.data[d.dataIndex].location}`;
                                },
                            },
                        },
                    },
                }}
            />
        </div>
    );
}
