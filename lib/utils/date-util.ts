export const dateUtil = () => {
  const todayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    return `${year}年${month}月${date}日`.toString();
  };

  const getYear = () => {
    const date = new Date();
    return date.getFullYear().toString();
  };

  return {
    todayDate,
    getYear,
  };
};
