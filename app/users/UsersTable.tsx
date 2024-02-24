import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";
import { getSupportedBrowsers } from "next/dist/build/utils";

interface Users {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UsersTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: Users[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email"
      ? (user) => user.email
      : sortOrder === "name"
      ? (user) => user.name
      : (user) => user.id
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=id">ID</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
