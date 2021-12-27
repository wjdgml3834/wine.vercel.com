import { Error, Loading, BeerCard } from ".";
import { useBeersData } from "../hooks/useBeersData";
import { Beer } from "../types/Beers";

interface BeerContainerProps {
  name: string;
}

export const BeerContainer = ({ name }: BeerContainerProps) => {
  const { data, error } = useBeersData(name);
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <main>
      {data.map((beerData: Beer) => {
        return (
          <BeerCard
            key={`${name}-beer-list-${beerData.id}`}
            beerData={beerData}
          />
        );
      })}
    </main>
  );
};
