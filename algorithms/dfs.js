// depth-first search of binary tree
var left1 = {
    value: 3,
    left: undefined,
    right: undefined,
};
var left2 = {
    value: 6,
    left: undefined,
    right: undefined,
};
var right1 = {
    value: 7,
    left: left2,
    right: undefined,
};
var head = {
    value: 5,
    left: left1,
    right: right1,
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
var x = depthFirstSearch(head, Number(process.argv[2]));
console.log(x);
