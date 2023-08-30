function add(x, y) {
    const result = x + y;
    return result;
}
console.log(add(2, 3))

const add = (x, y) => {
    return x + y
}
const add = (x, y) => x + y;
console.log(add(4, 5))

const show = () => {
    console.log('hello')
}
show()
const showNumber = x => console.log(x);
showNumber()