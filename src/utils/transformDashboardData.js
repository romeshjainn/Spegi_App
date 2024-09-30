const data = {
  todayEnquires: [
    {
      TOTALENQUIRIES: 2,
      COURSE_NAME: "BSC NURSNIG",
    },
  ],
};
export const TransformCardData = (data) => {
  const totalEnquiries =
    data?.todayEnquires?.reduce((acc, item) => {
      return acc + (item.TOTALENQUIRIES || 0);
    }, 0) || 0;

  const todayIncome =
    data?.todayIncome?.reduce((acc, num) => {
      return (acc += num.Amount);
    }, 0) || 0;

  const todayAdmissions = 0;
  const todayExpenses = 0;

  return {
    todayIncome,
    todayExpenses,
    totalEnquiries,
    todayAdmissions,
  };
};
