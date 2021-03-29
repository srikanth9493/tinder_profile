import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Header() {
  const [searchData, setsearchData] = useState("");

  const [{ basket }, dispatch] = useStateValue();
  const getData = async (e) => {
    console.log(e.target.value);
    setsearchData(e.target.value);
    let v = e.target.value;
    if (v == "") {
      v = ".*";
    }
    // console.log(v);

    await axios.get(`/api/tinder/search/${v}`).then((data) => {
      console.log(data.data);
      dispatch({
        type: actionTypes.SEARCH_DATA,
        item: data.data,
      });
    });
  };

  return (
    <div>
      <div class="home__nav">
        <Link to="/">
          <h1>Tinder Profiles</h1>
        </Link>
        <div class="home__nav__search">
          <SearchIcon style={{ margin: "10px" }}></SearchIcon>
          <input placeholder="serch" onChange={getData}></input>
        </div>
        <Link to="/add">
          <button className="home__btn">Add Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
