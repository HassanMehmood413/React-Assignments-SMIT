import React from 'react'

export default function apis() {

    const response  = async()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        console.log(res)
    }
  return (
    <div>   
        <button onClick={response}>Click me</button>
    </div>
  )
}
