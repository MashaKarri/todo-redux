import axios from "axios";

const API = axios.create({
  baseURL: "https://6ab2a1e15b9b60f39d34f577.mockapi.io/todo",
});
API.get("/tasks");
