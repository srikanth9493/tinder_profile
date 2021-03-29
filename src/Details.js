import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./CreateProfile.css";
import axios from "./axios";

function Details() {
  let { id } = useParams();
  const [data, setdata] = useState("");
  let history = useHistory();

  useEffect(() => {
    let getData = async () => {
      await axios
        .get(`/api/tinder/details/${id}`, {
          // params: {
          //   id: id,
          // },
        })
        .then((data) => {
          console.log(data);
          setdata(data.data);
          //  setdata(data)
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  let handleSubmit = async (e) => {
    console.log(e.target.name, e.target.image);
    //     name: String,
    // imageUrl: String,
    // id:String
    // dfd
    e.preventDefault();
    await axios
      .put(`/api/tinder/update/${id}`, {
        name: e.target.name.value,
        imageUrl: e.target.image.value,
      })
      .then(() => {
        history.push("/");
        history.go(0);
      });
    // history.push("/");
  };

  console.log(id, "hai");
  return (
    <div>
      <h1>Hai Hello {id}</h1>
      <div className="createprofile">
        <div className="createprofile__container">
          <form className="createprofile__form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              name="name"
              value={data.name}
              onChange={(e) => setdata(e.currentTarget.value)}
            ></input>
            <label>ImageUrl:</label>
            <input
              name="image"
              value={data.imageUrl}
              onChange={(e) => setdata(e.currentTarget.value)}
            ></input>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Details;
