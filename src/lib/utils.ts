const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getDayOfWeek(date: string | Date) {
  const d = new Date(date);
  return weekday[d.getDay()];
}
