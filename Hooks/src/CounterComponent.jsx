import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from './reduxtoolkit/CounterReducer';

const CounterComponent = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter is -- {count}</h3>
      <button onClick={()=>dispatch(increment())}>Add</button>
      <button onClick={()=>dispatch(decrement())}>Minus</button>
    </div>
  )
}

export default CounterComponent
