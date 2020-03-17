import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Form from './Form';

function App() {

  const [listItems, setListItems] = useState([{
    item: "Learn React",
    priority: "High",
    id: "Learn ReactHigh"
  }])

  const handleFormSubmit = formData => {
    setListItems([
      ...listItems,
      {
        item: formData[0],
        priority: formData[1],
        id: `${formData[0]}${formData[1]}`
      }
    ])
  }

  const handleDeleteItem = id => {
    const newListItems = listItems.filter(li => li.id !== id)
    setListItems(newListItems)
  }
  
  return (
    <div className="App">
      <h2>Todos: </h2>
      <Form
        submitCallback={handleFormSubmit}
        inputs={["Items", "Priority"]}
        submitValue={"New Todo"}
      />
      <List items={listItems} handleDelete={handleDeleteItem}/>
    </div>
  );
}

export default App;
