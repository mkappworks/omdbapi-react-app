import axios from "axios";

const BaseApi = axios.create({
  baseURL: "https://www.omdbapi.com",
  headers: {
    "Content-type": "application/json"
  },
});

export default BaseApi;
