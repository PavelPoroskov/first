import React, {useState, useCallback, useEffect} from 'react'
import Counter from '../Counter'

export const doIncrement = (counter) => counter + 1

export const doDecrement = (counter) => counter - 1

// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
// }

// const localfetch = (arData) => {
//   return wait(getRandomIntInclusive(100, 2000)).then(() => arData)
// }

export default
function CounterControl(props) {
  const [counter, setCounter] = useState(0)
  const [list, setList] = useState([])

  const increment = useCallback( () => {
    setCounter(doIncrement)
//     console.log(`CounterControl/increment`)
// //    console.log(`CounterControl/increment counter=${counter}`)
  }, [] )

  const asyncFetch = async () => {
    try{
      // let items = await localfetch([ 'item1', 'item 2', 'item 3', 'item 4' ])
      let file = await fetch('/items.json')
      // console.log('file')
      // console.log(file)
      let items = await file.json()
      // console.log('items')
      // console.log(items)
      setList(items)
    }catch (e){

    }
  }

  useEffect( () => {
    asyncFetch()
  }, [] )

  return (
    <div>
      <h1>My Counter</h1>
      <Counter counter={counter} />

      <button
        id='btn-dec'
        data-testid='btn-dec'
        onClick={() => {setCounter(doDecrement)}}
      >
        Decrement
      </button>

      <button
        id='btn-inc'
        type="button"
        data-testid='btn-inc'
        onClick={increment}
      >
        Increment
      </button>

      {list && list.length && <div data-testid='list-fetched'>list-fetched</div>}
      
      <ul data-testid='list'>
      {list.map( (item,ind) => <li key={ind} data-testid='list-item'>{item}</li> )}
      </ul>
    </div>
  )
}