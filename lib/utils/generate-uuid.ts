export const generateUuid = (url: string) => {
  const found = url.match(/\d+/g);

  // 万が一URLに含まれる数字が見つけられなかったら、生成した乱数をuuidとして割り当てる
  if (!found) {
    const randomNum = Math.floor(Math.random() * 999999) + 1000;
    return randomNum.toString();
  }

  return found[0];
};
