export function listGenerator(listLength, numberRange) {

    const makeList = [];

    for (let index = 0; index < listLength; index++) {
       makeList.push(Math.round(Math.random() * numberRange)); 
    }

    return makeList;
}