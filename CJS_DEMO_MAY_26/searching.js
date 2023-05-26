const linearSearch = function search(arr, x) {
    for(let i = 0; i < arr.length; i++) {
          if(arr[i] === x) return i;
    }
    return undefined;
}

const binarySearch = function search(arr, x) {
    let low = 0, hi = arr.length -1;
    while(low <= hi) {
        let mid = low + Math.floor(hi - low)/2;
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x) {
            low = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return undefined;
}


//exposing them for outer world
//if key and value are exactly same, we can write once and it will act as key, value pair
module.exports = {
    linearSearch,
    binarySearch
}