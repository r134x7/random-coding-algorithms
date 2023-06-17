function linearSearchRecursive(list, target, index) {
    if (list[index] === undefined) {
        return -1;
    }
    else if (list[index] === target) {
        return index;
    }
    else {
        return linearSearchRecursive(list, target, index + 1);
    }
}
function linearSearchLoop(list, target) {
    var index = 0;
    while (list[index] !== undefined) {
        if (list[index] === target) {
            return index;
        }
        else {
            index++;
        }
    }
    return -1;
}
var t0 = performance.now();
var unsortedListR = linearSearchRecursive([3, 8, 32, 9, 4, -5, 0], Number(process.argv[2]), 0);
var t1 = performance.now();
var t2 = performance.now();
var unsortedListL = linearSearchLoop([3, 8, 32, 9, 4, -5, 0], Number(process.argv[2]));
var t3 = performance.now();
console.log(unsortedListR);
console.log("Recursion time: ".concat(t1 - t0, " milliseconds."));
console.log(unsortedListL);
console.log("Loop time: ".concat(t3 - t2, " milliseconds."));
