function getRandomItemFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function getFilteredPhrases(phrases, tags) {
  return phrases.filter((phrase) =>
    phrase.tags.some((tag) => tags.includes(tag))
  );
}
export { getRandomItemFromArray, capitalize, getFilteredPhrases };
