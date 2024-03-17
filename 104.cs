/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

public class Solution
    {
        public int MaxDepth(TreeNode root)
        {

            if(root == null)
                return 0;
            
            int leftMaxDepth = MaxDepth(root.left);
            int rightMaxDepth = MaxDepth(root.right);
            
            return Math.Max(leftMaxDepth, rightMaxDepth) + 1;
        }

    }
