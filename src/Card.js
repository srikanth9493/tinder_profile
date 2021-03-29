import axios from "./axios";
import React from "react";
import { Link,useHistory } from "react-router-dom";
import "./Card.css";

function Card({ Image, id, name }) {
  let handleButton = async () => {
    await axios
      .delete(`/api/tinder/delete/${id}`)
      .then((data) => {
        console.log(data);

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card">
      <Link to={`/api/details/${id}`}>
        <h1>{name}</h1>
        <img src={Image}></img>
        {/* <p>{id}</p> */}
      </Link>
      <button onClick={handleButton}>Delete</button>
    </div>
  );
}

export default Card;
