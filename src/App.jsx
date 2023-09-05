import { useState } from 'react'

import ShoppingList from './ShoppingList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addItem = (item) => {
    
    setItems((prev) => {
      return [...prev, {...item, id: 3}]
    })
  }

  return (
    <>
      <ShoppingList addItem={addItem}/>
    </>
  )
}

export default App
