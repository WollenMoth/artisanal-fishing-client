import axios from "axios";
export default axios.create({
  baseURL: "https://apiartisanalfishing.azurewebsites.net/",
  headers: {
    "Content-type": "application/json",
  },
});
