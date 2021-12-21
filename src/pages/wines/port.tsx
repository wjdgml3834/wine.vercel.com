import type { NextPage } from "next";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

// 타입 선언 :NextPage -> 타입스크립트에서 나옴
const Port: NextPage = () => {
  const { data, error } = useWineData("whites");

  // 에러가 나면 에러 해주고 데이터 잇으면 데이터 뱉어줌
  if (error) return <div>failed to Loading..</div>;
  if (!data) return <div>Loading</div>;
  // 에러 낫을때랑. 로딩일때 처리
  return (
    <div>
      <h1> Wines Port</h1>
      <main>
        {data.map((wineData: Wine) => {
          // types에서 불러옴
          const { id, wine, winery } = wineData;
          return (
            <div key={`port-wine-list-${wineData.id}`}>
              <h1>{wineData.wine}</h1>
              <p>{wineData.winery}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Port;
