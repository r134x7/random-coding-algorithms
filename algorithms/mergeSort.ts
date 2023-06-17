import { listGenerator } from "../functions/randomFunctions";

function mergeSort3(list: number[]): number[] {

    if (list.length <= 1) {
        return list;
    }

    return mergeLists(
        mergeSort3(list.slice(0, Math.floor(list.length / 2))),
        mergeSort3(list.slice(Math.floor(list.length / 2)))
        ) 
}

function mergeLists(listLeft: number[], listRight: number[]): number[] {

    // compare listLeft with listRight
    // 1:1 => if l > r then return [r, l]
    /* 2:2 => if l[0] > r[0] return [r[0], ...]
        then increase right index
        if l[0] > r[1] return [r[0], r[1], ...]    
        then
        if right index is undefined then return
        [r[0], r[1], l[0], l[1]]
        
        4:4 above list turns into either 
        the left or the right list and the process repeats
    */

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

const sortedList = mergeSort3(listGenerator(20, 2000));

console.log(sortedList);