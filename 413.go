// https://leetcode.com/problems/arithmetic-slices/

func numberOfArithmeticSlices(nums []int) int {
	if len(nums) <= 2 {
		return 0
	}

	cnt := 0
	dp := 0
	for i := 2; i < len(nums); i++ {
		if nums[i]-nums[i-1] == nums[i-1]-nums[i-2] {
			dp++
			cnt += dp
		} else {
			dp = 0
		}
	}
	return cnt
}
