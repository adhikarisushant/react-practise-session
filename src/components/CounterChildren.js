const CounterChildren = ({ incrementCount, decrementCount }) => {
    return (
        <div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',  
          marginRight: '5px',
          backgroundColor: 'green',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={incrementCount}>Increment</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'red',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={decrementCount}>Decrement</button>
      </div>
    )
}

export default CounterChildren
