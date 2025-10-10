import React from 'react'
import TodoNew from './TodoNew';


export default function Todo(props) {
    console.log(props.todoInfo);
  return (
    <>
    <section>
        {props.todoInfo.map((i) =>
        <TodoNew i={i} key={i.id}/>
        )}
    </section>
      
    </>
  )
}

//Todo -> Home
