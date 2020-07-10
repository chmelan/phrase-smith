function getRandomItemFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function getFilteredPhrases(phrases, tags) {
  //check if any tags are selected
  if (tags.length > 0) {
    return phrases.filter((phrase) =>
      phrase.tags.some((tag) => tags.includes(tag))
    );
  }
  //return all phrases if no filters are specified
  return phrases;
}
export { getRandomItemFromArray, capitalizeFirstLetter, getFilteredPhrases };
