import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "./axios";
import Card from "./Card";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./Details";
import Home from "./Home";
import CreateProfile from "./CreateProfile";
import SearchIcon from "@material-ui/icons/Search";
import Header from "./Header";
import DeleteProfile from "./DeleteProfile";
function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(
        //"https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
        "/api/tinder/cards"
      )
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home data={data}></Home>
          </Route>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
          <Route path="/delete/:id">
            <DeleteProfile></DeleteProfile>
          </Route>
          <Route path="/add/" component={CreateProfile}></Route>
          {/* <Route path="/details/:id" component={Details}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
