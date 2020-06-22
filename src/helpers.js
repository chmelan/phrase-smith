function getRandomItemFromArray(array) {
  return array[Math.floor(Math.random() * (array.length - 1))];
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { getRandomItemFromArray, capitalize };
