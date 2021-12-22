import type { NextPage } from "next";
import Link from "next/link";

const BeerPage: NextPage = () => {
  return (
    <div>
      <h1>Beers</h1>
      <ul>
        <li>
          <Link href="/beers/ale">
            <a>ale</a>
          </Link>
        </li>
        <li>
          <Link href="/beers/stouts">
            <a>stouts</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BeerPage;
