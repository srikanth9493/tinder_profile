import React from "react";
import "./CreateProfile.css";
import axios from "./axios";
import { useHistory } from "react-router";

function CreateProfile() {
  let history = useHistory();
  let PostData = async (name, url) => {
    await axios
      .post("/api/tinder/cards", {
        name: name,
        imageUrl: url,
      })
      .then((res) => {
        console.log(res);
        history.push("/");
        history.go(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let image = e.target.image.value;
    console.log(name, image);
    PostData(name, image);
  };

  return (
    <div className="createprofile">
      <div className="createprofile__container">
        <h2>Add details here</h2>
        <form className="createprofile__form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input name="name"></input>
          <label>ImageUrl:</label>
          <input name="image"></input>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProfile;
