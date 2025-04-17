import React from 'react'
import './items.css'

export default function items(props) {
  return (
    <div>
        <div className="container">
            <div className="image">
                <img src={props.image} alt="" />
            </div>
            <div className="content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button>{props.price}</button>
            </div>
        </div>
    </div>
  )
}
