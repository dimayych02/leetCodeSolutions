// https://leetcode.com/problems/plus-one/
func plusOne(digits []int) []int {
	idx := len(digits) - 1
	for i := len(digits) - 1; i >= 0; i-- {
		if digits[i]+1 != 10 {
			break
		}
		for digits[i]+1 == 10 {
			digits[i] = 0
			idx--
		}
	}
	if idx >= 0 {
		digits[idx] = digits[idx] + 1
		return digits
	}
	newArr := append([]int{1}, digits...)
	return newArr
}
