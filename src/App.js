import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [ users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users?_limit=5")
    .then(res => {
      console.log(res.data)
      setUsers(res.data)
    })
    .catch(error => console.log(error));
    
  }, []);

  return (
    <div className="App">
      <h1>Fetch Data With Axios</h1>
      {users && users.map((user) => {
          return (
            <div className="Users-container" key={user.id}>
              <p className="Name">{user.name}</p>
              <p className="Phone-number">{user.phone}</p>
              <div className="Address">
                <p className="Email">{user.email}</p>
                <p className="Email">{user.address.street}</p>
                <p className="Email">{user.address.suite}</p>
                <p className="Email">{user.address.city}</p>
                <p className="Email">{user.address.zipcode}</p>
                <p className="Email">{user.address.geo.lat}</p>
              </div>
            </div>
        );
      })}
    </div>
  );
}

export default App;