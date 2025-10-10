import React from 'react'
import Todo from './Todo';

const demo = `
1. PROJECT STRACTURE (CPMPONENTS TREE)
        a Home.jsx → parent component
        b Todo.jsx → middle (list rendering) component
        c TodoNew.jsx → child (individual card) 

        (parents components -> child components -> individual child componets)
 
2. Static Data Rendering(Array of Objects) তৈরি কর
        Home থেকে Todo component-এ data পাঠাও।

 3. .map() ব্যবহার করে একাধিক todo dynamically render কর।
 4. props থেকে data গুলো extract কর।              
`

const demoTodo = [
    {
        id: 1,
        title: "Title one",
        desc: "i am title one description",

    },
    {
        id: 2,
        title: "Title Two",
        desc: "i am title Two description",

    },

];

export default function Home() {
  return (
    <>
    <h1>TODO APP</h1>
    <pre>{demo}</pre>
    <Todo  todoInfo= {demoTodo}/>
      
    </>
  )
}
