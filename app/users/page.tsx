import React from "react";
import AddToCart from "../components/AddToCart";

interface Users {
  id: number;
  name: string;
}


const users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",
  {
    next: {revalidate: 10}
  });
  const users: Users[] = await res.json();

  return <>
  <p>{new Date().toLocaleTimeString()}</p>
    <h1>Users</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    <AddToCart />
  </>;
};

export default users;
