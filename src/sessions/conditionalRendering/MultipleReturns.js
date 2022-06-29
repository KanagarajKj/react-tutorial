import React,{useState,useEffect} from 'react'

const url = 'https://api.github.com/users/kanagarajkj';

const MultipleReturns = () => {
const [isLoading,setIsLoading] = useState(true)
const [isError,setIsError] = useState(true)
const [user,setUser] = useState('No User')

useEffect(()=>{
    fetch(url)
    .then((resp) => resp.json())
    .then((user)=>{
        const { login } = user;
        setUser(login);
        setIsLoading(false)
        setIsError(false)
    })
    .catch((err) => console.log(err));
},[]);

if(isLoading){
      return (
        <>
          <h1>loading...</h1>
        </>
      );
}
 if(isError){
    return(
        <>
        <h2>Error Occured</h2>
        </>
    )
 }


return(
    <>
    <h2>{user}</h2>
    </>
)

}

export default MultipleReturns