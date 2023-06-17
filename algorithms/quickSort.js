"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomFunctions_1 = require("../functions/randomFunctions");
// Source of original solution: https://stackoverflow.com/questions/5185864/javascript-quicksort
/*
    Spent time improving on the original solution found as the Space complexity given by "Benny Code" was not optimal.
*/
function quickSort3(list) {
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
    return quickSort3(subList(list, 0, list[Math.floor(list.length / 2)], [], "lt")).concat(list[Math.floor(list.length / 2)], quickSort3(subList(list, 0, list[Math.floor(list.length / 2)], [], "gt")));
}
;
var sortedList = quickSort3((0, randomFunctions_1.listGenerator)(20, 2000));
console.log(sortedList);
