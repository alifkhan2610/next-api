/* eslint-disable react/jsx-key */
import Link from "next/link";
import React from "react";
import './../style.css'

export async function getUser() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export async function page() {
  const users = await getUser();
  console.log(users);
  return (
    <div>
      <h1>Users Page</h1>
   
      {
        users.map((item)=>{
          <div>
            {item.id}
          </div>
        })
      }

      {/* {
        users.map((item, index) => (
          <div className="user-item">
            <span> <Link href={`users/${item.id}`} key={index}>{item.name}</Link> </span> 
            <span> <Link href={`users/${item.id}/update`}  key={index}>Edit </Link> </span>
          </div> 
           */}
      
    </div> 
  )
}
