function getRandomItemFromArray(array) {
  return array[Math.floor(Math.random() * (array.length - 1))];
}

export default getRandomItemFromArray;
