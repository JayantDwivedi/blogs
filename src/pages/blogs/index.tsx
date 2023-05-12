import BlogCard from "@/component/BlogCard";
import { blogsData } from "@/constant/dummyData";
import React from "react";

const blogs = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <p className="text-2xl font-semibold my-6">All Blogs</p>
      {blogsData.map((blog: any) => {
        return (
          <BlogCard
            key={blog.id}
            id={blog.id}
            imageUrl={blog.imageUrl}
            title={blog.title}
            author={blog.author}
            desc={blog.desc}
          />
        );
      })}
    </div>
  );
};

export default blogs;
