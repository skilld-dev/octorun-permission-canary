export function containsItem<T>(items: readonly T[], item: T): boolean {
  return items.indexOf(item) >= 0
}
