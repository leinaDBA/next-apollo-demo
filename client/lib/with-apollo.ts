import withApollo, { InitApolloOptions } from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import { ApolloCache, ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { WithApolloProps } from 'next-with-apollo/lib/types';

export type ApolloProps = WithApolloProps<ApolloCache<NormalizedCacheObject>>;

const link = (createHttpLink({ uri: 'http://localhost:5000/graphql' }) as unknown) as ApolloLink;

export default withApollo(
  ({ initialState }: InitApolloOptions<NormalizedCacheObject>) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache().restore(initialState || {}),
    }),
);
