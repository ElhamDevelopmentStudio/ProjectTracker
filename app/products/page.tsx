"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { sources } from "next/dist/compiled/webpack/webpack";

interface CloudinaryResult {
  public_id: string;
}

const ProductUpload = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      <CldImage
        src={publicId}
        height={180}
        width={200}
        alt="Cloudinary Image"
      />
      <CldUploadWidget
        uploadPreset="lntkmdeo"
        onUpload={(results, widget) => {
          console.log(results);
          if (results.event !== "success") return;
          const info = results.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        options={{
          sources: ["local"],
          multiple: false,
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default ProductUpload;
