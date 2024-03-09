/*
Given the root of a binary tree and an integer targetSum,
return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.
*/

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root)
        return false;
    return checkTarget(root, 0, targetSum);
}

const checkTarget = (node: TreeNode, sum: number, targetSum: number): boolean => {
    if (!node)
        return false;
    
    sum += node.val;

    if (sum === targetSum && (!node.left && !node.right))
        return true;
    
    return checkTarget(node.left, sum, targetSum) || checkTarget(node.right, sum, targetSum);
}
