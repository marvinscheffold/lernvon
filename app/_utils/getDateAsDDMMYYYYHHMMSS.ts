export function getDateAsDDMMYYYYHHMMSS(
  locale: string = "de",
  date?: string | Date | null
): string {
  if (!date) return "⎯";

  const usableDate = typeof date === "string" ? new Date(date) : date;

  const formatter = new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  return formatter.format(usableDate);
}
