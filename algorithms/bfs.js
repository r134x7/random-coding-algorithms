"use strict";
// breadth-first search in binary tree
Object.defineProperty(exports, "__esModule", { value: true });
var dfs_1 = require("./dfs");
function breadthFirstSearch(head, searchValue) {
    var queue = [head];
    while (queue.length) {
        var current = queue.shift();
        if (!current) {
            continue;
        }
        if (current.value === searchValue) {
            return true;
        }
        queue.push(current.left);
        queue.push(current.right);
    }
    return false;
}
var x = breadthFirstSearch(dfs_1.head, Number(process.argv[2]));
console.log(x);
