/* 101. Symmetric Tree
Share
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

/** @param root - root of Tree */
function isSymmetric(root: TreeNode | null): boolean {
    if (!root)
        return true;

    return checkSymmetric(root.left, root.right);
}

/** @param left - left node of Tree, @param right = right node of Tree*/
const checkSymmetric = (left: TreeNode, right: TreeNode): boolean => {
    if (!left && !right)
        return true;

    if (!left || !right)
        return false;

    return left.val === right.val
        &&
        checkSymmetric(left.left, right.right)
        &&
        checkSymmetric(left.right, right.left);
}
