import React, { useState } from 'react';

const Form = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setpeople] = useState([]);
  const randomId = Math.trunc(Math.random() * 10000);

  const formHandler = (e) => {
    e.preventDefault();

    if (username && email) {
      const person = { id: randomId, username: username, email: email };
      setpeople((people) => {
        return [...people, person];
      });
      setUserName('');
      setEmail('');
    } else {
      console.log('Inputs Cannot be Empty');
    }
  };

  return (
    <>
      <form className="form" onSubmit={formHandler}>
        <div className="form_control">
          <label htmlFor="username">UserName: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form_control">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {people.map((person) => {
        const { username, email } = person;
        return (
          <div key={randomId} className="item">
            <h4>{username}</h4>
            <h4>{email}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Form;
