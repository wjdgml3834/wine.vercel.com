import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

// 타입 선언 :NextPage -> 타입스크립트에서 나옴
const DessertWinePage: NextPage = () => {
  const name = "dessert";
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h1> Wines Dessert</h1>
      <main>
        {data.map((wineData: Wine) => {
          // types에서 불러옴
          return (
            <WineCard
              key={`dessert-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default DessertWinePage;
