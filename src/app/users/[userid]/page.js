import React from "react";
import Link from "next/link";

async function getUser(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data;
}

export default async function Page({ params }) {
  console.log(params);
  const user = await getUser(params.userid);

  return (
    <div>
      
        {/* {
          user.map((item)=>{
            {item.id}
          })
        }
 */}

        {/* <h2>user page details</h2>
        <p>Id: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        Add more properties as needed */}
      
    </div>
  );
}
