import Link from 'next/link';

const Page = (): JSX.Element => (
  <div>
    Welcome, Please navigate below
    <br />
    <br />
    <Link href="/about">
      <a>About</a>
    </Link>
    <br />
    <Link href="/list">
      <a>Show list</a>
    </Link>
  </div>
);

export default Page;
