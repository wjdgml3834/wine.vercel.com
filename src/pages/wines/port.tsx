import type { NextPage } from "next";
import { WineContainer } from "../../components";
// 타입 선언 :NextPage -> 타입스크립트에서 나옴
const PortWinePage: NextPage = () => {
  const name = "port";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default PortWinePage;
