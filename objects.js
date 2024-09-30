// 1. Write a function that takes two or more objects as arguments and merges them into a single object
function mergeObjects(...objects) {
  return { ...objects };
}

const obj1 = { name: "Mariam" };
const obj2 = { surname: "Khutuashvili" };
const obj3 = { city: "Tbilisi" };

const mergedObj = mergeObjects(obj1, obj2, obj3);
console.log(mergedObj);

// 2. Write a function that takes an object and a key as input and deletes the specified key from the object.
function deleteKeyFromObject(obj, key) {
  delete obj[key];
  return obj;
}

let student = { name: "Mariam", surname: "Khutuashvili", married: "No" };
deleteKeyFromObject(student, "married");
console.log(student);

// 3. Create an object representing a car with properties for make, model, and year. Then add a method that returns the car's full description.
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  getDescription: function () {
    return `${this.year} ${this.make} ${this.model}`;
  },
};

console.log(car.getDescription());

// 4. Create an object representing a shopping cart. Add methods to add items, remove items, and calculate the total price.
const shoppingCart = {
  items: [],
  addItem: function (item) {
    this.items.push(item);
  },
  removeItem: function (itemName) {
    this.items = this.items.filter((item) => item.name !== itemName);
  },
  calculateTotal: function () {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
};

shoppingCart.addItem({ name: "Apple", price: 1.5, quantity: 4 });
shoppingCart.addItem({ name: "Banana", price: 1.0, quantity: 6 });
console.log(shoppingCart.items);

shoppingCart.removeItem("Apple");
console.log(shoppingCart.items);

console.log(shoppingCart.calculateTotal());
