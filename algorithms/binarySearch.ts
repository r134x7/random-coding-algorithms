function binarySearch(list: number[], searchValue: number, indexStart: number, indexEnd: number) {

    let indexMiddle = Math.floor((indexStart + indexEnd) / 2);

    if (indexStart > indexEnd) {
        return -1
    } else if (list[indexMiddle] === searchValue) {

      return indexMiddle
    } else if (list[indexMiddle] > searchValue) {

      return binarySearch(list, searchValue, indexStart, indexMiddle-1)
    } else {

      return binarySearch(list, searchValue, indexMiddle+1, indexEnd)
    }
}

const useList = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const sortedListB = binarySearch(
    useList,
    Number(process.argv[2]),
    0,
    useList.length-1
)

console.log(sortedListB)