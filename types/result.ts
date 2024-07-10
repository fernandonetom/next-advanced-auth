export type TResult<T = void> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };
