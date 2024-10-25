// 1) Create a Car class with properties make, model, and year, then make instance of electric car which have battery level

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryLevel) {
    super(make, model, year);
    this.batteryLevel = batteryLevel;
  }

  getBatteryLevel() {
    return `${this.batteryLevel}% battery remaining.`;
  }
}

const tesla = new ElectricCar("Tesla", "Model 3", 2022, 90);

console.log(tesla.getCarInfo());
console.log(tesla.getBatteryLevel());

// 2) Create a Library class that stores a list of books (as an array) which have following methods addBook(), removeBook(), listBooks()

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`${book} has been added.`);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`${book} has been removed.`);
    } else {
      console.log(`${book} not found.`);
    }
  }

  listBooks() {
    if (this.books.length === 0) {
      console.log("No books available.");
    } else {
      console.log("Books in the library:");
      this.books.forEach((book) => console.log(book));
    }
  }
}

const library = new Library();
library.addBook("1984");
library.listBooks();
library.removeBook("1984");
library.listBooks();

// 3) Create a class Employee with a method calculateSalary() that calculates salary based on hours worked and hourly rate.

class Employee {
  constructor(name, hourlyRate) {
    this.name = name;
    this.hourlyRate = hourlyRate;
  }

  calculateSalary(hoursWorked) {
    return this.hourlyRate * hoursWorked;
  }
}

const employee = new Employee("John Doe", 20);

console.log(employee.calculateSalary(40));

// 4) Create a class ShoppingCart that holds a list of items. methods, addItem(), deleteItem(), updateItem(), calculateTotal()

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item, quantity, price) {
    this.items.push({ item, quantity, price });
    console.log(`${quantity} ${item} added to the cart.`);
  }

  deleteItem(item) {
    this.items = this.items.filter((cartItem) => cartItem.item !== item);
    console.log(`${item} removed from the cart.`);
  }

  updateItem(item, newQuantity) {
    const cartItem = this.items.find((cartItem) => cartItem.item === item);
    if (cartItem) {
      cartItem.quantity = newQuantity;
      console.log(`${item} updated to ${newQuantity} quantity.`);
    } else {
      console.log(`${item} not found in the cart.`);
    }
  }

  calculateTotal() {
    const total = this.items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    console.log(`Total: $${total.toFixed(2)}`);
    return total;
  }
}

const cart = new ShoppingCart();

cart.addItem("Apple", 3, 0.5);
cart.addItem("Banana", 5, 0.3);
cart.updateItem("Apple", 4);
cart.deleteItem("Banana");
cart.calculateTotal();

// 5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars

class CarFactory {
  constructor() {
    this.cars = [];
  }

  addCar(make, model, year) {
    const car = { make, model, year };
    this.cars.push(car);
    console.log(`${make} ${model} (${year}) has been added.`);
  }

  deleteCar(make, model) {
    this.cars = this.cars.filter(
      (car) => car.make !== make || car.model !== model
    );
    console.log(`${make} ${model} has been removed.`);
  }

  updateCar(make, model, newYear) {
    const car = this.cars.find(
      (car) => car.make === make && car.model === model
    );
    if (car) {
      car.year = newYear;
      console.log(`${make} ${model} has been updated to year ${newYear}.`);
    } else {
      console.log(`${make} ${model} not found.`);
    }
  }

  getAllCars() {
    if (this.cars.length === 0) {
      console.log("No cars available.");
    } else {
      console.log("Cars in the factory:");
      this.cars.forEach((car) =>
        console.log(`${car.make} ${car.model} (${car.year})`)
      );
    }
  }
}

const factory = new CarFactory();

factory.addCar("Toyota", "Prius", 2022);
factory.addCar("Ford", "Mustang", 2024);
factory.getAllCars();
factory.updateCar("Ford", "Mustang", 2023);
factory.deleteCar("Toyota", "Prius");
factory.getAllCars();
