"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listGenerator = void 0;
function listGenerator(listLength, numberRange) {
    var makeList = [];
    for (var index = 0; index < listLength; index++) {
        makeList.push(Math.round(Math.random() * numberRange));
    }
    return makeList;
}
exports.listGenerator = listGenerator;
