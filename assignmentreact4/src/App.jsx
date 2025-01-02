import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';
import AddItemForm from './AddItemForm';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (itemToDelete) => {
    setItems(items.filter(item => item !== itemToDelete));
  };

  return (
    <div className="App">
      <h1>add and remove items</h1>
      <AddItemForm addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
