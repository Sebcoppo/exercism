

export const gigasecond = (date) => {
  const interval = 1e12;
  return new Date(date.getTime() + interval)
};
