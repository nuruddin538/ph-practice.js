// ******************* //
// function add(x, y) {
//     const result = x + y;
//     return result;
// }
// console.log(add(2, 3));

// ******************* //
// function show() {
//     console.log("hello world")
// }
// show();
// function printNumber(x) {
//     console.log("value is ", x);
// }
// printNumber(50)

// ******************* //
// const add = (x, y) => {
//     const result = x + y;
//     return result;
// }
// console.log(add(2, 3));

// ******************* //
// const add = (x, y) => {
//     return x + y;
// }
// console.log(add(5, 3));

// ******************* //
// const add = (x, y) => {
//     return x + y;
// }
// console.log(add(5, 3));

// ******************* //
// const add = (x, y) => x + y;
// console.log(add(5, 7));

// ******************* //
// const show = () => {
//     console.log('hello');
// }
// show()
// ******************* //
// const showNumber = x => console.log(x)
// showNumber(40);

// ******************* //
// const showNumber = x => Math.pow(x, 2)
// console.log(showNumber(4));

// ******************* //
// const add = (a=0, b=0) => a + b;
// console.log(add(2, 5))

// ******************* //
// const add = (a=0, b=0) => a + b;
// console.log(add(2))

// ******************* //
// const add = (a=5, b=10) => a + b;
// console.log(add());

// ******************* //
// const add = (a=5, b=10) => a + b;
// console.log(add(50));

// // ******************* //
// const add = (a=5, b=10) => a + b;
// console.log(add(50, 30));

// ******************* //
// const add = (a=5, b=10) => a + b;
// console.log(add(50));

// ******************* //
// const arr = [1, 2, 3];

// for (let item of arr) {
//     console.log(item);
// };
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// ******************* //
// const arr = [1, 2, 3, 4];
// const a = (x) => console.log(x);
// arr.forEach(a)
// arr.forEach((x) => console.log(x));

// ******************* //
// const fruits = ["mango", "bango", "chingo"];

// fruits.forEach(item => {
//     console.log(item);
// })

// ******************* //
// const arr = [1, 2, 3, 4];
// let sum = 0;
// arr.forEach(item => {
//     sum += item;
// })
// arr.forEach(item => sum += item)
// console.log(sum);

// arr.map((item) => console.log(item));

// const result = arr.forEach((item) => item)
// console.log(result);
// const result = arr.map((item) => item*2)
// console.log(result);
// console.log("main", arr)

// const fruits = ["Mango", "chingo", "bango", "Tango"];
// // fruits.forEach((item) => console.log(item))
// fruits.forEach((item, index, arr) => console.log(item, index, arr));

// ************************
// const fruits = ["Mango", "chingo", "bango", "Tango"];
// const find = (fruits) => {
//     for (let item of fruits) {
//         if(item === "bango") {
//             return item;
//         }
//     }
//     return null;
// }
// const x = find(fruits);
// console.log(x)

// const y = fruits.find((item) => item === "bango")
// console.log(y);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const filter = numbers => {
//     const result = [];
//     for (let item of numbers) {
//         if (item % 2 === 0) {
//             result.push(item)
//         }
//     }
//     return result;
// }
// const x = filter(numbers);
// console.log(x);
// const numbers = [1, , 3, , 5, , 7];
// const filter = numbers => {
//     const result = [];
//     for (let item of numbers) {
//         if (item % 2 === 0) {
//             result.push(item)
//         }
//     }
//     return result;
// }
// const x = filter(numbers);
// console.log(x);

// const numbers = [1, , 3, , 5, , 7];
// // const x = filter(numbers)

// const y = numbers.filter((item) => item % 2 === 0)
// console.log(y);

// const arr = [1, 2, 3, 4, 5];
// const initial = 50;

// const sum = arr.reduce((previous, current) => previous + current, 0);
// console.log(sum);

// const multi = arr.reduce((previous, current) => previous * current)
// console.log(multi);

const myName = "Mehedy";
const Age = 26;
const Address = "Rajshahi";
const bouName = "Katappar Beti"

// const sentence = "Amar naam " + myName + "\n. Amar boyos " + Age + "\n. Amar Bari " + Address + "\n. amer bou er name " + bouName;
// console.log(sentence)

// const sentence1 = `Amar name ${myName} Amar boyos ${Age} Amar Bari ${Address} Amar bou ar naam ${bouName}`
// console.log(sentence1);

// const x = 55;
// if (x > 5) {
//     console.log("x is grater than 5")
// }
// else {
//     console.log("x is less than 5")
// }

// const x = 55;
// x>5 ? console.log("x is greater than 5") : console.log("x is less than 5")


// const arr = [2, 3, 4, 5, 6];
// const arr2 = arr;

// arr2.push(10);
// arr2.push(20);
// console.log(arr);
// console.log(arr2);

// const arr = [2, 3, 4, 5, 6];
// const arr2 = [...arr];

// arr2.push(10);
// arr2.push(20);
// console.log(arr);
// console.log(arr2);

// const arr = [2, 3, 4, 5, 6];
// const [a, b] = arr
// console.log(a, b);

// const arr = [2, 3, 4, 5, 6];
// const [a, b, c, rest] = arr
// console.log(a, b, c, rest);

// const arr = [2, 3, 4, 5, 6];
// const [a, b, c, ...rest] = arr
// console.log(a, b, c, rest);

// const person = {
//     name: "mehedy",
//     age: 26
// }
// const person2 = { ...person };
// person2.address = "Rajshahi"
// console.log(person);
// console.log(person2);

// const person = { name: 'mehedy', age: 26, address: 'Rajshahi' }
// const {age,...rest} = person;
// console.log(rest);

// const person = { name: 'mehedy', age: 26, address: 'Rajshahi' }

// console.log(person.age)
// console.log(person["age"])
// const propertyName = "age"
// console.log(person[propertyName])

// objectArray**********************
// const complexObject = {
//     id: 1,
//     name: "Main Object",
//     info: {
//         description: "This is a complex nested object.",
//         author: {
//             firstName: "John",
//             lastName: "Doe"
//         }
//     },
//     data: {
//         values: [10, 20, 30],
//         settings: {
//             isEnable: true,
//             maxItems: 5
//         }
//     }
// };

// console.log("name: ", complexObject.name)
// console.log("description: ", complexObject.info.description)
// console.log("lastName: ", complexObject.info.author.lastName)
// console.log("last value: ", complexObject.data.values[complexObject.data.values.length - 1])


// optional chaning*************

// const complexObject = {
//     id: 1,
//     name: "Main Object",
//     info: {
//         description: "This is a complex nested object.",
//         author: {
//             firstName: "John",
//             lastName: "Doe"
//         }
//     },
//     data: {
//         values: [10, 20, 30],
//         settings: {
//             isEnable: true,
//             maxItems: 5
//         }
//     }
// };

// // console.log(complexObject.address)
// console.log(complexObject.contact)
// console.log(complexObject?.contact?.phone)

// scope js***************

// const x = 5;
// if (true) {
//     console.log(x)
// }

// {
//     let x = 5;
//     x++;
//     console.log("inside block: ", x)
// }
// console.log("outside block: ", x)
// {
//     var x = 5;
//     x++;
//     console.log("inside block: ", x)
// }
// console.log("outside block: ", x)

// function show() {
//     var x = 5;
//     y = 10;
// }
// show();
// // console.log(x);
// console.log(y);

const x = 5;
{
    const x = 10;
    console.log('inside block: ',x)
}
console.log("outside block: ", x)

