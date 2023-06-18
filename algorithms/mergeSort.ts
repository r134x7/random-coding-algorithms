import { listGenerator } from "../functions/randomFunctions";

function mergeSort(list: number[], recursive?: boolean): number[] {

    if (list.length <= 1) {
        return list;
    }

    if (recursive === true) {

        return mergeListsRecursive(
            mergeSort(list.slice(0, Math.floor(list.length / 2)), true),
            mergeSort(list.slice(Math.floor(list.length / 2)), true)
            ) 
    } else {
        return mergeListsLoop(
            mergeSort(list.slice(0, Math.floor(list.length / 2))),
            mergeSort(list.slice(Math.floor(list.length / 2)))
        )
    }

}

function mergeListsRecursive(listLeft: number[], listRight: number[]): number[] {

    // compare listLeft with listRight. 1:1 => if l > r then return [r, l]. 2:2 => if l[0] > r[0] return [r[0], ...] then increase right index if l[0] > r[1] return [r[0], r[1], ...] then if right index is undefined then return [r[0], r[1], l[0], l[1]] 4:4 above list turns into either the left or the right list and the process repeats

    function sortLists(leftList: number[], rightList: number[], leftIndex: number, rightIndex: number, accumulator: number[]): number[] {

        if (leftList[leftIndex] === undefined) {
            return accumulator.concat(rightList.slice(rightIndex))
        } else if (rightList[rightIndex] === undefined) {
            return accumulator.concat(leftList.slice(leftIndex))
        } else {

            return (leftList[leftIndex] > rightList[rightIndex])
                ? sortLists(leftList, rightList, leftIndex, rightIndex + 1, accumulator.concat(rightList[rightIndex]))
                : sortLists(leftList, rightList, leftIndex + 1, rightIndex, accumulator.concat(leftList[leftIndex]))
        }
    }

    return sortLists(listLeft, listRight, 0, 0, []);
}

function mergeListsLoop(listLeft: number[], listRight: number[]) {

    const sortedList = [];

    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < listLeft.length && indexRight < listRight.length) {

        if (listLeft[indexLeft] < listRight[indexRight]) {
            sortedList.push(listLeft[indexLeft]);
            indexLeft++;
        } else {
            sortedList.push(listRight[indexRight]);
            indexRight++;
        }
    }

    return sortedList.concat(listLeft.slice(indexLeft)).concat(listRight.slice(indexRight));
}

const loops = 100;
const listLength = Number(process.argv[2]);
const numberRange = 10000;
const unsortedList = listGenerator(listLength, numberRange);

let averageTimeR = 0;
let averageTimeL = 0;

for (let i = 0; i < loops; i++) {
    const c0 = performance.now();
    mergeSort(unsortedList, true);
    const c1 = performance.now();
    
    averageTimeR = averageTimeR + (c1 - c0);
}

for (let i = 0; i < loops; i++) {
    const c2 = performance.now();
    mergeSort(unsortedList);
    const c3 = performance.now();

    averageTimeL = averageTimeL + (c3 - c2);
}

console.log("Recursion:")
console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeR / loops} milliseconds, Total Time: ${averageTimeR / 1000} seconds.`)

console.log("Loop:");
console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeL / loops} milliseconds, Total Time: ${averageTimeL / 1000} seconds.`)