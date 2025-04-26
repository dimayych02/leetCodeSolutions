func moveZeroes(nums []int) {
    var (
        pointer int
        noneZero int
    )
    for noneZero < len(nums) && pointer < len(nums) {
        if nums[pointer] == 0 && nums[noneZero] != 0 {
            l := nums[pointer]
            r := nums[noneZero]
            nums[pointer] = r
            nums[noneZero] = l
            pointer++
        } else if nums[pointer] != 0 && nums[noneZero] != 0 {
            pointer++
        }
        noneZero++
    }
}
