import withAuth from "@/component/withAuth";
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
const CreateBlog = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <p className="text-2xl font-semibold my-6">Create Blogs</p>
      <div className="rounded border border-dashed border-black h-[30vh] flex justify-center items-center flex-col">
        <div className="relative h-[100px] w-[100px]">
          <Image
            className="opacity-60"
            src="/uploadImage.png"
            alt="uploadimage"
            layout="fill"
          />
        </div>
        <p className="my-4 opacity-60">Upload Image</p>
      </div>
      <div className="flex flex-col my-12 gap-8">
        <TextField
          id="standard-basic"
          label="Title"
          variant="outlined"
          placeholder="Write your title"
        />
        <TextField
          id="standard-basic"
          label="Content"
          variant="outlined"
          placeholder="Write your blog post"
          minRows={20}
          multiline
        />
      </div>
      <div className="float-right mb-12">
        <Button
          className="bg-yellow text-black hover:text-yellow capitalize"
          variant="contained"
        >
          Publish
        </Button>
      </div>
    </div>
  );
};

export default withAuth(CreateBlog);
