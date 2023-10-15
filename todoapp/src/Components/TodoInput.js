import React, { useState } from 'react'

function TodoInput(props) { 
  const [inputText,setInputText]=useState('')
  return (
    <div className='input-container'>
      <input type='text' 
              placeholder='enter new todo' 
              className='input-box-todo'
              value={inputText}  
              onChange={(e)=>{
                setInputText(e.target.value)
              }}
              >  

      </input> 
      <button className='add-btn' onClick={()=>{
        props.addList(inputText) 
        setInputText("")
      }}> + </button>
    </div>
  )
}

export default TodoInput