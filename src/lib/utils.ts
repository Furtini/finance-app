const DEFAULT_LOCALE = 'pt-BR';

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getDayOfWeek(date: string | Date) {
  const d = new Date(date);
  return weekday[d.getDay()];
}

export function date(date?: Date | string): string {
  if (date == null) return '-';

  const formatedDate = new Date(date);
  return formatedDate.toLocaleString(DEFAULT_LOCALE).substring(0, 10);
}
