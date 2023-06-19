import { listGenerator } from "../functions/randomFunctions";

function bogoSortLoop(list: number[]) {

    let sorted = false;
    let sortedList: number[] = list;
    let index = 0;
    let sortCount = 0;

    do {
        
        if (sortedList[index] > sortedList[index+1]) {
            index++;
            sortCount++;
        } else {
            index++;
        }

        if (index > list.length - 1) {
            if (sortCount === 0) {
                sorted = true;

            } else {
                sortCount = 0;
                index = 0;

                let indexCheck: number[] = [];
                let currentList = sortedList;
                while (indexCheck.length < list.length) {
                    
                    // this method doesn't work for duplicate values
                    // let randomIndex = Math.floor(Math.random() * list.length);
                    // if (!indexCheck.includes(sortedList[randomIndex])) {
                    //     indexCheck.push(sortedList[randomIndex])
                    // }

                    let randomIndex = Math.floor(Math.random() * list.length);

                    indexCheck = indexCheck.concat(currentList.slice(randomIndex, randomIndex+1));

                    currentList = currentList.slice(0,randomIndex).concat(currentList.slice(randomIndex+1)); 

                }

                sortedList = indexCheck;
            }
        }
    } while (sorted === false);

    return sortedList;
}

const loops = 100;
const listLength = Number(process.argv[2]);
const numberRange = 10000;
const longList = listGenerator(listLength, numberRange);

let averageTime = 0; 

for (let i = 0; i < loops; i++) {
    const b0 = performance.now();
    bogoSortLoop(longList);
    const b1 = performance.now();

    averageTime = averageTime + (b1 - b0)
}

// const generateList = listGenerator(5, 100);
// const resultList = bogoSortLoop(generateList);
// console.log(resultList)

console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTime / loops} milliseconds, Total Time: ${averageTime / 1000} seconds.`)