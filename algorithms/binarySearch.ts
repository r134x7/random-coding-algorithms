function binarySearchRecursive(list: number[], searchValue: number, indexStart: number, indexEnd: number) {

    let indexMiddle = Math.floor((indexStart + indexEnd) / 2);

    if (indexStart > indexEnd) {
        return -1
    } else if (list[indexMiddle] === searchValue) {

      return indexMiddle
    } else if (list[indexMiddle] > searchValue) {

      return binarySearchRecursive(list, searchValue, indexStart, indexMiddle-1)
    } else {

      return binarySearchRecursive(list, searchValue, indexMiddle+1, indexEnd)
    }
}

function binarySearchLoop(list: number[], target: number) {

    let start = 0;
    let end = list.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (list[middle] === target) {
            return middle;
        } else if (list[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
}

const useList = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const a0 = performance.now();
const sortedListR = binarySearchRecursive(
    useList,
    Number(process.argv[2]),
    0,
    useList.length-1
)
const a1 = performance.now();

const a2 = performance.now();
const sortedListL = binarySearchLoop(
    useList,
    Number(process.argv[2]),
)
const a3 = performance.now();

console.log(sortedListR)
console.log(`Recursion time: ${a1 - a0} milliseconds.`);

console.log(sortedListL)
console.log(`Loop time: ${a3 - a2} milliseconds.`);
