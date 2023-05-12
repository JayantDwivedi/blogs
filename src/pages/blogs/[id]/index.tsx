import React from "react";

import withAuth from "@/component/withAuth";
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import { blogsData } from "@/constant/dummyData";

const IndividualBlog = () => {
  const blogNumber = 0;
  return (
    <div className="container mx-auto px-4 md:px-0">
      <p className="text-2xl font-semibold my-6">
        {blogsData[blogNumber].title}
      </p>
      <div className="rounded border border-dashed border-black h-[30vh] flex justify-center items-center flex-col">
        <div className="relative h-[40vh] w-[60%]">
          <Image
            className=""
            src="/nature.jpeg"
            alt="natureImage"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <p className="opacity-60 text-base">
          By {blogsData[blogNumber].author}
        </p>
        <p>{blogsData[blogNumber].desc}</p>
      </div>
    </div>
  );
};

export default withAuth(IndividualBlog);
