import React, { useState } from 'react' 
import './index.css'
import TodoInput from './Components/TodoInput' 
import TodoList from './Components/TodoList'

function App() {
  const [listTodo,setListTodo]=useState([])  


  const addList=(inputText)=>{
       if(inputText!==""){
        setListTodo([...listTodo,inputText])
       }
  } 

  const deleteList=(key)=>{
    let newTodoList=[...listTodo] 
    newTodoList.splice(key,1) 
    setListTodo([...newTodoList])
  }

  return (
    <div className='main-container'> 
    <div className='center-container'>
        <TodoInput addList={addList}/> 
        {
          listTodo.map((listItem,i)=>{
            return (
              <TodoList item={listItem} key={i} index={i} deleteItem={deleteList}/>
            )
          })
        }
    </div>

    </div>
  )
}

export default App