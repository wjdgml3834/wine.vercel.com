import type { NextPage } from "next";
import { BeerContainer } from "../../components/BeerContainer";

const AleBeerPage: NextPage = () => {
  const name = "ale";

  return (
    <div>
      <BeerContainer name={name} />
    </div>
  );
};

export default AleBeerPage;
