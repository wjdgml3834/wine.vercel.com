import { Wine } from "../types/Wine";

interface WineProps {
  wineData: Wine;
}

export const WineCard = ({ wineData }: WineProps) => {
  const { id, wine, winery, rating, image } = wineData;
  return (
    <div>
      <h1>{wineData.wine}</h1>
      <img src={wineData.image} alt={wineData.wine} />
      <p>생산지: {wineData.winery}</p>
      <p>평점: ⭐️ {wineData.rating.average}</p>
      <p>리뷰: 🖍 {wineData.rating.reviews}</p>
    </div>
  );
};
