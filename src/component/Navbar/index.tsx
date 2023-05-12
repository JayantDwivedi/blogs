import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "@/utils/localStorage";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    clearLocalStorage();
    setAnchorEl(null);
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
      <div className="flex gap-4">
        <Button
          onClick={redirect}
          variant="contained"
          className="bg-yellow hover:bg-yellow text-black capitalize rounded-3xl px-12"
        >
          {path.includes("/blogs") ? "Write Blogs" : "Read Blogs"}
        </Button>
        {getLocalStorage("otp") !== null && (
          <>
            <Avatar
              onClick={(e: any) => handleClick(e)}
              className="cursor-pointer"
              sx={{ background: "orange" }}
            >
              JD
            </Avatar>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
