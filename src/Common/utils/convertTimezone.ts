const convertTimezone = (timezone: number) => {
  // Get current date and time in UTC
  const utcDate = new Date();

  // Calculate date and time in the specified timezone
  const localDate: object = new Date(
    utcDate.getTime() + timezone * 60 * 60 * 1000
  );

  const options: object = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };

  // Convert local date and time to a string
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(
    localDate as number | Date | undefined
  );

  return formattedDate;
};

export default convertTimezone;
