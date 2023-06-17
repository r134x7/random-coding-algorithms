"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomFunctions_1 = require("../functions/randomFunctions");
function bubbleSort3(list) {
    function swap(list, index, accumulator) {
        if (list[index] === undefined) {
            return accumulator;
        }
        return (list[index] > list[index + 1])
            ? swap(list, index + 1, accumulator.concat(list[index + 1], list[index]))
            : swap(list, index + 1, accumulator.concat(list[index], list[index + 1]));
    }
    return swap(list, 0, []);
}
var sortedList = bubbleSort3((0, randomFunctions_1.listGenerator)(20, 100));
console.log(sortedList);
