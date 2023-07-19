import {readFile, writeFile} from 'fs/promises';

const filePath = new URL('./demo.txt', import.meta.url);
let contents = await readFile(filePath, {encoding: 'utf8'});

console.log(contents);

// const data = {
//     name: "Pratima Adhikari",
//     company: "Google",
//     age: 27
// }

// for(const [key, value] of Object.entries(data)) {
//     contents = contents.replace(`{${key}}`, value);
// }

// console.log(contents);

// await writeFile(filePath, contents);