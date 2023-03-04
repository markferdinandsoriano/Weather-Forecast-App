const convertTimezone = (timezone: number) => {
  // Get current date and time in UTC
  const utcDate = new Date();

  // Calculate date and time in the specified timezone
  const localDate: any = new Date(
    utcDate.getTime() + timezone * 60 * 60 * 1000
  );

  const options: any = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };

  // Convert local date and time to a string
  const localDateString = localDate;
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(localDateString);

  return formattedDate;
};

export default convertTimezone;
