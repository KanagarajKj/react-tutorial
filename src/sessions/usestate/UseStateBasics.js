import React, {useState} from 'react'

const UseStateBasics = () => {
    const [username,setusername] = useState('Kanagaraj');

    const clickHandler = ()=>{
        if(username === 'Kanagaraj'){
            setusername('Kj')
        }else {
            setusername('Kanagaraj')
        }
    }
  return (
    <div>
      Use State Basics
      <h2>{username}</h2>
      <button className="button" type="button" onClick={clickHandler}>Click to Change</button>
    </div>
  );
}

export default UseStateBasics