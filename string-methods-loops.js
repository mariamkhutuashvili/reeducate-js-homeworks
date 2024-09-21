// 1. You need to write a function that reverses the words in a given string.
// Words are always separated by a single space. e.g: "Hello World" --> "World Hello"

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello World"));

// 2. Write a function that cleans whole sentences to numbers. eg: 'This looks5 grea8t!' -> 'This looks great!'

function removeNumbersFromSentence(str) {
  return str.replace(/\d+/g, "");
}

console.log(removeNumbersFromSentence("This looks5 grea8t!"));

// 3. Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// e.g: "String" -> "SSttrriinngg" e.g: "Hello World" -> "HHeelllloo  WWoorrlldd"

function doubleChars(str) {
  let result = "";

  for (let char of str) {
    result += char + char;
  }

  return result;
}

console.log(doubleChars("String"));
console.log(doubleChars("Hello World"));

// 4. Make a function that takes a sentences and return the abbreaviate of it.
// e.g: Sam Harris => S.H.   e.g: hello world everyone => H.W.E

function abbreviateSentence(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
}

console.log(abbreviateSentence("Sam Harris"));
console.log(abbreviateSentence("hello world everyone"));

// 5. Make a function that takes a number as a argument and return rendom word which length would be the number.
// e.g: 4 => 'h1zt',  5 => 'zvc1e'. you should build random string from all characters and numbers.

function generateRandomWord(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomWord = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomWord += characters[randomIndex];
  }

  return randomWord;
}

console.log(generateRandomWord(4));
console.log(generateRandomWord(5));
