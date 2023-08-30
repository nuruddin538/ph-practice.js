// const function1 = (callback) => {
//     console.log(typeof callback)
//     callback()
// }
// const callback = () => {
//     console.log('I am callback function')
// }
// function1(callback)

// const function1 = (a, callback) => {
//     const b = 5;
//     callback(a,b)
// }
// const callback = (x, y) => {
//     console.log("sum =", x+y)
// }
// function1(10,callback)

// const outerFunction = () => {
//     let count = 0;
//     return () => {
//         count++;
//         console.log("count: ", count)
//     }
// }
// const xl = outerFunction();
// // console.log(typeof xl)
// xl()

// closuer function
// normal function
// const fun = () => {
//     let count = 0;
//     count++;
//     console.log("count: ", count)
// }
// fun()
// fun()

// const outerFunction = () => {
//     let count = 0;
//     return () => {
//     count++;
//     console.log("count: ", count)
//     }
// }
// const x1 = outerFunction();
// const x2 = outerFunction();
// x1()
// x1()
// x2()

// problem solving
// const polapain = [
//     { name: "Abul", job: "sorkari", salary: "17000" },
//     { name: "Babul", job: "besorkari", salary: "25000" },
//     { name: "kabul", job: "sorkari", salary: "21000" },
//     { name: "Habul", job: "besorkari", salary: "45000" },
//     { name: "Jabul", job: "sorkari", salary: "21000" },
//     { name: "Mabul", job: "besorkari", salary: "55000" },
// ];
// const vaggobans = polapain.filter((pola) => (pola.job === "sorkari" && pola.salary >= 20000) || (pola.job === 'besorkari' && pola.salary >= 40000))

// const polaNumber = Math.floor(Math.random()*vaggobans.length)
// console.log(polaNumber)

// const finalJami = vaggobans[polaNumber].name;
// console.log(`${finalJami}, Tumi jitso...!`)


// const persons = [
//     { id: 'ID01', name: "abul vai", age: 23 },
//     { id: 'ID02', name: "babul vai", age: 43 },
//     { id: 'ID03', name: "babul vai", age: 54 },
//     { id: 'ID04', name: "babul vai", age: 29 },
// ]
// persons.map((person) => {
//     const id = person.id;
//     const name = person.name;

//     obj[id] = name;
// })
// console.log(obj);


// let obj = {};
// obj.x = "hello";
// obj["y"] = "world"
// console.log(obj)
// const property = "phone";
// obj[property] = 1258004

const person = {
    name: "mehedy",
    age: 26
}
const {name:myName} = person;
console.log(myName);

// function show(obj) {
//     const { name, age } = obj;
//     console.log(`my name is ${name}. My age is ${age}`)
// }
// show(person)

function show({name, age}) {
    // const { name, age } = obj;
    console.log(`my name is ${name}. My age is ${age}`)
}
show(person)