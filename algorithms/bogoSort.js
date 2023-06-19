"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                while (indexCheck.length < list.length) {
                    var randomIndex = Math.floor(Math.random() * list.length);
                    if (!indexCheck.includes(sortedList[randomIndex])) {
                        indexCheck.push(sortedList[randomIndex]);
                    }
                }
                sortedList = indexCheck;
            }
        }
    } while (sorted === false);
    return sortedList;
}
// const loops = 100;
// const listLength = Number(process.argv[2]);
// const numberRange = 10000;
// const longList = listGenerator(listLength, numberRange);
// let averageTime = 0; 
// for (let i = 0; i < loops; i++) {
//     const b0 = performance.now();
//     bogoSortLoop(longList);
//     const b1 = performance.now();
//     averageTime = averageTime + (b1 - b0)
// }
// const generateList = listGenerator(5, 100);
var resultList = bogoSortLoop([4, 1, 2]);
console.log(resultList);
// console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTime / loops} milliseconds, Total Time: ${averageTime / 1000} seconds.`)
