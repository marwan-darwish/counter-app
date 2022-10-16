import React, { useState } from 'react'
import Button from './Button'
import CounterValue from './CounterValue'
const CounterActions = () => {
    const[count,setCount]=useState(0)
    const [error,setError]=useState(false)
    const increaseByOne=()=>{
        if(error===true){
            setError(false)
        }
        setCount((prevcount)=>prevcount+1)

    }
    const decreaseByOne=()=>{
        if(count!==0){
        setCount((prevcount)=>prevcount-1)
        } else{
            setError(true)
        }
    }
  return (
    <>
        <CounterValue value={count}/>
        <div className='btn__container'>
<Button changeValue={increaseByOne}>+</Button>
<Button changeValue={decreaseByOne}>-</Button>
</div>
<p>{error?"value cant be less than zero ":""}</p>
</>
  )
}

export default CounterActions