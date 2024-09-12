/**
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums
*/
// TODO I have done task without any extra space(commented last cycle for), but perfomance essentially got worse due to additional cycle
func findDisappearedNumbers(nums []int) []int {
	for i := 0; i < len(nums); i++ {
        index := int(math.Abs(float64(nums[i]))) - 1
        if nums[index] > 0 {
			nums[index] *= -1
		}
	}
    
  rs:= []int{}
	for i, val := range nums {
        if val > 0 {
           rs = append(rs, i + 1)      
        }
	}
    
	// for i := 0; i < len(nums); {
	// 	if nums[i] < 0 {
	// 		nums = append(nums[:i], nums[i+1:]...)
	// 	} else {
	// 		i++
	// 	}
	// }
	return rs
}
