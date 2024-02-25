"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NewUser = () => {
  const router = useRouter();

  const handleCreate = () => {
    router.push("/users");
  };
  return (
    <button onClick={handleCreate} className="btn btn-primary">
      Create
    </button>
  );
};

export default NewUser;
