import axios from "axios";

const api = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com",

  headers: {
    "x-rapidapi-key": "d0e15ac2c8msh52e217e5beedbdap125aa1jsnb7ae30d32411",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});
export default api;
