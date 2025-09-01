export type HasTitle = { title: string };

export function filterByLength<T extends HasTitle>(items: T[], minLength: number): T[] {
  return items.filter((item) => item.title.length >= minLength);}