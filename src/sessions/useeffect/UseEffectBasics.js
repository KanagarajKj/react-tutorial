import React,{useState,useEffect} from 'react'

const UseEffectBasics = () => {

    const [value,setValue] = useState(0)

useEffect(()=>{
    if(value >= 1){
        document.title = `Value - ${value}`
    }
},[])

  return (
    <>
    <h2>{value}</h2>
    <button type='button' className='button' onClick = {() => setValue(value+1)}>INCREASE</button>
    </>
  )
}

export default UseEffectBasics