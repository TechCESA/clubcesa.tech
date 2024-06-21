export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache: { [key: string]: ReturnType<T> } = {};

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  }) as T;
}
