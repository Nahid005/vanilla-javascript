const age = [ 12, 12, 13, 56];
const age1 = [ 32, 54, 24, 53]

// const allage = age.concat(age1);

const allage = [...age , ...age1]

console.log(allage)