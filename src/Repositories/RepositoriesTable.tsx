import { RepositoryRow } from './RepositoryRow';
import { IRepository, IRepositorySearch } from './types';

export function RepositoriesTable(data: IRepositorySearch) {
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
