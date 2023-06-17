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

function mergeLists(listLeft, listRight) {

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

}

const sortedList = mergeSort3(listGenerator(20, 2000));

console.log(sortedList);