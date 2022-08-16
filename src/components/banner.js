import React from 'react'
import {Link} from 'react-router-dom'
export const Banner = () => {
  return (
    <>
      <div className="hero_area">
        <div className="banner-content">
          <div>
            <h1>Welcome to our store</h1>
            <button><Link to="/shop">Shop Now</Link></button> 
          </div>
        </div>
      </div>
    </>
  )
}