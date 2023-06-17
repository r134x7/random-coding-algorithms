import { listGenerator } from "../functions/randomFunctions";

function bubbleSort3(list: number[]) {
    console.log(list)
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

const sortedList = bubbleSort3(listGenerator(20, 100));
  
console.log(sortedList);