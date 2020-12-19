export const lastAfter = (str: string, char: string) => {
  const lastChar = str.lastIndexOf(char)
  if (lastChar === -1) return false
  return str.substring(lastChar + 1)
}