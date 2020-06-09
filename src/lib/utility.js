import * as moment from "moment";

export function getDayFromToday(index) {
  const today = moment();
  return today.add(index, "d");
}

export function getWeek() {
  let days = [];
  for (let i = 0; i < 7; i++) {
    const day = getDayFromToday(i);
    days.push({
      day: day.format("DD").toString(),
      dayOfWeek: day.format("ddd").toString(),
    });
  }

  return days;
}
