import React from 'react';
import {
    Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement,
} from 'chart.js';

import BubbleChart from './charts/bubble';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const loadData = async () => {
            const resp = await fetch('http://localhost:3000/calculations/bubbleChart', {
                credentials: 'include',
            });
            const jsonData = await resp.json();
            setData(jsonData.value);
        };

        loadData();
    }, []);

    return (
        <div>
            <BubbleChart data={
                {
                    labels: ['Red', 'Orange', 'Blue'],
                    datasets: [
                        {
                            label: 'Restaurant data - delivery rating(y) vs dining rating(x)',
                            data: data.map((doc) => ({
                                name: doc.name,
                                location: doc.location,
                                x: doc.diningRating,
                                y: doc.deliveryRating,
                                r: doc.price,
                            })),
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                    ],
                }
            }
            />
        </div>
    );
}
