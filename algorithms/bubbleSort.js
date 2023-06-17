"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomFunctions_1 = require("../functions/randomFunctions");
function bubbleSort3(list) {
    console.log(list);
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
var sortedList = bubbleSort3((0, randomFunctions_1.listGenerator)(20, 100));
console.log(sortedList);
