import React,{useState} from 'react'

const UseStateCounter = () => {
const [value,setValue] = useState(0)

const minusValue = function(){
    if(value > 0){
        setValue(value - 1)
    }else{
        setValue(0)
    }
}

const updateLater = function() {
setTimeout(()=>{
    setValue((prev) => prev + 1)
},1000)
}

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={minusValue}>
          DECREASE
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          RESET
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          INCREASE
        </button>
      </section>
      <section style = {{margin:'4rem 0'}}>
        <h2>TimeOut Function</h2>
        <h2>{value}</h2>
        <button className="button" onClick = {updateLater}>Update Later</button>
      </section>
    </>
  );
}

export default UseStateCounter