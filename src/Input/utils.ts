export function availableSetSelectionRange(type: string) {
  return ["text", "search", "url", "tel", "password"].includes(type);
}
