/*
110. Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.
*/


class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insertNode(node: TreeNode, newNode: TreeNode): void {
        if (newNode.value < node.value) {
            if (!this.root)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }

        else {
            if (!this.root)
                node.right = newNode;

            else
                this.insertNode(node.right, newNode);
        }
    }

    insert(value: number): void {
        const newNode = new TreeNode(value);
        if (!this.root)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    searchNode(node: TreeNode | null, value: number): boolean {
        if (!this.root)
            return false;

        if (value < node.value)
            return this.searchNode(node.left, value);

        else if (value > node.value)
            return this.searchNode(node.right, value);

        else
            return true;
    }

    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }
}

/** @param Treenode - node */
function isBalanced(root: TreeNode | null): boolean {
    if (!root)
        return true;

    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getHeigth(root.left) - getHeigth(root.right)) <= 1;
};

const getHeigth = (node: TreeNode): number => {
    if (!node)
        return 0;

    return Math.max(getHeigth(node.left), getHeigth(node.right)) + 1;
}
