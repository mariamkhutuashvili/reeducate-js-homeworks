// 1) შექმენით ინფუთი რომლის სერჩის დროს რექუესთს გააგზავნით შემდეგ აიპიაიზე: https://api.escuelajs.co/api/v1/products?title=wooden
// როგორც ხედავთ თაითლი არის ქუერი პარამეტრი, დებაუნს ტექნიკით გააკეთეთ ინფუთი რომლის ჩაწერაზეც, დარექუსთდება სწორედ title პარამეტრით.

const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");
let timeout;

function fetchProducts(query) {
  fetch(`https://api.escuelajs.co/api/v1/products?title=${query}`)
    .then((response) => response.json())
    .then((products) => {
      productList.innerHTML = "";
      products.forEach((product) => {
        const li = document.createElement("li");
        li.textContent = product.title;
        productList.appendChild(li);
      });
    })
    .catch((error) => console.log("Error fetching products:", error));
}

function debounce(fn, delay) {
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

searchInput.addEventListener(
  "input",
  debounce((event) => {
    const query = event.target.value;
    if (query) {
      fetchProducts(query);
    } else {
      productList.innerHTML = "";
    }
  }, 500)
);

// 2) წამოიღეთ ინფორმაცია შემდეგი ეიპიაიდან: https://jsonplaceholder.typicode.com/users
// მოსული დატა გაპარსეთ შემდეგნაირად, თითოეულ ობიექტს უნდა ჰქონდეს მხოლოდ 4 ფროფერთი აიდი, სახელი, იუზერნეიმი და იმეილი

const userList = document.getElementById("userList1");

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const filteredUsers = users.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      }));

      userList.innerHTML = "";
      filteredUsers.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `ID: ${user.id}, Name: ${user.name}, Username: ${user.username}, Email: ${user.email}`;
        userList.appendChild(li);
      });
    })
    .catch((error) => console.log("Error fetching users:", error));
}

fetchUsers();

// 3) გაქვთ ორი აიპიაი https://fakestoreapi.com/users  და https://jsonplaceholder.typicode.com/users
// თქვენი მიზანია ორივე ერთდოულად დაარიზოლვოთ და ისე გამოიტანოთ დომში შესაბამისი ინფორამცია იუზერებზე,
// ანუ სანამ ორივე აიპიაი პასუხს არ დააბრუნებს მანამდე არაფერი გამოაჩინოთ დომში.

function fetchFromBothApis() {
  const api1 = fetch("https://fakestoreapi.com/users").then((res) =>
    res.json()
  );
  const api2 = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );

  Promise.all([api1, api2])
    .then((responses) => {
      const allUsers = [...responses[0], ...responses[1]];

      const userList = document.getElementById("userList2");
      userList.innerHTML = "";

      allUsers.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `Name: ${user.name}, Email: ${user.email}`;
        userList.appendChild(li);
      });
    })
    .catch((error) => console.log("Error fetching from APIs:", error));
}

fetchFromBothApis();

// 4) დაწერეთ ფუნცქია რომელიც დაგვილოგავს მაუსის კორდინატებს მას შემდეგ რაც გავაჩერებთ მაუსს, გამოიყენეთ დიბაუნს ტექნიკა

const mouseCoordinatesDiv = document.getElementById("mouseCoordinates");

function updateMouseCoordinates(event) {
  mouseCoordinatesDiv.textContent = `Mouse stopped at: X=${event.clientX}, Y=${event.clientY}`;
}

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

const debouncedMouseMove = debounce(updateMouseCoordinates, 500);

window.addEventListener("mousemove", debouncedMouseMove);
