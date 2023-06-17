function binarySearchRecursive(list, searchValue, indexStart, indexEnd) {
    var indexMiddle = Math.floor((indexStart + indexEnd) / 2);
    if (indexStart > indexEnd) {
        return -1;
    }
    else if (list[indexMiddle] === searchValue) {
        return indexMiddle;
    }
    else if (list[indexMiddle] > searchValue) {
        return binarySearchRecursive(list, searchValue, indexStart, indexMiddle - 1);
    }
    else {
        return binarySearchRecursive(list, searchValue, indexMiddle + 1, indexEnd);
    }
}
function binarySearchLoop(list, target) {
    var start = 0;
    var end = list.length - 1;
    while (start <= end) {
        var middle = Math.floor((start + end) / 2);
        if (list[middle] === target) {
            return middle;
        }
        else if (list[middle] < target) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    return -1;
}
var useList = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var a0 = performance.now();
var sortedListR = binarySearchRecursive(useList, Number(process.argv[2]), 0, useList.length - 1);
var a1 = performance.now();
var a2 = performance.now();
var sortedListL = binarySearchLoop(useList, Number(process.argv[2]));
var a3 = performance.now();
console.log(sortedListR);
console.log("Recursion time: ".concat(a1 - a0, " milliseconds."));
console.log(sortedListL);
console.log("Loop time: ".concat(a3 - a2, " milliseconds."));
