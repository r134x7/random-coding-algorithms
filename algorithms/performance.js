"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomFunctions_1 = require("../functions/randomFunctions");
var loops = 100;
var listLength = Number(process.argv[2]);
var numberRange = 10000;
var unsortedList = (0, randomFunctions_1.listGenerator)(listLength, numberRange);
var squared = function (value) { return value * value; };
var averageTimeLoop = 0;
var averageTimeArrayMap = 0;
var averageTimeArrayReduce = 0;
var averageTimeMAP = 0;
var averageTimeObject = 0;
var listFor = [];
var listMap = unsortedList;
for (var i = 0; i < loops; i++) {
    var index = 0;
    var c0 = performance.now();
    while (unsortedList[index] !== undefined) {
        listFor.push(squared(unsortedList[index]));
        index++;
    }
    var c1 = performance.now();
    averageTimeLoop = averageTimeLoop + (c1 - c0);
}
console.log("Loop:");
console.log("Loops: ".concat(loops, ", List Length: ").concat(listLength, ", Number Range: 0 to ").concat(numberRange - 1, ", Time per loop: ").concat(averageTimeLoop / loops, " milliseconds, Total Time: ").concat(averageTimeLoop / 1000, " seconds."));
for (var i = 0; i < loops; i++) {
    var c2 = performance.now();
    var y = listMap.map(function (elem) { return squared(elem); });
    var c3 = performance.now();
    averageTimeArrayMap = averageTimeArrayMap + (c3 - c2);
}
console.log("Array Map:");
console.log("Loops: ".concat(loops, ", List Length: ").concat(listLength, ", Number Range: 0 to ").concat(numberRange - 1, ", Time per loop: ").concat(averageTimeArrayMap / loops, " milliseconds, Total Time: ").concat(averageTimeArrayMap / 1000, " seconds."));
for (var i = 0; i < loops; i++) {
    var c4 = performance.now();
    var y = listMap.reduce(function (acc, next) { return acc + squared(next); }, 0);
    var c5 = performance.now();
    averageTimeArrayReduce = averageTimeArrayReduce + (c5 - c4);
}
console.log("Array Reduce:");
console.log("Loops: ".concat(loops, ", List Length: ").concat(listLength, ", Number Range: 0 to ").concat(numberRange - 1, ", Time per loop: ").concat(averageTimeArrayReduce / loops, " milliseconds, Total Time: ").concat(averageTimeArrayReduce / 1000, " seconds."));
var xMap = new Map();
for (var i = 0; i < loops; i++) {
    var index = 0;
    var c6 = performance.now();
    while (unsortedList[index] !== undefined) {
        // xMap.set(index, squared(unsortedList[index]))
        xMap.set(index, { value: squared(unsortedList[index]) });
        index++;
    }
    var c7 = performance.now();
    averageTimeMAP = averageTimeMAP + (c7 - c6);
}
console.log("Map():");
console.log("Loops: ".concat(loops, ", List Length: ").concat(listLength, ", Number Range: 0 to ").concat(numberRange - 1, ", Time per loop: ").concat(averageTimeMAP / loops, " milliseconds, Total Time: ").concat(averageTimeMAP / 1000, " seconds."));
// let xObject = [];
// for (let i = 0; i < loops; i++) {
//     let index = 0;
//     const c8 = performance.now();
//     while (unsortedList[index] !== undefined) {
//         xObject.push({ index: squared(unsortedList[index])})
//         index++
//     }
//     const c9 = performance.now();
//     averageTimeObject = averageTimeObject + (c9 - c8);
// }
// console.log("Array Object:");
// console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeObject / loops} milliseconds, Total Time: ${averageTimeObject / 1000} seconds.`)
