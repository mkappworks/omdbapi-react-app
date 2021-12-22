import axios from "axios";

const BaseApi = axios.create({
  baseURL: `http://www.omdbapi.com`,
  headers: {
    "Content-type": "application/json",
  },
});

export default BaseApi;
