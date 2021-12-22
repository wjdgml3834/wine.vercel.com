import type { NextPage } from "next";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

// 타입 선언 :NextPage -> 타입스크립트에서 나옴
const PortWinePage: NextPage = () => {
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
          const { id, wine, winery, rating, image } = wineData;
          return (
            <div key={`port-wine-list-${wineData.id}`}>
              <h1>{wineData.wine}</h1>
              <img src={wineData.image} alt={wineData.wine} />
              <p>생산지: {wineData.winery}</p>
              <p>평점: ⭐️ {wineData.rating.average}</p>
              <p>리뷰: 🖍 {wineData.rating.reviews}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default PortWinePage;
