import type { NextPage } from "next";
import { WineContainer } from "../../components";
// 타입 선언 :NextPage -> 타입스크립트에서 나옴
const RedsWinePage: NextPage = () => {
  const name = "reds";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default RedsWinePage;
