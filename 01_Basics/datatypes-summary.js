// primitive

//7 types: string.number,boolean,null,underdefined,symbol,bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3423435253423434232n


//refrence (non-primitive)

//Array,objects,function

const heros= ["shaktiman","naagraj","doga"]
let myObj = {
    name: "shivam",
    age: 22,

}
const myFunction = function(){
    console.log("hello world");

}

console.log(typeof anotherId);