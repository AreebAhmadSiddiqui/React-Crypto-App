import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CoinChart from './CoinChart'
import Loader1 from './Loader1'
function CoinPage() {

    const { id } = useParams()
    const [coin, setCoin] = useState([])

    useEffect(() => {

        const fetchCoinData = async () => {
            const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            setCoin(res.data)
        }
        fetchCoinData()
    }, [])

    return (
         
        coin.length==0 ? <Loader1/> : <div className='container'>
        <div className='coin-profile'>
            <img src={coin?.image.large} />
            <h1 style={{ marginTop: '20px' }}>{coin?.name}</h1>
            <p style={{ marginTop: '10px' }}>{coin?.description.en.replace(/<[^>]+>/g, '').split('.').slice(0, 3)}</p>
            <div className='market-data'>
                <h3>Rank:  {coin?.market_cap_rank}</h3>
                <h3>Current Prince:  ₹{coin?.market_data.current_price['inr'].toLocaleString()}</h3>
                <h3>Market Cap: ₹{coin?.market_data.market_cap['inr'].toLocaleString()}</h3>
            </div>
        </div>
        <div className='coin-chart'>
            <CoinChart id={coin.id} />
        </div>
    </div> 
    )
}

export default CoinPage