import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useBeersData } from "../../hooks/useBeersData";
import { Beer } from "../../types/Beers";

const StoutsBeerPage: NextPage = () => {
  const name = "stouts";
  const { data, error } = useBeersData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1> Beers Stouts</h1>
      <main>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard
              key={`stouts-beer-list-${beerData.id}`}
              beerData={beerData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default StoutsBeerPage;
