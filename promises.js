// 1. make a promise that rejects or resolves 50/50

function fiftyFiftyPromise() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Resolved");
    } else {
      reject("Rejected");
    }
  });
}

fiftyFiftyPromise()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 2. write a function that get data from: https://jsonplaceholder.typicode.com/users and return result

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers().then((data) => console.log(data));

// 3. write a function that try to get data from: https://jsonplaceholde.typicode.com (link is invalid for this task) if request will failed try to retrieve it 5 times

async function fetchWithRetry(url, retries = 5) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Fetch failed");
      const data = await response.json();
      return data;
    } catch (error) {
      if (i === retries - 1) {
        console.error(`Failed after ${retries} retries`);
      } else {
        console.log(`Retrying... (${i + 1})`);
      }
    }
  }
}

fetchWithRetry("https://jsonplaceholde.typicode.com").then((data) =>
  console.log(data)
);

// 4. write a function that try to get data from this two sources:  https://dummyjson.com/users and https://jsonplaceholder.typicode.com/users
// and return the only response which has faster response, use fetch or axios method.

async function fetchFasterSource(url1, url2) {
  try {
    const response = await Promise.race([fetch(url1), fetch(url2)]);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetch race:", error);
  }
}

fetchFasterSource(
  "https://dummyjson.com/users",
  "https://jsonplaceholder.typicode.com/users"
).then((data) => console.log("Faster response data:", data));

// 5. create a three promise that returns any kind of arrays with difference time. one of one of them should be reject other two should be fulfilled.
// merged the only fulfilled arrays.

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve([1, 2, 3]), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve([4, 5, 6]), 1500);
});

const promise3 = new Promise((_, reject) => {
  setTimeout(() => reject("Promise 3 failed"), 2000);
});

async function mergeFulfilledPromises() {
  try {
    const results = await Promise.allSettled([promise1, promise2, promise3]);
    const fulfilled = results
      .filter((promise) => promise.status === "fulfilled")
      .map((promise) => promise.value);

    const mergedArray = fulfilled.flat();
    console.log("Merged fulfilled arrays:", mergedArray);
  } catch (error) {
    console.error("Error:", error);
  }
}

mergeFulfilledPromises();
