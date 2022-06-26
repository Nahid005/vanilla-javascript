/**
 * This is a array syntext 
 */

const array1 = ['element1', 'element2', 'element3', 'element4', 'element5']; 

/**
 * How to Traverse in array using for loop
 */

const array2 = [1, 2, 3, 4, 5, 6, 7, 8];

for( let i = 0; i < array2.length; i++) {
    // console.log(array2[i]);
}

/**
 * How to Traverse in array using for loop and sumation this value
 */

const array3 = [1, 2, 3, 4, 5, 6, 7, 8]

let sum = 0;
for(let i = 0; i < array3.length; i++) {
    sum = sum + array3[i];
}

// console.log(sum)

/**
 * traverse a previous array and create a new array 
 */

const array4 = [1, 2, 3, 4, 5, 6, 7, 8];

let newarray = []
for ( let i = 0; i < array4.length; i++) {
    // let result = array4[i] + 2;
    // let result = array4[i] * 2;

    // newarray.push(result);
}

// console.log(newarray);

/**
 * filter new data in this array 
 */

const array5 = [1, 2, 3, 4, 5, 6, 7, 8,]
const findNumber = 4;

// const result = array5.filter( (x) => findNumber < x)
const result = array5.filter((x) => x < findNumber)

// console.log(result);

/**
 * find new data in this array 
 */

const array6 = [1, 2, 3, 4, 5, 6, 7, 8];

const findNew = 5;
const find = array6.find((x) => x > findNew)

// console.log(find);

/**
 * How to use map method in array 
 */

const array7 = [1, 2, 3, 4, 5, 6, 7, 8];

const newMap = array7.map((x) => x * 2)
// console.log(newMap);


const array8 = [1, 2, 3, 4, 5, 6, 7, 8];

let prev = 1;

const reduce = array8.reduce((prev, x, index) => prev + x )
console.log(reduce)