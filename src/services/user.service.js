import axios from "axios";
const baseURL = "https://panel.gazlaleh.ir/v1";

export const getUserDetails = async () => {
  const token = localStorage.getItem("token");
  const response = axios.get(`${baseURL}/auth/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
