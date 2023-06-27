// const searchFunctions = require('./searching');
// const basicSort = require('./sorting'); //named exports
// const quickSort = require('./quicksort');

import searchingAlgo from './searching.js';
import insertionsort, { bubblesort as bs } from './sorting.mjs';
// import { bubblesort } from './sorting.mjs';

// import * as sorting from './sorting.mjs';


//OR we can destructure (unpacking key value pair)
// const { linearSearch, binarySearch } = require('./searching);

console.log(searchingAlgo.linearSearch([3,2,1,5,4,23,6], 23));

// console.log(module)

let arr = [5,4,3,2,1];
// basicSort.bubblesort(arr);
bs(arr);
console.log(arr);

// quickSort(arr);

// console.log(arr);