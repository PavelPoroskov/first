import React, {useState, useCallback} from 'react'
import Counter from '../Counter'

export const doIncrement = (counter) => counter + 1

export const doDecrement = (counter) => counter - 1


export default
function CounterControl(props) {
  const [counter, setCounter] = useState(0)

  const increment = useCallback( () => {
    setCounter(doIncrement)
  }, [] )

  return (
    <div>
      <h1>My Counter</h1>
      <Counter counter={counter} />

      <button
        type="button"
        onClick={increment}
      >
        Increment
      </button>

      <button
        type="button"
        onClick={() => {setCounter(doDecrement)}}
      >
        Decrement
      </button>
    </div>
  )
}