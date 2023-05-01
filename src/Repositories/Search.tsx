import { gql, useQuery } from '@apollo/client';
import { RepositoryRow, IRepository } from './RepositoryRow';

const SEARCH_REPOS = gql`
  query search($searchTerm: String!) {
    search(query: $searchTerm, first: 10, type: REPOSITORY) {
      pageInfo {
        endCursor
        startCursor
      }
      repositoryCount
      nodes {
        ... on Repository {
          id
          name
          url
          homepageUrl
          stargazerCount
          forkCount
        }
      }
    }
  }
`;

export function Search() {
  const { loading, error, data } = useQuery(SEARCH_REPOS, {
    variables: { searchTerm: '@yougov' }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const repoRows = data.search.nodes.map((repository: IRepository) => RepositoryRow(repository));

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Stars</th>
        <th>Forks</th>
      </tr>
      {repoRows}
    </table>
  );
}
