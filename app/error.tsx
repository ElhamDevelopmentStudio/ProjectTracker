"use client";
import React from "react";
import Error from "next/error";

interface Props {
  error: Error;
  retry: () => void;
}

const CustomErrorPage = ({ error, retry }: Props) => {
  console.log("Error: ", error);
  return (
    <>
      <button className="btn" onClick={() => retry()}>
        Retry
      </button>
      <div>An Unexpected Error Has Occured</div>
    </>
  );
};

export default CustomErrorPage;
