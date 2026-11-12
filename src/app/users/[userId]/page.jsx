import Link from "next/link";
import React, { Suspense } from "react";

export const metadata = {
  title: "userinfo",
  description: "...",
};
const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();

  return (
    <Suspense fallback={"loading"}>
      <div className=" flex bg-base-100 justify-center  mx-auto items-center mt-10">
        <div className="card-body">
          <Link className="btn rounded-2xl bg-primary" href="/">
            back to home page
          </Link>
          <h2 className="card-title"> name: {user.name}</h2>
          <p>email: {user.email}</p>

          <p>phone: {user.phone}</p>
          <div>company name: {user.company.name}</div>
          <div>website: {user.website}</div>
          <div>City: {user.address.city}</div>
          <div>zipcode: {user.address.zipcode}</div>
        </div>
      </div>
    </Suspense>
  );
};

export default UserDetailsPage;
