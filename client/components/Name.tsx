import { gql, QueryResult, useQuery } from '@apollo/client';

const query = gql`
  query name {
    name
  }
`;

const Name = (): JSX.Element => {
  const { loading, data }: QueryResult = useQuery(query);

  if (loading) {
    return <div>Loading</div>;
  }

  return <span>not loading {data.name}</span>;
};

export default Name;
