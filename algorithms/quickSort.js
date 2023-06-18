"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomFunctions_1 = require("../functions/randomFunctions");
// Source of original solution: https://stackoverflow.com/questions/5185864/javascript-quicksort
/*
    Spent time improving on the original solution found as the Space complexity given by "Benny Code" was not optimal.
*/
function quickSortRecursive(list) {
    if (list.length <= 1) {
        return list;
    }
    function subList(list, index, pivot, accumulator, condition) {
        if (list[index] === undefined) {
            return accumulator;
        }
        else if ((list[index] < pivot && condition === "lt") || (list[index] > pivot && condition === "gt")) {
            return subList(list, index + 1, pivot, accumulator.concat(list[index]), condition);
        }
        else {
            return subList(list, index + 1, pivot, accumulator, condition);
        }
    }
    return quickSortRecursive(subList(list, 0, list[Math.floor(list.length / 2)], [], "lt")).concat(list[Math.floor(list.length / 2)], quickSortRecursive(subList(list, 0, list[Math.floor(list.length / 2)], [], "gt")));
}
;
function quickSortLoop(list) {
    if (list.length <= 1) {
        return list;
    }
    var pivot = list[Math.floor(list.length / 2)];
    var listLeft = [];
    var listRight = [];
    var index = 0;
    while (list[index] !== undefined) {
        if (list[index] < pivot) {
            listLeft.push(list[index]);
        }
        else if (list[index] > pivot) {
            listRight.push(list[index]);
        }
        index++;
    }
    return quickSortLoop(listLeft)
        .concat(pivot)
        .concat(quickSortLoop(listRight));
}
var loops = 100;
var listLength = Number(process.argv[2]);
var numberRange = 10000;
var unsortedList = (0, randomFunctions_1.listGenerator)(listLength, numberRange);
var averageTimeR = 0;
var averageTimeL = 0;
for (var i = 0; i < loops; i++) {
    var c0 = performance.now();
    quickSortRecursive(unsortedList);
    var c1 = performance.now();
    averageTimeR = averageTimeR + (c1 - c0);
}
for (var i = 0; i < loops; i++) {
    var c2 = performance.now();
    quickSortLoop(unsortedList);
    var c3 = performance.now();
    averageTimeL = averageTimeL + (c3 - c2);
}
console.log("Recursion:");
console.log("Loops: ".concat(loops, ", List Length: ").concat(listLength, ", Number Range: 0 to ").concat(numberRange - 1, ", Time per loop: ").concat(averageTimeR / loops, " milliseconds, Total Time: ").concat(averageTimeR / 1000, " seconds."));
console.log("Loop:");
console.log("Loops: ".concat(loops, ", List Length: ").concat(listLength, ", Number Range: 0 to ").concat(numberRange - 1, ", Time per loop: ").concat(averageTimeL / loops, " milliseconds, Total Time: ").concat(averageTimeL / 1000, " seconds."));
