import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

// 타입 선언 :NextPage -> 타입스크립트에서 나옴
const PortWinePage: NextPage = () => {
  const name = "port";
  const { data, error } = useWineData(name);

  // 에러가 나면 에러 해주고 데이터 잇으면 데이터 뱉어줌
  if (error) return <Error />;
  if (!data) return <Loading />;
  // 에러 낫을때랑. 로딩일때 처리
  return (
    <div>
      <h1> Wines Port</h1>
      <main>
        {data.map((wineData: Wine) => {
          // types에서 불러옴
          return (
            <WineCard
              key={`port-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default PortWinePage;
