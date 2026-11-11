import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="btn" href="/">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
