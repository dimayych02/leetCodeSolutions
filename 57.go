// https://leetcode.com/problems/insert-interval/
func insert(intervals [][]int, newInterval []int) [][]int {
	if len(intervals) == 0 {
		return [][]int{newInterval}
	}
  // TODO: Mb replace sort with binarySearch(if it possible) to reduce complexity
	merged := append(intervals, newInterval)
	sort.Slice(merged, func(i, j int) bool {
		return merged[i][0] < merged[j][0]
	})
	res := [][]int{merged[0]}
	
	for _, interval := range merged {
		last := len(res) - 1
		prev := res[last]

		if prev[1] >= interval[0] {
			res[last][1] = int(math.Max(float64(prev[1]), float64(interval[1])))
		} else {
			res = append(res, interval)
		}
	}
	return res
}

