import React, { useState, useEffect } from 'react';

const CounterUseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 3000);
    });   // }, []); Runs only on the first render

  
    return <h1>I've rendered {count} times!</h1>;
}

export default CounterUseEffect