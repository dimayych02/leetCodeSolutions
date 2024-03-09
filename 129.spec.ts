/*
You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.
*/

function sumNumbers(root: TreeNode | null): number {
    if (!root)
        return 0;
    
    return countLeafs(root, 0);
}

const countLeafs = (node: TreeNode, sum: number): number => {

    if (!node)
        return 0;

    sum = sum * 10 + node.val;

    if (!(node.left || node.right))
        return sum;

    return countLeafs(node.left, sum) + countLeafs(node.right, sum);
}
