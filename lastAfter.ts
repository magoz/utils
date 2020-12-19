export const lastAfter = (str: string, char: string) => {
  const lastChar = str.lastIndexOf(char)
  const tail = str.substring(lastChar+1)
  return tail.length !== str.length ? tail : null
}