import type { NextPage } from "next";
import { useBeersData } from "../../hooks/useBeersData";
import { Beer } from "../../types/Beers";

const AleBeerPage: NextPage = () => {
  const { data, error } = useBeersData("ale");
  if (error) return <div>failed to Loading</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1> Beers ale</h1>
      <main>
        {data.map((beerData: Beer) => {
          const { id, name, price, rating } = beerData;
          return (
            <div key={`ale-beer-list-${beerData.id}`}>
              <h1>{beerData.name}</h1>
              <p>가격: {beerData.price}</p>
              <p>평점: ⭐️ {beerData.rating.average}</p>
              <p>리뷰: 🖍 {beerData.rating.reviews}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default AleBeerPage;
