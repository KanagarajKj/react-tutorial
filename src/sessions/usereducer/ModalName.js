import React,{useEffect} from 'react';

const ModalName = ({ modalContent, closeModal }) => {
  useEffect(()=>{
    const modalClose = setTimeout(() => {
      closeModal();
    }, 2000);

    return()=>clearTimeout(modalClose)
  })
  return (
    <>
      <h2>{modalContent}</h2>
    </>
  );
};

export default ModalName;
