import React,{useState} from 'react'

const ShortCircuiting = () => {
    const [isError,setIsError] = useState(true)
  return (
    <>
      <h1>{isError && 'kanagaraj'}</h1>

    </>
  );
}

export default ShortCircuiting