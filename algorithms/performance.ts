import { listGenerator } from "../functions/randomFunctions";

interface Squared {
    value: number
}

const loops = 100;
const listLength = Number(process.argv[2]);
const numberRange = 10000;
const unsortedList = listGenerator(listLength, numberRange);

const squared = (value:number): number => value*value

let averageTimeLoop = 0;
let averageTimeArrayMap = 0;
let averageTimeArrayReduce = 0;
let averageTimeMAP = 0;
let averageTimeMapForEach = 0;
let averageTimeObject = 0;
let averageTimeMapOverObject = 0;

let listFor = [];

let listMap = unsortedList;

for (let i = 0; i < loops; i++) {
    let index = 0;
    const c0 = performance.now();
    while (unsortedList[index] !== undefined) {
        listFor.push(squared(unsortedList[index]))
        index++
    }
    const c1 = performance.now();
    averageTimeLoop = averageTimeLoop + (c1 - c0);
}

console.log("Loop:");
console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeLoop / loops} milliseconds, Total Time: ${averageTimeLoop / 1000} seconds.`)

for (let i = 0; i < loops; i++) {
    const c2 = performance.now();
    let y = listMap.map(elem => squared(elem))
    const c3 = performance.now();
    averageTimeArrayMap = averageTimeArrayMap + (c3 - c2);
}

console.log("Array Map:");
console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeArrayMap / loops} milliseconds, Total Time: ${averageTimeArrayMap / 1000} seconds.`)

for (let i = 0; i < loops; i++) {
    const c4 = performance.now();
    let y = listMap.reduce((acc, next) => acc + squared(next), 0)
    const c5 = performance.now();
    averageTimeArrayReduce = averageTimeArrayReduce + (c5 - c4);
}

console.log("Array Reduce:");
console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeArrayReduce / loops} milliseconds, Total Time: ${averageTimeArrayReduce / 1000} seconds.`)

let xMap = new Map<number, Squared>();

for (let i = 0; i < loops; i++) {
    let index = 0;

    const c6 = performance.now();
    while (unsortedList[index] !== undefined) {
        // xMap.set(index, squared(unsortedList[index]))
        // xMap.set(index, { value: squared(unsortedList[index])})
        xMap.set(index, { value: unsortedList[index]})
        index++
    }
    const c7 = performance.now();
    averageTimeMAP = averageTimeMAP + (c7 - c6);

    const c8 = performance.now();
    xMap.forEach((elem, key, map) => map.set(key, { value: squared(elem.value) }))
    const c9 = performance.now();
    averageTimeMapForEach = averageTimeMapForEach + (c9 - c8);
}

console.log("Map():");
console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeMAP / loops} milliseconds, Total Time: ${averageTimeMAP / 1000} seconds.`)

console.log("Map.ForEach():");
console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeMapForEach / loops} milliseconds, Total Time: ${averageTimeMapForEach / 1000} seconds.`)

let xObject: Squared[] = [];

for (let i = 0; i < loops; i++) {
    let index = 0;
    const c8 = performance.now();
    while (unsortedList[index] !== undefined) {
        xObject.push({ value: unsortedList[index] })
        index++
    }
    const c9 = performance.now();
    averageTimeObject = averageTimeObject + (c9 - c8);

    const c10 = performance.now();
    // xObject.map(elem => {
    //     return {
    //         ...elem,
    //         value: squared(elem.value)
    //     }
    // })
    for (let i = 0; i < xObject.length; i++) {
       xObject[i] = {
        value: squared(xObject[i].value)
       } 
    }
    const c11 = performance.now();
    averageTimeMapOverObject = averageTimeMapOverObject + (c11 - c10);

}

console.log("Array Object:");
console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeObject / loops} milliseconds, Total Time: ${averageTimeObject / 1000} seconds.`)

// console.log("Array.map Over Object:");
console.log("For Loop mutate object:");
console.log(`Loops: ${loops}, List Length: ${listLength}, Number Range: 0 to ${numberRange - 1}, Time per loop: ${averageTimeMapOverObject / loops} milliseconds, Total Time: ${averageTimeMapOverObject / 1000} seconds.`)
