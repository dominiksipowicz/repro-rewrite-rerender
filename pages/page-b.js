import Link from "next/link";

export default function Home() {
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
}
