"use client";
import Link from "next/link";
import React from "react";

const AddToCartButton = () => {
  return (
    <Link href="/users">
      {" "}
      <button
        className="btn btn-primary"
        onClick={() => console.log("somehting")}
      >
        Add to cart
      </button>
    </Link>
  );
};

export default AddToCartButton;
