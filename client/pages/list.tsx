import { ApolloProvider, gql, QueryResult, useQuery } from '@apollo/client';
import { Dispatch, SetStateAction, useState } from 'react';
import Card, { Person } from '../components/Card';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './list.module.css';
import WithApollo, { ApolloProps } from '../lib/with-apollo';

const query = gql`
  query {
    list {
      name
      address
      email
      phone
    }
  }
`;

const CardGrid = (): JSX.Element => {
  const [cardData, setCardData]: [Person[], Dispatch<SetStateAction<Person[]>>] = useState<Person[]>([]);

  const { refetch }: QueryResult = useQuery(query, {
    onCompleted: ({ list }: { list: Person[] }) => setCardData([...cardData, ...list]),
    notifyOnNetworkStatusChange: true,
  });

  if (!cardData.length) {
    return <div>Loading</div>;
  }

  const loadMore = async (): Promise<void> => {
    await refetch();
  };
  return (
    <>
      <button className={styles.stickyButton} onClick={loadMore}>
        Load more cards
      </button>
      <div className={styles.container}>
        {cardData.map((person: Person, index: number) => (
          <Card {...person} key={index} />
        ))}
      </div>
    </>
  );
};

const ApolloContext = ({ apollo }: ApolloProps): JSX.Element => (
  <ApolloProvider client={apollo}>
    <CardGrid />
  </ApolloProvider>
);

export default WithApollo(ApolloContext);
