"use client";
import React, { useState } from "react";
import "./../style.css";

export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users",{
      method:"post",
      body:JSON.stringify({name,age,email})
    });
    // console.log(name, age, email);
    response = await response.json();
    console.log(response);
    if(response.success){
      alert("New user Created");
    }else{
      alert("Some error with data.please check");
    }
  };

  return (
    <div className="add-user">
      <h1>Add New User</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        className="input-field"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Age"
        value={age}
        className="input-field"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        className="input-field"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="button" className="btn" onClick={addUser}>
        Add User
      </button>
    </div>
  );
}
