import React, { useState } from "react";

// Functionality:
//Users load from https://jsonplaceholder.typicode.com/users and are displayed on the page.
//The page displays the name of the user and the title if the completed valus is false of the toDo
//When the name is clicked, the users toDos are fetched from https://jsonplaceholder.typicode.com/users/${userId}/todos.
// The page displays the name property and all the uncompleted toDos for the user on the page after the name is clicked

export default function ToDos({ userId, name,  }) {
  const [toDo, setToDo] = useState([]);
  console.log(toDo);

  const nameClick = async (event) => {
      console.log(name);
    event.preventDefault();


    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`
    );
    const toDoFromAPI = await response.json();
    setToDo(toDoFromAPI);
  };

  return (
    <div>
      <h2 onClick={nameClick}>{name}</h2>
      <ul>
      {toDo.map((toDos) => (<li key={toDos.id}>{toDos.completed === false ? toDos.title : null}</li>))}
      </ul>
      <p>{/*completed === false ? title : null*/}</p>
    </div>
  );
}
