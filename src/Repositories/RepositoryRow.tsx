export interface IRepository {
  id: number;
  name: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
}

export function RepositoryRow(repository: IRepository) {
  return (
    <tr key={repository.id}>
      <td>
        <a href={repository.url}>{repository.name}</a>
      </td>
      <td>{repository.stargazerCount}</td>
      <td>{repository.forkCount}</td>
    </tr>
  );
}
