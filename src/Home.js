import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import Card from "./Card";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Home.css";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
const useStyles = makeStyles({
  root: {
    width: 345,
    padding: 20,
    margin: 20,
  },
});

function Home({ data }) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  let { id } = useParams();

  let hanldeDelete = (e) => {
    console.log(id);
    axios.delete(`/api/tinder/delete/:${id}`);
  };
  useEffect(() => {
    dispatch({
      type: actionTypes.SEARCH_DATA,
      item: ".*",
    });
    console.log(basket);
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        {data.map((item) => (
          <Card className={classes.root} id={item._id}>
            <Link to={`/details/${item._id}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile" 
                  height="200"
                  image={item.imageUrl}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>

            <Link to={`/delete/${item._id}`}>
              <button>Delete Profile</button>
            </Link>
          </Card>

          // <Card
          //   key={item._id}
          //   // Image={item.Image}
          //   Image={item.imageUrl}
          //   name={item.name}
          //   //   id={item._id}
          //   id={item._id}
          // ></Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
