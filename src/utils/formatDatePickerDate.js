const formatToYYYYMMDD = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const formatDatesObject = ({ startDate, endDate }) => {
  return {
    startDate: formatToYYYYMMDD(startDate),
    endDate: formatToYYYYMMDD(endDate),
  };
};
