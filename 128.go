// https://leetcode.com/problems/longest-consecutive-sequence/description/
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

func longestConsecutive(nums []int) int {
	hashMap := make(map[int]struct{}, len(nums))
	var longest int
	for _, val := range nums {
		if _, ok := hashMap[val]; !ok {
			hashMap[val] = struct{}{}
		}
	}
	for _, val := range nums {
		if _, ok := hashMap[val-1]; !ok {
			length := 0
			for _, ok := hashMap[val+length]; ok; length++ {}
			longest = int(math.Max(float64(longest), float64(length)))
		}
	}
	return longest
}
