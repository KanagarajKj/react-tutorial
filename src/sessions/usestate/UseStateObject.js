import React,{useState} from 'react'

const UseStateObject = () => {
const [person, setPerson] = useState({
  name: 'Raj',
  age: 25,
  city:'Theni',
  profession:'Developer'
});

const updateUser = function(){
    setPerson({
        name:'Kanagaraj',
        age:24,
    })
}
    return (
      <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.city}</h3>
        <h3>{person.profession}</h3>
        <button className="btn" onClick={updateUser}>Upadate USER</button>
      </div>
    );
}

export default UseStateObject