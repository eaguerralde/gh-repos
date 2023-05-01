import React from 'react';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const SEARCH_REPOS = gql`
  query {
    search(query: "@yougov", first: 100, type: REPOSITORY) {
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

interface SearchResultItem {
  id: number;
  name: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
}

function SearchRepos() {
  const { loading, error, data } = useQuery(SEARCH_REPOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.search.nodes.map(({ id, name, url, stargazerCount, forkCount }: SearchResultItem) => (
    <ul key={id}>
      <li>{name}</li>
      <li>{url}</li>
      <li>{stargazerCount}</li>
      <li>{forkCount}</li>
    </ul>
  ));
}

function App() {
  return (
    <div className="App">
      <SearchRepos />
    </div>
  );
}

export default App;
