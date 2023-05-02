import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { RepositoriesTable } from './RepositoriesTable';

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
  const [searchTerm, setSearchTerm] = useState<string | undefined>('@yougov');
  const { loading, error, data } = useQuery(SEARCH_REPOS, {
    variables: { searchTerm: searchTerm }
  });
  let content;

  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Error : {error.message}</p>;
  } else {
    content = RepositoriesTable(data);
  }

  return (
    <>
      <input
        autoFocus
        value={searchTerm}
        name="searchTerm"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {content}
    </>
  );
}
