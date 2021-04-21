export interface ApiResponse {
  pagination: Pagination;
  data: ApiData[];
}

export interface ApiData {
  author?: string;
  category: string;
  country: string;
  description: string;
  image?: string;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
}

export interface Pagination {
  count: number;
  limit: number;
  offset: number;
  total: number;
}
