import axios from "axios";
const instance = axios.create({
  baseURL: "https://profilezensarchallange.herokuapp.com/",
});

export default instance;
