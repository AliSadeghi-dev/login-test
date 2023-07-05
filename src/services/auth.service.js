import axios from "axios";

const baseURL = "https://panel.gazlaleh.ir/v1";

export const getAuthCode = async (data) => {
  const response = await axios.post(
    `${baseURL}/auth/login`,
    JSON.stringify(data),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const verifyUser = async (data) => {
  const response = await axios.post(
    `${baseURL}/auth/verify`,
    JSON.stringify(data),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 200 && response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response;
};
