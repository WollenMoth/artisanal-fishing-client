import axios from "axios";
export default axios.create({
  baseURL: "https://artisanal-fishing-api.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
