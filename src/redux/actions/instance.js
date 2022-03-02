import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoekn";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: "https://orable-driver-be.herokuapp.com/",
  withCredentials: true,
  // headers: {
  //   // "Access-Control-Allow-Origin": "http://127.0.0.1:8001",
  //   // "Access-Control-Allow-Headers": "*",
  //   // "Access-Control-Allow-Credentials": true,
  // },
});

export default instance;
