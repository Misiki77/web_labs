import React from 'react'
import "./Item.css"

const Item = (props) => {
  return (
    <div className='item'>
      <img  className="image-for-item"src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price">
          {props.price} $
        </div>
      </div>
    </div>
  )
}

export default Item
