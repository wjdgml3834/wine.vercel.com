import type { NextPage } from "next";
import Link from "next/link";

const WinePage: NextPage = () => {
  return (
    <div>
      <h1>Wines</h1>
      <ul>
        <li>
          <Link href="/wines/dessert">
            <a>dessert</a>
          </Link>
        </li>
        <li>
          <Link href="/wines/port">
            <a>port</a>
          </Link>
        </li>
        <li>
          <Link href="/wines/reds">
            <a>reds</a>
          </Link>
        </li>
        <li>
          <Link href="/wines/rose">
            <a>rose</a>
          </Link>
        </li>
        <li>
          <Link href="/wines/sparkling">
            <a>sparkling</a>
          </Link>
        </li>
        <li>
          <Link href="/wines/whites">
            <a>whites</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default WinePage;
