import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Routing from './routing/Routing'


export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Routing/>
      </Provider>
    </div>
  )
}
