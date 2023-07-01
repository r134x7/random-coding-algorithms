// depth-first search of binary tree

type BinaryNode<T> = {
    value: T,
    left: BinaryNode<T> | undefined,
    right: BinaryNode<T> | undefined,
}

const left1 = {
    value: 3,
    left: undefined,
    right: undefined,
}

const left2 = {
    value: 6,
    left: undefined,
    right: undefined,
}

const right1 = {
    value: 7,
    left: left2,
    right: undefined,
}

const head: BinaryNode<number> = {
    value: 5,
    left: left1,
    right: right1,
}  

function depthFirstSearch(current: BinaryNode<number> | undefined, searchValue: number ): boolean {

    if (current === undefined) {
        return false;
    }

    if (current.value === searchValue) {
        return true;
    }

    if (current.value < searchValue) {
        return depthFirstSearch(current.right, searchValue)
    } else {
        return depthFirstSearch(current.left, searchValue)
    }
}

let x = depthFirstSearch(head, Number(process.argv[2]))
console.log(x)