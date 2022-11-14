import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function CoinChart({ id }) {


    const [loading, setLoading] = useState(false)
    const [chartData, setChartData] = useState([])
    const [day, setDay] = useState(1)

    useEffect(() => {
        const fetchChartData = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${day}`)
            setChartData(res.data.prices)
            setLoading(false)
        }
        fetchChartData()
    }, [day])

    const [active, setActive] = useState("1");

    const handleClick = (event) => {
        setActive(event.target.id);
        setDay(event.target.id)
    }
    return (
        !loading ?
            <div className='graph'>
                <Line
                    data={{
                        labels: chartData.map((coin) => {
                            let date = new Date(coin[0]);
                            let time = date.toLocaleTimeString()
                            return day === 1 ? time : date.toLocaleDateString();
                        }),

                        datasets: [
                            {
                                data: chartData.map((coin) => coin[1]),
                                label: 'Prices',
                                borderColor: "#EEBC1D",
                            }
                        ]
                    }}
                />
                <div className='btn-container'>
                    <button
                        key={1}
                        className={active === "1" ? "active" : 'btn'}
                        id={"1"}
                        onClick={handleClick}>24 Hr</button>
                    <button key={24}
                        className={active === "24" ? "active" : 'btn'}
                        id={"24"}
                        onClick={handleClick}>30 Days</button>
                    <button key={30}
                        className={active === "365" ? "active" : 'btn'}
                        id={"365"}
                        onClick={handleClick}>365 Days</button>
                    <button key={'max'}
                        className={active === "max" ? "active" : 'btn'}
                        id={"max"}
                        onClick={handleClick}>Max</button>
                </div>
            </div>
            : <></>
    )
}

export default CoinChart