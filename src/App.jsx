import { useState } from 'react';
import { ThemeProvider } from './ThemeContext';
import ShoppingList from './ShoppingList';
import './styles/App.css';

function App() {
  const addItem = (item) => {
    
    setItems((prev) => {
      return [...prev, {...item, id: 3}]
    })
  }

  return (
    <ThemeProvider>
      <ShoppingList addItem={addItem}/>
    </ThemeProvider>
  )
}

export default App
