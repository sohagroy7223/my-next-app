import Link from "next/link";
import React from "react";

export const metadata = {
  title: "users",
  description: "All users info ",
};

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-3 mt-10">
        {users.map((user) => (
          <div key={user.id} className="card card-border bg-base-100 ">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>

              <Link href={`users/${user.id}`} className="btn bg-gray-700">
                view details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
