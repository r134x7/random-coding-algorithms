import { listGenerator } from "../functions/randomFunctions";

function bubbleSort3(list: number[]) {

    function swap(list: number[], index: number, accumulator: number[]): number[] {

        if (list[index] === undefined) {
            return accumulator
        }

        return (list[index] > list[index+1])
            ? swap(list, index + 1, accumulator.concat(list[index + 1], list[index]))
            : swap(list, index + 1, accumulator.concat(list[index], list[index+1]))
    }

    return swap(list, 0, [])
}

const sortedList = bubbleSort3(listGenerator(20, 100));
  
console.log(sortedList);