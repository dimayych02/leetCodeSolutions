/**
Given the root of a binary tree, return the sum of all left leaves.
A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
*/
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sumOfLeftLeaves(root *TreeNode) int {
	if root == nil {
		return 0
	}

	return countSum(root)
}

func countSum(root *TreeNode) int {
	sum := 0
	if root.Left != nil {
		if root.Left.Left == nil && root.Left.Right == nil {
			sum += root.Left.Val
		} else {
			sum += countSum(root.Left)
		}
	}

	if root.Right != nil {
		if root.Right.Left != nil || root.Right.Right != nil {
			sum += countSum(root.Right)
		}
	}

	return sum
}
