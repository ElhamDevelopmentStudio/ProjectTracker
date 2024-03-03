import React, { Suspense } from "react";
import { sort } from "fast-sort";
import UsersTable from "./UsersTable";
import Link from "next/link";
import { CldUploadWidget } from "next-cloudinary";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const users = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href={`/users/new`} className="btn">
        New User
      </Link>

      <Suspense fallback={<div>Loading...</div>}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default users;
