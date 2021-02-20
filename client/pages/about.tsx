import Link from 'next/link';

const About = (): JSX.Element => (
  <div>
    About Page
    <br />
    <br />
    <Link href="/">
      <a>Go Back</a>
    </Link>
  </div>
);

export default About;
