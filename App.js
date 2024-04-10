import { View, Text } from 'react-native'
import React from 'react'
import store from './src/store'
import TodoScreen from './src/screens/Todoscreen'
import {Provider} from 'react-redux'

const App = () => {
  return (
   <Provider store={store}>
    <TodoScreen/>


   </Provider>
  )
}

export default App