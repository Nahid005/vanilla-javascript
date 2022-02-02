const student = [
    {id: '1', name: 'Nahid Hassan', age: '23'},
    {id: '2', name: 'Nahid', age: '23'},
    {id: '3', name: 'Hassan', age: '23'},
    {id: '4', name: 'munich', age: '23'},
]

let arrayResult = student.map(element => element);

let studentName = arrayResult.map( arrayResult => arrayResult.name);
console.log(studentName);
