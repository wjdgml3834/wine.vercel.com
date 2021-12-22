import type { NextPage } from "next";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

// 타입 선언 :NextPage -> 타입스크립트에서 나옴
const SparklingWinePage: NextPage = () => {
  const { data, error } = useWineData("sparkling");
  if (error) return <div>failed to Loading</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1> Wines Sparkling</h1>
      <main>
        {data.map((wineData: Wine) => {
          const { id, wine, winery, rating, image } = wineData;
          return (
            <div key={`sparkling-wine-list-${wineData.id}`}>
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

export default SparklingWinePage;
