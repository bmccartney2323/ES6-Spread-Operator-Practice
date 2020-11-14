import React,  { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
// Initial state for items is an empty array
const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  };
  function addItem(event){
    // here we display all the items.
    setItems( (prevItems) => {
      return [...prevItems, inputText];
    });
    // Here we clear the input text from the display
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {/* Added a value property to input */}
        <input onChange={handleChange} type="text" value= {inputText}/>
        <button>
          <span onClick={addItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => { 
            return <li>{todoItem}</li>
          })}
          {/* <li>A Item </li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
