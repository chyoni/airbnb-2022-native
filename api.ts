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

export interface IPartialUpdate {
  bio?: string;
  address?: string;
  job?: string;
}

const callApi = async (
  method: string,
  path: string,
  data?: any,
  jwt?: string,
  params?: any
) => {
  let headers;
  if (jwt) {
    headers = {
      Authorization: `Bearer ${jwt}`,
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
    if (params) {
      return axios[method](fullUrl, { headers, params });
    }
    return axios[method](fullUrl, { headers });
  } else if (method === "post" || method === "put") {
    return axios[method](fullUrl, data, { headers });
  }
};

export default {
  createAccount: (form: ICreateAccount) => callApi("post", "/users/", form),
  login: (form: ILogin) => callApi("post", "/users/login/", form),
  rooms: (page: number = 1, token?: string) =>
    callApi("get", `/rooms/?page=${page}`, null, token),
  favs: (token: string) => callApi("get", `/users/me/favs/`, null, token),
  toggleFavs: (roomId: number, token: string) =>
    callApi("put", "/users/me/favs/", { pk: roomId }, token),
  search: (params: any, token?: string) =>
    callApi("get", "/rooms/search/", null, token, params),
  me: (token: string) => callApi("get", "/users/me/", null, token, null),
  editPartial: (form: IPartialUpdate, token: string) =>
    callApi("put", "/users/me/", form, token, null),
};
