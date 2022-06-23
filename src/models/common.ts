export interface PaginationParams {
  _limit: number;
  _totalRows: number;
  _page: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _page: number;
  _limit: number;
  _sort?: string;
  _order?: 'asc' | 'desc';

  [key: string]: any;
}
