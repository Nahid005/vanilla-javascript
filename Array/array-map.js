const number = [2, 3, 4, 3, 54];
// const newArray = [];

// for (let i = 0; i < number.length; i++) {
//     const element = number[i]; 
//     const result = element * element;
    
//     newArray.push(result);
// }

// function sqr(element) {
//     const result = element * element;
//     return result;
// }

// let newNumber = number.map(function sqr(element) {
//     return element * element; 
// })

let newNumber = number.map(element => {
    return element * element; 
})

console.log(newNumber);