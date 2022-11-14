import React from 'react'
import Coin from './Coin'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom'
import Pagination from './Pagination'


function HomePage() {

  const [searchText, setSearchText] = useState("")
  const [loading, setLoading] = useState(false)
  const [coinsData, setCoinsData] = useState([])
  const [trendingCoins, setTrendingCoins] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchCoinsData = async () => {
      setLoading(true);
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      setCoinsData(res.data)
      setLoading(false);
    }

    fetchCoinsData();

    const fetchTrendingCoins = async () => {
      setLoading(true);
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
      setTrendingCoins(res.data)
      setLoading(false);
    }

    fetchTrendingCoins();
  }, [])

  const items = trendingCoins.map((coin) => {
    return (
      <Link to={`/coins/${coin.id}`} className='trending-coin-container'>
        <span className='img-name'>
          <img
            src={coin.image}
            alt={coin.name}
            className='trending-coin-img'
          />
          <span className='name-price'>
            <span style={{ color: 'white', fontSize: '14px' }}>{coin.symbol}</span>
            <span style={coin.price_change_percentage_24h < 0 ? { color: 'red', fontSize: '14px' } : { color: 'green', fontSize: '14px' }}>{coin.price_change_percentage_24h.toFixed(2)}%</span>
          </span>
        </span>
        <span style={{ color: 'white', fontSize: '18px', marginTop: '10px' }}>₹ {coin.current_price}</span>
      </Link>

    )
  })
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4
    }
  }

  function handleChange(event) {
    setSearchText(event.target.value)
  }


  const filteredData = coinsData.filter((val) => {
    if (searchText === "") {
      return val
    }
    else if (val.name.toLowerCase().includes(searchText.toLowerCase())) {
      return val
    }
  })
  

  const coinComponent=filteredData.slice((currentPage-1)*10,(currentPage-1)*10+10).map((item) => {
    return (
      <Coin
        id={item.id}
        symbol={item.symbol}
        name={item.name}
        image={item.image}
        key={item.id}
        currPrice={item.current_price}
        mktcap={item.market_cap}
        pricechange={item.price_change_percentage_24h}
      />
    )
  })

  return (
    <div className='outer-container'>
      <div className='intro-container'>
        <h2 style={{color:'gold'}}>Welcome To Crypto Wars</h2>
        <h6 style={{color:'gold'}}>Search for your favorite crypto!!!</h6>

        {!loading ? <div className='carousel'>
        
          <AliceCarousel
            autoPlay
            autoPlayInterval={1000}
            disableButtonsControls
            disableDotsControls
            infinite
            items={items}
            responsive={responsive}
          />  
          </div> : <Loader /> }

        <input
          type='text'
          placeholder='Search here'
          onChange={handleChange}
          name='searchText'
          value={searchText}
        />
      </div>
      <div className='crypto-list'>
        <h2>Coin</h2>
        <div className='test'>
          <h2>Price</h2>
          <h2>24h Change</h2>
          <h2>Market Cap</h2>
        </div>
      </div>
      {!loading ? coinComponent : <Loader />}

      <Pagination 
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      coinsLength={filteredData.length}
      />
    </div>
  )
}

export default HomePage