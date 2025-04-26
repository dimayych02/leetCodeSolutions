// Given an integer array nums and an integer k, modify the array in the following way:
// choose an index i and replace nums[i] with -nums[i].
// You should apply this process exactly k times. You may choose the same index i multiple times.
// Return the largest possible sum of the array after modifying it in this way.

func largestSumAfterKNegations(nums []int, k int) int {
    var sum int
    slices.Sort(nums)

    for i := 0; i < len(nums) && k > 0; i++ {
        if nums[i] < 0 {
            nums[i] = -nums[i]
            k--
        }
    }
    
    if k > 0 {
        slices.Sort(nums)
        for {
            nums[0] = -nums[0]
            k--
            if k == 0 {
                break
            }
        }
    }
    
    for _, val := range nums {
        sum += val
    }
    return sum
}
