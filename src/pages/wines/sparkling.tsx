import type { NextPage } from "next";
import { WineContainer } from "../../components";
// 타입 선언 :NextPage -> 타입스크립트에서 나옴
const SparklingWinePage: NextPage = () => {
  const name = "sparkling";

  return (
    <div>
      <h1> {name} Wine</h1>
      <WineContainer name={name} />
    </div>
  );
};

export default SparklingWinePage;
