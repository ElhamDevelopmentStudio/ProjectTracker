import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const UsersDetailPage = ({ params: { id } }: Props) => {
  return <div>Detail of: {id}</div>;
};

export default UsersDetailPage;
