import styled from "@emotion/styled";
import { Wine } from "../types/Wine";

interface WineProps {
  wineData: Wine;
}

export const WineCard = ({ wineData }: WineProps) => {
  const { wine, winery, rating, image, location } = wineData;
  return (
    <Container>
      <h2>{wine}</h2>
      <img src={image} alt={wineData.wine} />
      <p>
        생산지: {winery} - {location}
      </p>
      <Average>평점: ⭐️ {rating.average}</Average>
      <p>리뷰: 🖍 {rating.reviews.replace("ratings", "")}개</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
`;
const Average = styled.p`
  display: inline-block;
  padding: 0.3em;
  font-size: 16px;
  margin-left: 0.5em;
  color: white;
  background: #2ac1bc;
  border-radius: 3px;
`;
