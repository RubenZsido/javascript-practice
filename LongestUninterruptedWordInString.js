const LNRCS = (str) => {
  console.clear();
  const charArray = str.split("");
  const endIndexes = getEndIndexes(charArray);
  const words = [];
  let prevEnd = 0;
  for (let i = 0; i < endIndexes.length; i++) {
    const endindex = endIndexes[i];
    words.push(getWord(charArray, prevEnd, endindex));
    prevEnd = endindex;
  }
  words.push(
    getWord(
      charArray,
      endIndexes[endIndexes.length - 1],
      charArray[charArray.length]
    )
  );
  return getLongestStringInArray(words);
};
const getWord = (array, beginning, end) => {
  return array.slice(beginning, end).join("");
};

const getEndIndexes = (charArray) => {
  const endIndexes = [];
  for (let i = 0; i < charArray.length; i++) {
    const char = charArray[i];
    if (i + 1 === charArray.length) {
      break;
    }
    const nextChar = charArray[i + 1];
    if (nextChar === char) {
      endIndexes.push(i + 1);
    }
  }
  return endIndexes;
};

getLongestStringInArray = (array) => {
  const longestWord = array.reduce((longest, curr) => {
    if (curr.length > longest.length) {
      return curr;
    }
    return longest;
  }, "");
  return longestWord;
};

console.log("Longest Word: " + LNRCS("ABCDDEFGHHIIJKLMNNOPQRSSSTUV"));
