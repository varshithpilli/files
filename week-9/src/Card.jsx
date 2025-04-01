import React from 'react'

function Card({image, title, desc}) {
  return (
      <div className="card">
        <div className="image">
          <img src={image} alt=""/>
        </div>
        <div className='title'>{title}</div>
        <div className="desc">{desc}</div>
      </div>
  )
}

export default Card