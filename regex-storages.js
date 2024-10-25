// 1) Check if a string starts with an uppercase letter.

function startsWithUppercase(str) {
  const regex = /^[A-Z]/;
  return regex.test(str);
}

console.log(startsWithUppercase("Hello World"));
console.log(startsWithUppercase("hello world"));

// 2) Test if a string is a valid date in DD/MM/YYYY format

function isValidDate(dateStr) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  return regex.test(dateStr);
}

console.log(isValidDate("25/12/2023"));
console.log(isValidDate("99/99/9999"));

// 3) Validate a GE phone number in the format 598-12-34-56

function isValidGEPhoneNumber(phoneNumber) {
  const regex = /^598-\d{2}-\d{2}-\d{2}$/;
  return regex.test(phoneNumber);
}

console.log(isValidGEPhoneNumber("598-12-34-56"));
console.log(isValidGEPhoneNumber("598-123-4567"));

// 4) Validate the emails that ends with @example.com

function isValidExampleEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@example\.com$/;
  return regex.test(email);
}

console.log(isValidExampleEmail("user@example.com"));
console.log(isValidExampleEmail("user@example@com"));

// 5) Save the random horoscop data like 10 into localstorage and when user enter the website,
// display different horoscop to difference day. like  first day first horoscop, second day second horoscop and etc.

const horoscopes = [
  "You will have a great day!",
  "Success is just around the corner.",
  "Be cautious with your decisions.",
  "Today is a lucky day!",
  "Someone will surprise you.",
  "Embrace change for good fortune.",
  "A pleasant surprise awaits you.",
  "You will receive good news today.",
  "Focus on your goals.",
  "Take time to relax today.",
];

function displayHoroscope() {
  const today = new Date().getDate();
  const horoscopeIndex = today % horoscopes.length;
  const dailyHoroscope = horoscopes[horoscopeIndex];

  document.getElementById("horoscopeDisplay").textContent = dailyHoroscope;
}

localStorage.setItem("horoscopes", JSON.stringify(horoscopes));

window.addEventListener("load", displayHoroscope);

// 6) Make a form with three inputs name, email and phone number, when user try to enter each of this field you should save this info into localstorage.
// if you typing info and refresh the page, the info that you wrote should not be deleted.

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

nameInput.value = localStorage.getItem("name") || "";
emailInput.value = localStorage.getItem("email") || "";
phoneInput.value = localStorage.getItem("phone") || "";

nameInput.addEventListener("input", () => {
  localStorage.setItem("name", nameInput.value);
});

emailInput.addEventListener("input", () => {
  localStorage.setItem("email", emailInput.value);
});

phoneInput.addEventListener("input", () => {
  localStorage.setItem("phone", phoneInput.value);
});

// 7) Create a two button En Ka and the random text below, if you choose, en the random text should be translated into english,
// when you click ka it should be translated into georgian language. use localstorage to save this info.

const enButton = document.getElementById("en");
const kaButton = document.getElementById("ka");
const randomText = document.getElementById("randomText");

const translations = {
  en: "Hello, this is a random text in English.",
  ka: "გამარჯობა, ეს არის ტექსტი ქართულად.",
};

const savedLanguage = localStorage.getItem("language") || "en";
randomText.textContent = translations[savedLanguage];

enButton.addEventListener("click", () => {
  randomText.textContent = translations.en;
  localStorage.setItem("language", "en");
});

kaButton.addEventListener("click", () => {
  randomText.textContent = translations.ka;
  localStorage.setItem("language", "ka");
});
