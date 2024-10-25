// 1) Write a function that receives 3 parameters: amount of money, dayLimit and weekLimit you should calculate
// how many days does it needs to withdway whole amount of money.

function calculateWithdrawalDays(amount, dayLimit, weekLimit) {
  let totalWithdrawn = 0;
  let days = 0;
  let weeklyWithdrawn = 0;

  while (totalWithdrawn < amount) {
    days++;

    if (weeklyWithdrawn + dayLimit <= weekLimit) {
      totalWithdrawn += Math.min(dayLimit, amount - totalWithdrawn);
      weeklyWithdrawn += dayLimit;
    } else {
      totalWithdrawn += Math.min(
        weekLimit - weeklyWithdrawn,
        amount - totalWithdrawn
      );
      weeklyWithdrawn = weekLimit;
    }

    if (days % 7 === 0) {
      weeklyWithdrawn = 0;
    }
  }

  return days;
}

console.log(calculateWithdrawalDays(10000, 2000, 7000));

// 2) Write a function that takes text as a parameter, the text should be: "What is a plus b?" or "What is a minus b?"
// you should write correct answer, if answer is correct console you're humar other wise consoled you're robot

const readline = require("readline");

function solveMathQuestion(question) {
  const regex = /What is (\d+) (plus|minus) (\d+)\?/;
  const match = question.match(regex);

  if (match) {
    const a = parseInt(match[1]);
    const operation = match[2];
    const b = parseInt(match[3]);
    let answer;

    if (operation === "plus") {
      answer = a + b;
    } else if (operation === "minus") {
      answer = a - b;
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`What is ${a} ${operation} ${b}? `, (userAnswer) => {
      if (parseInt(userAnswer) === answer) {
        console.log("You're human!");
      } else {
        console.log("You're a robot!");
      }
      rl.close();
    });
  } else {
    console.log("Invalid question format.");
  }
}

solveMathQuestion("What is 5 plus 3?");

// 3) write a function that takes 2 parameter the height and width you draw that rectangle with #
// eg: 2, 2 => ## ##
// eg: 3:4 #### #### ####

function drawRectangle(height, width) {
  for (let i = 0; i < height; i++) {
    console.log("#".repeat(width));
  }
}

drawRectangle(2, 2);
drawRectangle(3, 4);

// 4) write a function that takes number as a parameter and check is this number wide or not.
// * wide means that If the number of its digits is greater than the sum of the digits.

function isWideNumber(num) {
  const digits = num.toString().split("").map(Number);
  const digitCount = digits.length;
  const digitSum = digits.reduce((acc, digit) => acc + digit, 0);

  return digitCount > digitSum;
}

console.log(isWideNumber(10));
console.log(isWideNumber(123));
