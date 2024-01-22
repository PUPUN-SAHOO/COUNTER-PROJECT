import { useState } from 'react'

function App() {

 
  let [counter,setcounter]= useState(0)

const addvalue=()=>{
  if(counter < 19){
     setcounter(counter + 1)
  }
  console.log("click me",counter);
}
const removevalue=()=>{
  
  if(counter>0){
     setcounter(counter-1)
  }
  console.log("click me",counter);
}


  return (
    <>
     <h1>LAXMI NARAYAN SAHOO</h1>
     <button onClick={addvalue}>click me-{counter}</button>
     
     <button onClick={removevalue}>click me-{counter}</button>

    </>
  )
  }


export default App