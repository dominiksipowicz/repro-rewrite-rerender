import Link from "next/link";
import { memo } from "react";

const Page = () => {
  console.log(" == render == B == ", Date.now());
  return (
    <div>
      <h1>B page</h1>
      <ul>
        <li>
          <Link href="/">
            <a>index</a>
          </Link>
        </li>
        <li>
          <Link href="/page-a">
            <a>Page A</a>
          </Link>
        </li>
        <li>
          <Link href="/page-b">
            <a>Page B</a>
          </Link>
        </li>
        <li>
          <Link href="/page-c">
            <a>Page C</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const _Home = memo(Page);

export default function Home() {
  return (
    <div>
      <_Home />
    </div>
  );
}
