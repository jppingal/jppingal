import React, { useState } from "react";
import "./index.css"; 
import ToDoLists from "./ToDoLists";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemsEvent = (event) => {
    // console.log(event.target.value);
    setInputList(event.target.value);
  };

  const addItems = () => {
    // alert ("submited")
    setItems((oldItems) => {
      return [ ...oldItems, inputList];
    });
    setInputList(" ");
  };
  // const addItems=(event)=> {
  //   event.preventDefault();
  //   // alert("submited");
  //   setItems(inputList);
  // };
  const deleteItems = (id) => {

    console.log("delated");
    setItems((oldItems) =>{ 
      return oldItems.filter((arrElem, index) => {
        return index !== id;

      })
    })
};
  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1 className="todo_title">ToDo List</h1>
          <br/>
          <input type= "text" placeholder="Add Items"
            onChange={itemsEvent} value={inputList}
            />
          <button onClick={addItems}> + </button>
          <ol>
            {/* {<li> {items}</li>} */}
            {items.map((itemval, index ) => {
              return(
                <ToDoLists 
                  key={index} 
                  id={index}
                  text = {itemval}
                  onSelect={deleteItems}
                />
              )}
            )}           
          </ol>
        </div>
      
      </div>
      {/* <Clock /> */}
    </>
  )
};
export default App;
