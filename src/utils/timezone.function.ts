import { addMinutes } from "date-fns";

export const removeTimezoneOffset = (date: Date): Date => {
  const timeOffset = date.getTimezoneOffset();
  return addMinutes(date, timeOffset);
};
