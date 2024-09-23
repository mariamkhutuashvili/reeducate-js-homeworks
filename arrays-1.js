// 1. Create a function that counts the Number of Digits in Each Element, e.g: [123, 45, 6] becomes [3, 2, 1]).

function countDigitsInElements(arr) {
  let digitCounts = [];
  for (let i = 0; i < arr.length; i++) {
    digitCounts.push(String(arr[i]).length);
  }
  return digitCounts;
}

console.log(countDigitsInElements([123, 45, 6]));

// 2. Write a function that takes an array of numbers and reverses the order of its elements using a loop.
// Don't use reverse(). e.g: [1,2,3] => [3,2,1]

function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

console.log(reverseArray([1, 2, 3]));

// 3. Write a function that returns the sum of the squares of all the numbers in an array
// (e.g., [1, 2, 3] returns 1^2 + 2^2 + 3^2 = 14). Use a loop to calculate the squares.

function sumOfSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
}

console.log(sumOfSquares([1, 2, 3]));

// 4. Write a function that counts the total number of characters in all the strings in an array. e.g:["a", "ab", "abc"] => 6

function countTotalCharacters(arr) {
  let totalCount = 0;
  for (let i = 0; i < arr.length; i++) {
    totalCount += arr[i].length;
  }
  return totalCount;
}

console.log(countTotalCharacters(["a", "ab", "abc"]));

// 5. Write a function that takes an array of strings and returns the new array with the palindrome words.
// palindrome words are level, becase if you reverse this word its the same, like madam.
// e.g: ['level', 'giga', 'ana', 'button', 'abba'] => ['level', 'ana', 'abba']

function findPalindromes(arr) {
  let palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (word === word.split("").reverse().join("")) {
      palindromes.push(word);
    }
  }
  return palindromes;
}

console.log(findPalindromes(["level", "giga", "ana", "button", "abba"]));

// 6. Task: Write a function that filters out all words from an array that contain special characters (e.g., @, #, $).
// Bonus: Return both the filtered array and the removed words. dont use filter metohds use it with for loop.

function filterSpecialCharacters(arr) {
  let filteredWords = [];
  let removedWords = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let hasSpecialChar = false;

    for (let j = 0; j < word.length; j++) {
      if (!/^[a-zA-Z0-9]+$/.test(word[j])) {
        hasSpecialChar = true;
        break;
      }
    }

    if (hasSpecialChar) {
      removedWords.push(word);
    } else {
      filteredWords.push(word);
    }
  }

  return {
    filteredWords: filteredWords,
    removedWords: removedWords,
  };
}

console.log(
  filterSpecialCharacters(["hello", "world!", "no#special", "characters"])
);
