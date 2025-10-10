import React from 'react'

export default function TodoNew(props) {
    const {title, id, desc} = props.i;
  return (
    <div className='container'>
        <div className="card">
            <h3>{id}</h3>
            <p>{title}</p>
            <span>{desc}</span>
        </div>
        <button>
            <i className='fa fa-trash fa-2x'></i>
        </button>
      
    </div>
  )
}
