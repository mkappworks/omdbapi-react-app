import axios from "axios";

const BaseApi = axios.create({
  baseURL: "http://www.omdbapi.com",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Origin": "http://www.omdbapi.com",
  },
});

export default BaseApi;
