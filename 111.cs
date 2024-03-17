/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

public class Solution {
     public int MinDepth(TreeNode root) {
            if(root == null)
                return 0;
        
            int leftDepth = MinDepth(root.left);
            int rightDepth = MinDepth(root.right);

            return countMin(root);
        }

        private int countMin(TreeNode node)
        {
            int lV = 1;
            int rV = 1;
            if (node.left == null && node.right == null)
                return 1;

            if(node.left != null)
                lV += countMin(node.left);
            if(node.right != null)
                rV += countMin(node.right);

            return (lV > 1 && rV == 1)
                ? lV
                : (lV == 1 && rV > 1)
                    ? rV
                    : Math.Min(rV, lV);

        }
}
