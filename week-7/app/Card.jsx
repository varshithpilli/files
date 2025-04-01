import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'
function Card() {
  return (
    <div className="container-card">
      <div className="card">
        <div className="image">
          <a href="https://en.wikipedia.org/wiki/Elon_Musk" target="_blank">
            <Image src={assets.musk} alt="" width={200} style={{ borderRadius: '6000px' }} />
          </a>
        </div>
        <div className="text">Elon Reeve Musk is a businessman known for his key roles in Tesla, SpaceX, and Twitter. Since 2025, he has been a senior advisor to United States president Donald Trump and the de facto head of the Department of Government Efficiency</div>
      </div>
    </div>
  )
}

export default Card
