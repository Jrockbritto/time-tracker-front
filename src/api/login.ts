import { IOnSubmitForm } from "../pages/Login/types/loginForm.types";
import api from "./config/api";

export async function login(payload: IOnSubmitForm) {
  const url = "/auth/login";
  const { data } = await api.post(url, payload);
  sessionStorage.setItem("user", JSON.stringify(data.user));
  return data.user;
}
