import type { NextPage } from 'next';
import CustomHead from '../components/CustomHead';

const Custom404: NextPage = () => {
  // MEMO: 404の時はレイアウトを変更したい
  // 参考サイト: https://imatomix.com/imatomix/notes/1591872503
  return (
    <>
      <CustomHead title={'404 Not Found'} />
      <p className="font-bold">404 Not Found</p>
    </>
  );
};

export default Custom404;
