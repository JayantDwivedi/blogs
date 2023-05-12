import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const BlogCard = ({
  id,
  imageUrl,
  title,
  author,
  desc,
}: {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
  desc: string;
}) => {
  const router = useRouter();
  return (
    <div
      className="h-[20vh] border-1 border border-yellow flex p-4 rounded-xl my-12 cursor-pointer drop-shadow-xl"
      onClick={() => router.push(`/blogs/${id}`)}
    >
      <div className="relative aspect-video w-1/8 h-full">
        <Image
          className="rounded-xl"
          src={imageUrl}
          alt="natureImage"
          layout="fill"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-medium mx-4">{title}</p>
        <p className="text-base opacity-60 font-medium mx-4">By {author}</p>
        <p className="text-base font-medium mx-4 line-clamp-3">{desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
