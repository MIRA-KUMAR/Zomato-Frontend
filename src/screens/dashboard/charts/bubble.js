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
                        },
                        x: {
                            min: 1.5,
                            ticks: {
                                count: 10,
                            },
                        },
                    },
                }}
            />
        </div>
    );
}
