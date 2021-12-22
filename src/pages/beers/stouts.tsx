import type { NextPage } from "next";
import { useBeersData } from "../../hooks/useBeersData";
import { Beer } from "../../types/Beers";

const StoutsBeerPage: NextPage = () => {
  const { data, error } = useBeersData("stouts");
  if (error) return <div>failed to Loading</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1> Beers stouts</h1>
      <main>
        {data.map((beerData: Beer) => {
          const { id, name, price, rating } = beerData;
          return (
            <div key={`stouts-beer-list-${beerData.id}`}>
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

export default StoutsBeerPage;
