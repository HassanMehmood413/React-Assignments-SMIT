import React from 'react'
import Routing from '../src/routing/Routing'
import "./app.css"
import { Provider } from 'react-redux'
import {store} from '../src/store/store'


export default function App() {
  return (
    <>
      <Provider store={store}>
        <Routing/>
      </Provider> 
    </>
  )
}