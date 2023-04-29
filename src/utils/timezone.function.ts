import { addMinutes } from "date-fns";

export const removeTimezoneOffset = (date: Date): Date => {
  const TIME_ZONE_OFFSET = 300;
  return addMinutes(date, TIME_ZONE_OFFSET);
};
