export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split("-");
  return `${String(Number(day)).padStart(2, "0")}.${String(
    Number(month)
  ).padStart(2, "0")}.${year}`;
}

export function formatDateForInput(dateString: string): string {
  const [day, month, year] = dateString.split(".");
  return `${year}-${month}-${day}`;
}
