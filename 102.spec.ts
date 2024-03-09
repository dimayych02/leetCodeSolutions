/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

let  res: number[][];
function levelOrder(root: TreeNode | null): number[][] {
    res = new Array();
    if (!root)
        return res;
    accTree(root, 0)
    return res;
};

const accTree = (node: TreeNode, curLevel: number): void => {
    if (!node)
        return;

    if (res.length === curLevel)
        res.push(new Array());

    res[curLevel++].push(node.val);
    accTree(node.left, curLevel);
    accTree(node.right, curLevel);
}
