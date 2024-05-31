"use strict";
// depth-first search of binary tree
Object.defineProperty(exports, "__esModule", { value: true });
exports.head = exports.right1 = exports.left2 = exports.left1 = void 0;
exports.left1 = {
    value: 3,
    left: undefined,
    right: undefined,
};
exports.left2 = {
    value: 6,
    left: undefined,
    right: undefined,
};
exports.right1 = {
    value: 7,
    left: exports.left2,
    right: undefined,
};
exports.head = {
    value: 5,
    left: exports.left1,
    right: exports.right1,
};
function depthFirstSearch(current, searchValue) {
    if (current === undefined) {
        return false;
    }
    if (current.value === searchValue) {
        return true;
    }
    if (current.value < searchValue) {
        return depthFirstSearch(current.right, searchValue);
    }
    else {
        return depthFirstSearch(current.left, searchValue);
    }
}
function depthFirstSearchLoop(current, searchValue) {
    var node = current;
    while (true) {
        if (node === undefined) {
            return false;
        }
        if (node.value === searchValue) {
            return true;
        }
        if (node.value < searchValue) {
            node = node.right;
        }
        else {
            node = node.left;
        }
    }
}
var x = depthFirstSearch(exports.head, Number(process.argv[2]));
console.log(x);
var y = depthFirstSearchLoop(exports.head, Number(process.argv[3]));
console.log(y);
