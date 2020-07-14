import axios from "axios";

const configApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default configApi;
