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
  
  return (
    <div className="App">
      <Form
        inputs={["Items", "Priority"]}
        submitValue={"New Todo"}
      />
      <List items={listItems}/>
    </div>
  );
}

export default App;
