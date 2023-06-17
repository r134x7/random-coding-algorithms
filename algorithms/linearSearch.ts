function linearSearch(list: number[], target: number, index: number): number {

    if (list[index] === undefined) {
        return -1;
    } else if (list[index] === target) {
        return index;
    } else {
        return linearSearch(list, target, index + 1)
    }
}

const unsortedList = linearSearch(
    [3, 8, 32, 9, 4, -5, 0],
    Number(process.argv[2]),
    0
)

console.log(unsortedList)