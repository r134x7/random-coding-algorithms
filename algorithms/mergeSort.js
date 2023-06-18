"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomFunctions_1 = require("../functions/randomFunctions");
function mergeSort(list, recursive) {
    if (list.length <= 1) {
        return list;
    }
    if (recursive === true) {
        return mergeListsRecursive(mergeSort(list.slice(0, Math.floor(list.length / 2)), true), mergeSort(list.slice(Math.floor(list.length / 2)), true));
    }
    else {
        return mergeListsLoop(mergeSort(list.slice(0, Math.floor(list.length / 2))), mergeSort(list.slice(Math.floor(list.length / 2))));
    }
}
function mergeListsRecursive(listLeft, listRight) {
    // compare listLeft with listRight. 1:1 => if l > r then return [r, l]. 2:2 => if l[0] > r[0] return [r[0], ...] then increase right index if l[0] > r[1] return [r[0], r[1], ...] then if right index is undefined then return [r[0], r[1], l[0], l[1]] 4:4 above list turns into either the left or the right list and the process repeats
    function sortLists(leftList, rightList, leftIndex, rightIndex, accumulator) {
        if (leftList[leftIndex] === undefined) {
            return accumulator.concat(rightList.slice(rightIndex));
        }
        else if (rightList[rightIndex] === undefined) {
            return accumulator.concat(leftList.slice(leftIndex));
        }
        else {
            return (leftList[leftIndex] > rightList[rightIndex])
                ? sortLists(leftList, rightList, leftIndex, rightIndex + 1, accumulator.concat(rightList[rightIndex]))
                : sortLists(leftList, rightList, leftIndex + 1, rightIndex, accumulator.concat(leftList[leftIndex]));
        }
    }
    return sortLists(listLeft, listRight, 0, 0, []);
}
function mergeListsLoop(listLeft, listRight) {
    var sortedList = [];
    var indexLeft = 0;
    var indexRight = 0;
    while (indexLeft < listLeft.length && indexRight < listRight.length) {
        if (listLeft[indexLeft] < listRight[indexRight]) {
            sortedList.push(listLeft[indexLeft]);
            indexLeft++;
        }
        else {
            sortedList.push(listRight[indexRight]);
            indexRight++;
        }
    }
    return sortedList.concat(listLeft.slice(indexLeft)).concat(listRight.slice(indexRight));
}
var loops = 100;
var listLength = Number(process.argv[2]);
var numberRange = 10000;
var unsortedList = (0, randomFunctions_1.listGenerator)(listLength, numberRange);
var averageTimeR = 0;
var averageTimeL = 0;
for (var i = 0; i < loops; i++) {
    var c0 = performance.now();
    mergeSort(unsortedList, true);
    var c1 = performance.now();
    averageTimeR = averageTimeR + (c1 - c0);
}
for (var i = 0; i < loops; i++) {
    var c2 = performance.now();
    mergeSort(unsortedList);
    var c3 = performance.now();
    averageTimeL = averageTimeL + (c3 - c2);
}
console.log("Recursion:");
console.log("Loops: ".concat(loops, ", List Length: ").concat(listLength, ", Number Range: 0 to ").concat(numberRange - 1, ", Time per loop: ").concat(averageTimeR / loops, " milliseconds, Total Time: ").concat(averageTimeR / 1000, " seconds."));
console.log("Loop:");
console.log("Loops: ".concat(loops, ", List Length: ").concat(listLength, ", Number Range: 0 to ").concat(numberRange - 1, ", Time per loop: ").concat(averageTimeL / loops, " milliseconds, Total Time: ").concat(averageTimeL / 1000, " seconds."));
