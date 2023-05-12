import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  const redirect = () => {
    if (path.includes("/blogs")) {
      router.push("/createBlog");
    } else {
      router.push("/blogs");
    }
  };
  return (
    <div className="container sticky top-0 bg-white z-10 px-4 md:px-0 md:mx-auto flex justify-between h-[5rem] items-center ">
      <p
        className="text-3xl font-semibold cursor-pointer"
        onClick={() => router.push("/")}
      >
        <span className="text-yellow">B</span>
        log
      </p>
      <Button
        onClick={redirect}
        variant="contained"
        className="bg-yellow hover:bg-yellow text-black capitalize rounded-3xl px-12"
      >
        {path.includes("/blogs") ? "Write Blogs" : "Read Blogs"}
      </Button>
    </div>
  );
};

export default Navbar;
