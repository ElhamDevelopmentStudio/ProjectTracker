import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const UsersDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>Detail of: {id}</div>;
};

export default UsersDetailPage;
