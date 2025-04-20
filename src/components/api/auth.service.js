import axios from "axios";

const API_URL = "http://localhost:9090/api/auth/";

const register = (username, password, email, name, phone) => {
  return axios.post(API_URL + "register", {
    username,
    password,
    email,
    name,
    phone,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((res) => {
      console.log("res.data.accessToken " + res.data.accessToken);
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
