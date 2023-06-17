import { listGenerator } from "../functions/randomFunctions";
// Source of original solution: https://stackoverflow.com/questions/5185864/javascript-quicksort
/*
    Spent time improving on the original solution found as the Space complexity given by "Benny Code" was not optimal.
*/
function quickSort3(list: number[]): number[] {

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

    return quickSort3(
        subList(list, 0, list[Math.floor(list.length / 2)], [], "lt")
    ).concat(list[Math.floor(list.length / 2)], quickSort3(
        subList(list, 0, list[Math.floor(list.length / 2)], [], "gt")
    ));
};

const sortedList = quickSort3(listGenerator(20, 2000));
  
console.log(sortedList);
