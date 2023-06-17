import { listGenerator } from "../functions/randomFunctions";

function bubbleSortRecursive(list: number[]) {

    function swap(list: number[], index: number, accumulator: number[], sortCount: number): number[] {

        if (list[index] === undefined) {
            return (sortCount === 0)
                ? accumulator 
                : swap(accumulator, 0, [], 0)
        } 

        return (list[index] > list[index+1])
            ? swap(list, index + 2, accumulator.concat(list[index + 1], list[index]), sortCount + 1)
            : swap(list, index + 1, accumulator.concat(list[index]), sortCount)
    }

    return swap(list, 0, [], 0)
}

function bubbleSortLoop(list: number[]) {

    let index = 0;
    let sorted = false;
    let sortCount = 0;
    let sortedList: number[] = list;
    let sorting: number[] = [];

    while (sorted === false) {

        if (index > list.length - 1) {
            if (sortCount === 0) {
                sortedList = sorting;
                sorted = true;
                // prevents loop from continuing current loop which would push an undefined value to list
                break
            } else {
                sortCount = 0;
                index = 0;
                sortedList = sorting;
                sorting = [];
            }
        }

        if (sortedList[index] > sortedList[index+1] && sortedList[index+1] !== undefined) {
            sorting.push(sortedList[index+1], sortedList[index]);
            index = index + 2;
            sortCount++
        } else {
            sorting.push(sortedList[index]);
            index++;
        }
    }

    return sortedList
}

const generateList = listGenerator(20, 100);

const loops = 100;
const listLength = Number(process.argv[2]);
const numberRange = 10000;
const longList = listGenerator(listLength, numberRange);

const b0 = performance.now();
const sortedListR = bubbleSortRecursive(generateList);
const b1 = performance.now();

const b2 = performance.now();
const sortedListL = bubbleSortLoop(generateList);
const b3 = performance.now();

let averageTime = 0; 

for (let i = 0; i < loops; i++) {
    const b4 = performance.now();
    bubbleSortLoop(longList);
    const b5 = performance.now();

    averageTime = averageTime + (b5 - b4)
}
  
console.log(sortedListR)
console.log(`Recursion time: ${b1 - b0} milliseconds.`);

console.log(sortedListL)
console.log(`Loop time: ${b3 - b2} milliseconds.`);

console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTime / loops} milliseconds, Total Time: ${averageTime / 1000} seconds.`)