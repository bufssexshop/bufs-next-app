export const camelCaseToNormal = (str) => {
  let result = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()
  result = result.charAt(0).toUpperCase() + result.slice(1)
  return result
}
