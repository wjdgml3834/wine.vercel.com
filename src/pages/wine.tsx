import type { NextPage } from "next";

// 타입 선언 :NextPage -> 타입스크립트에서 나옴
const WinePage: NextPage = () => {
  return (
    <div>
      <h1> Wine</h1>
    </div>
  );
};

export default WinePage;

// 이제 url에 /wine 하면 나옴 ->http://0.0.0.0:3000/wine
// 가장 기본적인 템플릿
