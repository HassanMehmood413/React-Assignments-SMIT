import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement } from '../store/slices/counter.slice'


export default function Counter() {

    const count = useSelector((store)=>store.counterSlice.count)
    const product = useSelector((store)=>store.counterSlice.products)
    console.log(product)
    const dispatch = useDispatch()



    const HandleIncrement = ()=>{
        dispatch(increment())
    }
    const HandleDecrement = ()=>{
        dispatch(decrement())
    }

    return (
        <div style={{color:'white'}}>
            <h1>Counter</h1>
            <button style={{background:'linear-gradient(to right, #8e44ad, #3498db)'}} onClick={HandleIncrement}>+</button>
            <p>{count}</p>
            <button  style={{background:'linear-gradient(to right, #8e44ad, #3498db)'}} onClick={HandleDecrement}>-</button>
        </div>
    )
}
