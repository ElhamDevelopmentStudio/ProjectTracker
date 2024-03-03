"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const productUpload = () => {
  return (
    <CldUploadWidget uploadPreset="lntkmdeo">
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default productUpload;
