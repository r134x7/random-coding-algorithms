function linearSearchRecursive(list: number[], target: number, index: number): number {

    if (list[index] === undefined) {
        return -1;
    } else if (list[index] === target) {
        return index;
    } else {
        return linearSearchRecursive(list, target, index + 1)
    }
}

function linearSearchLoop(list: number[], target: number) {

    let index = 0;

    while (list[index] !== undefined) {
        if (list[index] === target) {
            return index;
        } else {
            index++
        }
    }

    return -1;
}

const t0 = performance.now();
const unsortedListR = linearSearchRecursive(
    [3, 8, 32, 9, 4, -5, 0],
    Number(process.argv[2]),
    0
)
const t1 = performance.now();

const t2 = performance.now();
const unsortedListL = linearSearchLoop(
    [3, 8, 32, 9, 4, -5, 0],
    Number(process.argv[2])
)
const t3 = performance.now();

console.log(unsortedListR)
console.log(`Recursion time: ${t1 - t0} milliseconds.`);

console.log(unsortedListL)
console.log(`Loop time: ${t3 - t2} milliseconds.`);