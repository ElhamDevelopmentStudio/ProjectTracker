import React from "react";

interface Users {
  id: number;
  name: string;
  email: string;
}

const users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: Users[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        <table className="table table-bordered">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </thead>

          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table>
      </ul>
    </>
  );
};

export default users;
