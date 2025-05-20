// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// https://leetcode.com/problems/product-of-array-except-self/description/

func productExceptSelf(nums []int) []int {
	result := make([]int, len(nums))
	for i := range result {
		result[i] = 1
	}
	
	var prefixNum int = 1
	for i := 0; i < len(nums); i++ {
		result[i] *= prefixNum 
		prefixNum *= nums[i]
	}
	
	var postfixNum int = 1
	for i := len(nums) - 1; i >= 0; i-- {
		result[i] *= postfixNum 
		postfixNum *= nums[i]
	}

	return result
}
