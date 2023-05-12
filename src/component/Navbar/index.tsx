import { Button } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div className="container px-4 md:px-0 md:mx-auto flex justify-between h-[5rem] items-center ">
      <p className="text-3xl font-semibold">
        <span className="text-yellow">B</span>
        log
      </p>
      <Button
        variant="contained"
        className="bg-yellow hover:bg-yellow text-black capitalize rounded-3xl px-12"
      >
        Login
      </Button>
    </div>
  );
};

export default Navbar;
