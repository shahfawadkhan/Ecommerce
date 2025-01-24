import React from 'react'
import Hero from '../components/Hero'
import FeaturedProduct from '../components/FeaturedProduct'
import LatestProducts from '../components/LatestProducts'
function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <LatestProducts />
    </div>
  )
}

export default Home
