export type Page<T> = {
  items: T[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  page: number;
  page_size: number;
  total: number;
};
