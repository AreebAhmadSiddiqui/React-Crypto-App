import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
         <Link to='/' style={{fontSize:'2.5rem',color:'gold',fontWeight:'bold'}}>Crypto Wars</Link>
         <h2 style={{color:'gold'}}>Home</h2>
    </div>
  )
}

export default Navbar