"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomFunctions_1 = require("../functions/randomFunctions");
function bogoSortLoop(list) {
    var sorted = false;
    var sortedList = list;
    var index = 0;
    var sortCount = 0;
    do {
        if (sortedList[index] > sortedList[index + 1]) {
            index++;
            sortCount++;
        }
        else {
            index++;
        }
        if (index > list.length - 1) {
            if (sortCount === 0) {
                sorted = true;
            }
            else {
                sortCount = 0;
                index = 0;
                var indexCheck = [];
                var currentList = sortedList;
                while (indexCheck.length < list.length) {
                    // this method doesn't work for duplicate values
                    // let randomIndex = Math.floor(Math.random() * list.length);
                    // if (!indexCheck.includes(sortedList[randomIndex])) {
                    //     indexCheck.push(sortedList[randomIndex])
                    // }
                    var randomIndex = Math.floor(Math.random() * list.length);
                    indexCheck = indexCheck.concat(currentList.slice(randomIndex, randomIndex + 1));
                    currentList = currentList.slice(0, randomIndex).concat(currentList.slice(randomIndex + 1));
                }
                sortedList = indexCheck;
            }
        }
    } while (sorted === false);
    return sortedList;
}
var loops = 100;
var listLength = Number(process.argv[2]);
var numberRange = 10000;
var longList = (0, randomFunctions_1.listGenerator)(listLength, numberRange);
var averageTime = 0;
for (var i = 0; i < loops; i++) {
    var b0 = performance.now();
    bogoSortLoop(longList);
    var b1 = performance.now();
    averageTime = averageTime + (b1 - b0);
}
// const generateList = listGenerator(5, 100);
// const resultList = bogoSortLoop(generateList);
// console.log(resultList)
console.log("Loops: ".concat(loops, ", List Length: ").concat(listLength, ", Number Range: 0 to ").concat(numberRange - 1, ", Time per loop: ").concat(averageTime / loops, " milliseconds, Total Time: ").concat(averageTime / 1000, " seconds."));
