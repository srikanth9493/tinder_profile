import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import "./DeleteProfile.css";
import axios from "./axios";

function DeleteProfile() {
  let { id } = useParams();
  let history = useHistory();
  const [data, setdata] = useState("");
  let handleDelete = async () => {
    console.log(id, "delete");
    await axios
      .delete(`/api/tinder/delete/${id}`)
      .then((data) => {
        console.log(data, "deleted");
      })
      .then((data) => {
        history.push("/");
        // history.go(0);
        console.log(data);
      });
  };

  useEffect(() => {
    let getData = async () => {
      await axios
        .get(`/api/tinder/details/${id}`, {
          // params: {
          //   id: id,
          // },
        })
        .then((data) => {
          console.log(data.data);
          setdata(data.data);
          //  setdata(data)
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return (
    <div className="createprofile">
      <div className="deletprofile  createprofile__container">
        <div className="deletprofile__details">
          <img src={data.imageUrl}></img>
          <h1>Are you sure to delete {data.name}? </h1>
        </div>
        <div class="delete">
          <button onClick={handleDelete}> Delete Profile</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProfile;
