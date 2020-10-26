//1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:

//Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну. 

// let animal = {
//   type: 'jaguar',
//   weigth: 80,
//   age: 8,
//   spaad: 80,
// }

// function infosAbout() {
//   for (i in animal) {
//     console.log(animal[i]);
//   }
// }

// infosAbout(animal);

// function coverDistance () {
//   const distance = 1000;
//   let hours = distance / this.speed;
//   let days = 0;
//   if (hours > 12) {
//     days = Math.floor(hours / 12);
//     hours = (hours - (day * 12)).toFixed(1);
//   }
//   console.log(`The animal can cover the distance of 1000 km in ${days} days and ${hours} hours.`);
// }

// coverDistance();


// function changeAnimal () {
//   animal ['breed'] = prompt('You can change/choose a type/breed of animal.');
//   console.log(animal);
// };

// changeAnimal();

//2.  Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.

let rectangle = {
  aSide: 10,
  bSide: 20,

  findS: function () {
    return this.aSide * this.bSide;
  },

  findP: function () {
    return (this.aSide + this.bSide) * 2;
  },

  addThirdSIde: function () {
    rectangle['c'] = 15;
  },

  nameOfRectangle: function () {
    rectangle.name = prompt('Input the name of rectangle');
  },

  convertIntoMeter: function (centimeters) {
    const toConvert = 100;
    console.log(`First side is ${this.aSide / toConvert} meters, and second side is ${this.bSide / toConvert} meters.`);
  }
}


rectangle.findS();
rectangle.findP();
rectangle.addThirdSIde();
rectangle.nameOfRectangle();
rectangle.convertIntoMeter();
console.log(`The S of rectangle is ${rectangle.findS()}`);
console.log(`The P of rectangle is ${rectangle.findP()}`);
console.log(rectangle.c);
console.log(rectangle.name);

//3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями.)

// {

//   tomato: {

//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true

//   } , ...

// }
//  Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

// let products = {

//     tomato: {
//     count: 5,
//     price: 50,
//     buy: false,
//     outOfStore: true
//   },

//     apple: {
//     count: 10,
//     price: 40,
//     buy: true,
//     outOfStore: false
//   },

//     banana: {
//     count: 6,
//     price: 60,
//     buy: false,
//     outOfStore: true
//   },

//     cucumber: {
//     count: 9,
//     price: 30,
//     buy: true,
//     outOfStore: false
//   },

//     carrot: {
//     count: 3,
//     price: 20,
//     buy: false,
//     outOfStore: true
//   },

// };

// let availableInStore = [];

// inStore = function () {
//   let string = '';
//   for (key in products) {
//     if (products[key].outOfStore === true) {
//       string += key + ',';
//       availableInStore = string.split();
//     }
//   }
//   return availableInStore;
// }
// console.log(inStore());

// let unavailableInStore = [];

// outOfStore = function () {
//   let string = '';
//   for (key in products) {
//     if (products[key].outOfStore === false) {
//       string += key + ',';
//       unavailableInStore = string.split();
//     }
//   }
//   return unavailableInStore;
// }
// console.log(outOfStore());

// let weBought = [];

// productsWeBougth = function () {
//   let string = '';
//   for (key in products) {
//     if (products[key].buy === true) {
//       string += key + ',';
//       weBought = string.split();
//     }
//   }
//   return weBought;
// }
// console.log(productsWeBougth());

// let possibleToBuy = [];

// possibilityToBuy = function () {
//   let string = '';
//   for (key in products) {
//     if (products[key].buy === false) {
//       let choise = confirm(`Do you want to buy a ${key}?`);
//       if (choise === true) {
//         products[key].buy = true;
//         string += key + ',';
//         possibleToBuy = string.split();
//       }
//     }
//   }
// }
// possibilityToBuy();
// console.log(possibleToBuy);

// totalSum = function() {
//   let sum = 0;
//   let price = 0;
//   for (key in products) {
//     if (products[key].outOfStore === true) {
//       price = products[key].count * products[key].price;
//       sum += price;
//     };
//   };
//   console.log(sum);
// };
// totalSum();

// toBuyMore = function () {
//   for (key in products) {
//     ifWantToBuyMore = confirm(`Do you want to buy more ${key}?`);
//     if (ifWantToBuyMore === true) {
//       newCount = +prompt('Input a new count of products.');
//     }
//     products[key].count = newCount;
//   }
// }

// toBuyMore();
// console.log(products);

//4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.

let people = [
  {
    name: 'Yura',
    age: 55,
    hobby: ["films", "games", "hiking"],
    type: "Admin"
  },
  {
    name: 'Ivan',
    age: 45,
    hobby: ["books", "music", "hiking"],
    type: "User"
  },
  {
    name: 'Taras',
    age: 33,
    hobby: ["football", "dance", "music"],
    type: "Admin"
  },
  {
    name: 'Pavlo',
    age: 24,
    hobby: ["driving", "pizza", "films"],
    type: "User"
  }
  
]

let admins = [];

showAdmins = function () {
  for (i = 0; i < people.length; i++) {
    if (people[i].type === 'Admin') {
      console.log(people[i].name);
    }
  }
}
showAdmins();

let age = 0;
let averageAge = 0;

showAverageAge = function () {
  for (i = 0; i < people.length; i++) {
    age += people[i].age;
    averageAge = age / people.length;
  }
  console.log(averageAge);
}
showAverageAge();


specificHobby = function (people) {
  let uniqueObj = {};
  let allHobby = [];
  for (let i = 0; i < people.length; i++) {
      allHobby = allHobby.concat(people[i].hobby);
  }
  uniqueObj = new Set(allHobby);
  allHobby = [...uniqueObj];
  return allHobby;
}

console.log(specificHobby(people));
