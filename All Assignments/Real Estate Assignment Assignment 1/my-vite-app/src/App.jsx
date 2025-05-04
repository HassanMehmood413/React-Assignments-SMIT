import React from 'react'
import Routing from '../src/routing/Routing'
import { Provider } from 'react-redux'
import { store } from './store/store'
import "./app.css"

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Routing />
      </Provider>

    </>
  )
}