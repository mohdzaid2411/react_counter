import { useState } from 'react'    /* iske ander se hooks import hoke ate he | koi bhi hook use karoge to use {xyz, abc, etc} esi trah se lana hoga | hooks are used to updates variables in UI*/
import './App.css'



function App() {
  let [counter, setCounter] = useState(15)   //useState("A") --->"A" value can be anything function, object anything. | here counter is a variable whose value is 15 and setCounter is a function whose job is to propegate counter value in UI whereever counter is present.
  let addValue=()=>{
    if(counter!=20){
    counter=counter+1;
    setCounter(counter)
    }
  }
  let removeValue=()=>{
    if (counter!=0)
    setCounter(counter-1)
  }
  return (
    <>
    <h1>This is a Counter</h1>
    <br />
    <h2>Counter value is: {counter}</h2>
    <br />
    <button onClick={addValue} >increade</button>     {/* {addValue} this is a function and it is called inside {} but in js a function is called in "" */}
    <br />
    <br />
    <button onClick={removeValue}>decrease</button>
    </>
  )
}

export default App
