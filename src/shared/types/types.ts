export type stringOrUndefined = string | undefined;

export type DefaultQuery<T> = {
  docs: T;
  total: number;
  limit: number;
  page: number;
  pages: number;
};
