import React, { useState, useReducer } from 'react';
import ModalName from './ModalName';
import { v4 as uuidv4 } from 'uuid';
import {reducer} from './Reducer'

const Index = () => {
  const [name, setName] = useState('');
  // const [people, setPeople] = useState([]);
  // const [isModal, setIsModal] = useState(false);

  const initialState = {
    people: [],
    isModalOpen: false,
    modalContent: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name) {
      const addName = { id: uuidv4(), name };
      dispatch({ type: 'ADD_PERSON', payload: addName });
      setName('');
    } else {
      dispatch({ type: 'NO_PERSON' });
    }
  };

  return (
    <>
      {state.isModalOpen && (
        <ModalName modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <div className="form_control">
        <form className="form" onSubmit={submitHandler}>
          <input
            type="text"
            name="userName"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn">
            ADD
          </button>
        </form>
      </div>

      {state.people.map((person) => {
        return (
          <div className="name" key={person.id}>
            <p>{person.name}</p>
            <button
              onClick={() =>
                dispatch({ type: 'DELETE_NAME', payload: person.id })
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
