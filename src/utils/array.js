export function take(array, count) {
  return array.filter((_, i) => i < count);
}
