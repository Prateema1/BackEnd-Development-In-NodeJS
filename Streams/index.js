import {readFile} from 'fs/promises';
import { validateHeaderName } from 'http';

const filePath = new URL('./index.html', import.meta.url);
let contents = await readFile(filePath, {encoding: 'utf8'});



const data = {
    name: "Pratima Adhikari",
    company: "Google",
    age: 27
}

for(const [key, value] of Object.entries(data)) {
    contents = contents.replace(`{${key}}`, value);
}

console.log(contents);