import React from 'react'
import { Link } from 'react-router-dom'
function Coin(props) {
    return (
        <div className='coin-container'>
            <Link to={`/coins/${props.id}`}className='coin-data'>
                <img className='coin-image' src={props.image}></img>
                <div className='hero'>
                    <h2>{props.name}</h2>
                    <h4 style={{color:'gold'}}>({props.symbol.toUpperCase()})</h4>
                </div>
            </Link>
            <div className='coin-container-test grid-container'>
                <h2 className='curr-price'>₹ {props.currPrice.toLocaleString()}</h2>
                <h2 className='price-change' style={props.pricechange < 0 ? { color: 'red' } : { color: 'green' }}>{props.pricechange.toFixed(2)}%</h2>
                <h2 className='mkt-cap'>₹ {props.mktcap.toLocaleString()}</h2>
            </div>
        </div>
    )
}

export default Coin