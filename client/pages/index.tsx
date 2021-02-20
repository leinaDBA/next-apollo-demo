import Link from 'next/link';
import WithApollo, { ApolloProps } from '../lib/with-apollo';
import Name from '../components/Name';
import { ApolloProvider } from '@apollo/client';

interface PageProps extends ApolloProps {
  text?: string;
}

const Page = ({ text, apollo }: PageProps): JSX.Element => (
  <ApolloProvider client={apollo}>
    <div>
      Welcome, <Name />
      <br />
      <br />
      <Link href="/about">
        <a>About</a>
      </Link>
      {text}
    </div>
  </ApolloProvider>
);

export default WithApollo(Page);
