import React, { useState } from 'react'

function MyToDoList() {

  const [titles, setTitles] = useState([""]);
  const [newTitles, setNewTitles] = useState([]);

 function addTitle(){

  if(!titles){

    alert("Pls enter the title name")

  }

  else{
    setNewTitles([...newTitles,titles])
    setTitles("");
  }
  
}
const handleRemoveButton = (index)=>{
    
  const remove = newTitles.filter((item,indexItem)=>indexItem !==index);
  setNewTitles(remove)
}
  return (
    <div className='mytodolist'>
       
       <h1 className='heading'>Mytodolist</h1>
       <input className='input-box' type='text' placeholder='Enter the title'  onChange={(e) =>setTitles(e.target.value) } value={titles}></input>
       <button className='add-btn' onClick={()=>addTitle()}>Add todo</button>
    
  <ul>
    {
      newTitles.map((currItem, index) =>{
        return (
          
          <div className='mytodos' key={index}>
          <span className='text'>Title : {currItem} <button className='delete-btn' onClick={()=>handleRemoveButton(index)}>Delete</button></span>
          
          
          </div>
        )

      })
      }
        
      
    
  </ul>

    </div>
  )
}

export default MyToDoList