export const cutTitle = (str) => {
  return str.length > 16 ? `${str.substring(0, 16)}...` : str
}
