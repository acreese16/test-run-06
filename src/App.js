import './App.css';
import React, {useEffect, useState} from "react";
import ToDos from './ToDos';


function App() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const abortControl = new AbortController();

    const loadUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users?userId=1", {signal: abortControl.signal});
      const userFromAPI = await response.json();
      setUsers(userFromAPI);
    };

    loadUsers();

    return () => {
      abortControl.abort();
    }
  }, []);

  return (
    <div className="App">
      {users.map((user, index) => ( <ToDos  key={index} name={user.name} userId={user.id}  />))}
    </div>

  );
}

export default App;
