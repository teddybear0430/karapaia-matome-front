export const dateUtil = () => {
  const weekChars = ['日', '月', '火', '水', '木', '金', '土'];

  const todayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const week = getWeekChars(`${year}/${month}/${date}`);

    return `${year}年${month}月${date}日${week}`.toString();
  };

  const getYear = () => {
    const date = new Date();
    return date.getFullYear().toString();
  };

  const getWeekChars = (dateStr: string) => {
    const date = new Date(dateStr);
    const weekDay = date.getDay();
    return `(${weekChars[weekDay]})`;
  };

  return {
    todayDate,
    getYear,
    getWeekChars,
  };
};
