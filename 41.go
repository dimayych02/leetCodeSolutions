// https://leetcode.com/problems/first-missing-positive/
// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

func firstMissingPositive(nums []int) int {
	n := len(nums)

	for i := 0; i < n; i++ {
		if nums[i] <= 0 || nums[i] > n {
			nums[i] = n + 1
		}
	}

	for i := 0; i < n; i++ {
		currAbsVal := abs(nums[i])
		if currAbsVal >= 1 && currAbsVal <= n {
			idxToMark := currAbsVal - 1
			nums[idxToMark] = -abs(nums[idxToMark])
		}
	}

	for i := 0; i < n; i++ {
		if nums[i] > 0 {
			return i + 1
		}
	}

	return n + 1
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
