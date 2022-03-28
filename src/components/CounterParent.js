import React, { useState } from "react";
import CounterChildren from "./CounterChildren";
  
  
const CounterParent = () => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0)
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1)
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}>
      Counter App
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>
      <CounterChildren incrementCount={handleClick1} decrementCount={handleClick2} />
    </div>
  )
}
  
export default CounterParent