import getClasses from './getClasses'

console.log("ran from index.js")
getClasses()

const obj = { a: 'alpha', b: 'bravo' }

// ES7 Object spread test
const newObj = { ...obj, c: 'charlie' }
console.log(newObj)

// ES8 Object.values test
console.log(Object.values(newObj));
