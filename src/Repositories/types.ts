export interface IRepository {
  id: number;
  name: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
}

export interface IRepositorySearch {
  search: {
    nodes: IRepository[];
  };
}
