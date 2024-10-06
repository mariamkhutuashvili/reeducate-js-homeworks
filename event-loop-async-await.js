// 1. write a function that takes a random number as an argument and logs the random number while the argument number and random number are equal.
//argument number should be from 0 to 10.

function logRandomNumber(argNumber) {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * 11);
    console.log(randomNum);
  } while (randomNum === argNumber);
}

logRandomNumber(5);

// 2. write a function that imitates to return fake data, use setTimeout. make both async/await and .then.catch methods.

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Mariam", age: 29 });
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching data...");
  const data = await fetchData();
  console.log("Data received:", data);
}

getData();

//

function fetchDataWithThen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Mariam", age: 29 });
    }, 2000);
  });
}

fetchDataWithThen()
  .then((data) => console.log("Data received:", data))
  .catch((error) => console.log("Error:", error));

// 3. write a sleep function. make a function that takes a ms as an argument and when you call this function waits untill this function resolved. use setTimeout and promises.
//eg: console.log('first')
//await sleep(2000)
//console.log('second')
//second should sleep after 2 seconds

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runSleep() {
  console.log("first");
  await sleep(2000);
  console.log("second");
}

runSleep();
