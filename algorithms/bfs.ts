// breadth-first search in binary tree

import { type BinaryNode, head as root, left1, left2, right1 } from "./dfs";

function breadthFirstSearch(head: BinaryNode<number>, searchValue: number): boolean {

    const queue: (BinaryNode<number> | undefined)[] = [head];

    while (queue.length) {

        const current = queue.shift();

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

let x = breadthFirstSearch(root, Number(process.argv[2]))
console.log(x)