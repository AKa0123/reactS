import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let[counter,setCounter]=useState(0)

   const add= ()=>{
        setCounter(counter+1)
        
   }
   const remove=()=>{
    setCounter(counter-1)
   }
  return (
    <>
      
      <h1>akash saroj</h1>
      <button onClick={add}>add {counter}</button>
      <button onClick={remove} >remove{counter}</button>
      
      
      
    </>
  )
}

export default App
