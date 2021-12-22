import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useBeersData } from "../../hooks/useBeersData";
import { Beer } from "../../types/Beers";

const AleBeerPage: NextPage = () => {
  const name = "ale";
  const { data, error } = useBeersData(name);
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h1> Beers ale</h1>
      <main>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard
              key={`ale-beer-list-${beerData.id}`}
              beerData={beerData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default AleBeerPage;
