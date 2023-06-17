"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomFunctions_1 = require("../functions/randomFunctions");
function bubbleSortRecursive(list) {
    function swap(list, index, accumulator, sortCount) {
        if (list[index] === undefined) {
            return (sortCount === 0)
                ? accumulator
                : swap(accumulator, 0, [], 0);
        }
        return (list[index] > list[index + 1])
            ? swap(list, index + 2, accumulator.concat(list[index + 1], list[index]), sortCount + 1)
            : swap(list, index + 1, accumulator.concat(list[index]), sortCount);
    }
    return swap(list, 0, [], 0);
}
function bubbleSortLoop(list) {
    var index = 0;
    var sorted = false;
    var sortCount = 0;
    var sortedList = list;
    var sorting = [];
    while (sorted === false) {
        if (index > list.length - 1) {
            if (sortCount === 0) {
                sortedList = sorting;
                sorted = true;
                // prevents loop from continuing current loop which would push an undefined value to list
                break;
            }
            else {
                sortCount = 0;
                index = 0;
                sortedList = sorting;
                sorting = [];
            }
        }
        if (sortedList[index] > sortedList[index + 1] && sortedList[index + 1] !== undefined) {
            sorting.push(sortedList[index + 1], sortedList[index]);
            index = index + 2;
            sortCount++;
        }
        else {
            sorting.push(sortedList[index]);
            index++;
        }
    }
    return sortedList;
}
var generateList = (0, randomFunctions_1.listGenerator)(20, 100);
var loops = 100;
var listLength = Number(process.argv[2]);
var numberRange = 10000;
var longList = (0, randomFunctions_1.listGenerator)(listLength, numberRange);
var b0 = performance.now();
var sortedListR = bubbleSortRecursive(generateList);
var b1 = performance.now();
var b2 = performance.now();
var sortedListL = bubbleSortLoop(generateList);
var b3 = performance.now();
var averageTime = 0;
for (var i = 0; i < loops; i++) {
    var b4 = performance.now();
    bubbleSortLoop(longList);
    var b5 = performance.now();
    averageTime = averageTime + (b5 - b4);
}
console.log(sortedListR);
console.log("Recursion time: ".concat(b1 - b0, " milliseconds."));
console.log(sortedListL);
console.log("Loop time: ".concat(b3 - b2, " milliseconds."));
console.log("Loops: ".concat(loops, ", List Length: ").concat(listLength, ", Number Range: 0 to ").concat(numberRange - 1, ", Time per loop: ").concat(averageTime / loops, " milliseconds, Total Time: ").concat(averageTime / 1000, " seconds."));
