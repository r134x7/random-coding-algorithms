import { listGenerator } from "../functions/randomFunctions";
// Source of original solution: https://stackoverflow.com/questions/5185864/javascript-quicksort
/*
    Spent time improving on the original solution found as the Space complexity given by "Benny Code" was not optimal.
*/
function quickSortRecursive(list: number[]): number[] {

    if (list.length <= 1) {
        return list
    }

    function subList(list: number[], index: number, pivot: number, accumulator: number[], condition: string) {
        if (list[index] === undefined) {
            return accumulator
        } else if ((list[index] < pivot && condition === "lt") || (list[index] > pivot && condition === "gt")) {
            return subList(list, index + 1, pivot, accumulator.concat(list[index]), condition)
        } else {
            return subList(list, index + 1, pivot, accumulator, condition)
        }
    }

    return quickSortRecursive(
        subList(list, 0, list[Math.floor(list.length / 2)], [], "lt")
    ).concat(list[Math.floor(list.length / 2)], quickSortRecursive(
        subList(list, 0, list[Math.floor(list.length / 2)], [], "gt")
    ));
};

function quickSortLoop(list: number[]): number[] {

    if (list.length <= 1) {
        return list
    }

    let pivot = list[Math.floor(list.length / 2)];

    let listLeft = [];
    let listRight = [];

    let index = 0

    while (list[index] !== undefined) {
        if (list[index] < pivot) {
            listLeft.push(list[index]);
        } else if (list[index] > pivot) {
            listRight.push(list[index]);
        }

        index++;
    }

    return quickSortLoop(listLeft)
        .concat(pivot)
        .concat(quickSortLoop(listRight))
}

const loops = 100;
const listLength = Number(process.argv[2]);
const numberRange = 10000;
const unsortedList = listGenerator(listLength, numberRange);

let averageTimeR = 0;
let averageTimeL = 0;

for (let i = 0; i < loops; i++) {
    const c0 = performance.now();
    quickSortRecursive(unsortedList)
    const c1 = performance.now();
    
    averageTimeR = averageTimeR + (c1 - c0);
}

for (let i = 0; i < loops; i++) {
    const c2 = performance.now();
    quickSortLoop(unsortedList);
    const c3 = performance.now();

    averageTimeL = averageTimeL + (c3 - c2);
}

console.log("Recursion:")
console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeR / loops} milliseconds, Total Time: ${averageTimeR / 1000} seconds.`)

console.log("Loop:");
console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeL / loops} milliseconds, Total Time: ${averageTimeL / 1000} seconds.`)