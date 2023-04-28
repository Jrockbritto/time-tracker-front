import { addMinutes } from "date-fns";

export const removeTimezoneOffset = (date: Date): Date => {
  const offSet = date.getTimezoneOffset();
  return addMinutes(date, offSet);
};
