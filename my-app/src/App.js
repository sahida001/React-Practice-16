import React from 'react'
import { Child } from './STATE_LIFTING/Child'

export default function App() {
  const data = "I am from parent (app)";
  const handleChildData=(childData)=>{
    console.log(childData);

  }
  return (
    <div>
      <Child data = {data} onChildData = {handleChildData}/>
    </div>
  )
}
