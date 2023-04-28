import { IUser } from "../../../shared/types/user.type";

export interface IFetchTimes {
  id: string;
}

export interface ITimesPage {
  user: IUser;
  setUser: any;
}

export interface ITimeDuration {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ITime {
  date: string;
  time: ITimeDuration;
  timeArray: [string];
  journey: number;
  firstOfJourney?: boolean;
}

export interface IRecord {
  time: ITime | undefined;
  setSelected: any;
  selected: any;
}
