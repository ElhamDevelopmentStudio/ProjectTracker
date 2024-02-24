import React, { ReactNode } from "react";
import NavBar from "../NavBar";

interface Props {
  children: ReactNode;
}

const adminLayout = ({ children }: Props) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default adminLayout;
