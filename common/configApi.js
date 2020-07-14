import axios from "axios";
export const methodPost = async (url, request) => {
  return await axios.post(url, request, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
