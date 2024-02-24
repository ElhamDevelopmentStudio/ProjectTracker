"use client";
import Link from "next/link";
import React from "react";

const AddToCartButton = () => {
  return <Link href="/"> <button onClick={() => console.log("somehting")}>Add to cart</button></Link>;
};

export default AddToCartButton;
