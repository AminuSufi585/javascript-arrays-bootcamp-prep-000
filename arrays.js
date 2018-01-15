var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elem) {
   return [elem, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
   return arr.unshift(elem);
}

function addElementToEndOfArray(arr, elem) {
   return [...arr, elem];
}

function destructivelyAddElementToEndOfArray(arr, elem) {
   return arr.push(elem);
}

function accessElementInArray(arr, i) {
   return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
   arr.shift();
   return arr;
}

function removeElementFromBeginningOfArray(arr) {
   return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
   arr.pop();
   return arr;
}