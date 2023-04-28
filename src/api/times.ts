import { IFetchTimes, ITime } from "../pages/Times/types/time.types";
import api from "./config/api";

export async function times(payload: IFetchTimes): Promise<ITime[]> {
  const { id } = payload;

  const url = `/time/users/${id}`;
  const { data } = await api.get(url);
  return data;
}

export async function timeRegister(): Promise<void> {
  const url = `/time`;
  await api.post(url);
}
