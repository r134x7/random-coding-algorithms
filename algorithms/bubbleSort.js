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
var b0 = performance.now();
var sortedListR = bubbleSortRecursive(generateList);
var b1 = performance.now();
var b2 = performance.now();
var sortedListL = bubbleSortLoop(generateList);
var b3 = performance.now();
console.log(sortedListR);
console.log("Recursion time: ".concat(b1 - b0, " milliseconds."));
console.log(sortedListL);
console.log("Loop time: ".concat(b3 - b2, " milliseconds."));
