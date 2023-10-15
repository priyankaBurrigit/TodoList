import React from 'react'

function TodoList(props) {
  return (
    <div className='list-item'>
      {props.item} 
      <span className='icons'>
      <i class="fa fa-trash icon-delete" aria-hidden="true" onClick={(e)=>{
        props.deleteItem(props.index)
      }}></i>
      </span>
    </div>
  )
}

export default TodoList