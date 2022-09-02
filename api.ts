import axios from "axios";

export interface ICreateAccount {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}

export interface ILogin {
  username: string;
  password: string;
}

const callApi = async (
  method: string,
  path: string,
  data?: any,
  jwt?: string
) => {
  let headers;
  if (jwt) {
    headers = {
      Authorization: jwt,
      "Content-Type": "application/json",
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }
  const baseUrl = "http://127.0.0.1:8000/api/v1";
  const fullUrl = `${baseUrl}${path}`;

  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers });
  } else if (method === "post" || method === "put") {
    return axios[method](fullUrl, data, { headers });
  }
};

export default {
  createAccount: (form: ICreateAccount) => callApi("post", "/users/", form),
  login: (form: ILogin) => callApi("post", "/users/login/", form),
  rooms: (page: number) => callApi("get", `/rooms/?page=${page}`),
};
