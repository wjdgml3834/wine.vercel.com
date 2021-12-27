import { Beer } from "../types/Beers";

interface BeerProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const { id, name, price, rating } = beerData;
  return (
    <div>
      <h1>{beerData.name}</h1>
      <p>가격: {beerData.price}</p>
      <p>평점: ⭐️ {beerData.rating.average.toFixed(2)}</p>
      <p>리뷰: 🖍 {beerData.rating.reviews}개</p>
    </div>
  );
};
