import React from "react";

export default function Card({ item }) {
  return (
    <div className="card-con" style={{ width: "18rem", height: "18rem" }}>
      <div className="outer">
        <img src={item.img} style={{ height: "18rem", width: "18rem" }} alt='' />
        <div className="inner">
          <h1>Name: {item.name}</h1>
          <p>Occupation: {item.occupation[0]}</p>
          <p>Status: {item.status}</p>
          <p>Portrayed By: {item.portrayed}</p>
        </div>
      </div>
    </div>
  );
}
