"use client";
import React, { useEffect, useState } from "react";
import "./../../../style.css";
export default function Page({ params }) {
  let id = params.userid;
  console.log(id);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getuserDetails();
  }, []);
  const getuserDetails = async () => {
    let data = await fetch("http://localhost:3000/users/" + id);
    data = await data.json();
    setName(data.result.name);
  };

  return (
    <div>
      <h1>Update user Details</h1>
      <input
        type="text"
        className="input-field"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn">
        update user
      </button>
    </div>
  );
}
