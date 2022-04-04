import React, { useState, useEffect } from "react";
import "./App.css";
import "./person.css";
const personsArr = [
  { name: "Rubel", job: "Doctor" },
  { name: "Jon", job: "Farmer" },
  { name: "Joy", job: "Teacher" }
];
function Person(props) {
  return (
    <article className="person">
      <h2>Name: {props.name}</h2>
      <p>Job: {props.job}</p>
    </article>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="">Count: {count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="">
      <h3 className="">Current Users {users.length}</h3>
      <ul className="">
        {users.map((user, i) => (
          <li key={"user-" + i}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {personsArr.map((p, i) => (
          <Person name={p.name} job={p.job} key={"k-" + i} />
        ))}
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}

export default App;
