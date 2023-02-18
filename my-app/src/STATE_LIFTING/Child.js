import React from 'react'

const child = (props)=>{
    const data = "I am from child component";
    props.onChildData(data);
}

export const Child = () => {
  return (
    <div>
        <p>I am child component</p>
       
    </div>
  )
}
