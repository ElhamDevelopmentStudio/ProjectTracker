import React from "react";
import { sort } from "fast-sort";
import UsersTable from "./UsersTable";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const users = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UsersTable sortOrder={sortOrder} />
    </>
  );
};

export default users;
