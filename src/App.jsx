import React, { useState } from 'react';


function App() {
  const[inputList, setInputList] = useState();
  const[Items, setItems] =useState([]);


  const itemEvent = (event) =>{
    console.log(event.target.value)
    setInputList(event.target.value)
  }

  const listOfItems = ()=>{
    setItems((oldItems)=>{
      return[...oldItems, inputList];
    });
    setInputList('')

  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>To Do Lsit</h1>
          <br/>
          <input type="text" placeholder='Add An Item'
            onChange={itemEvent}
            value={inputList}
    
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {Items.map((itemval) =>{
              return <li>{itemval}</li>
            } )}
          </ol>
        </div>

      </div>
    </>
  );
};

export default App;
