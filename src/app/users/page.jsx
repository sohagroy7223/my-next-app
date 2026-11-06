import React from "react";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
  return (
    <div>
      <h3>this is users page</h3>
    </div>
  );
};

export default UsersPage;
