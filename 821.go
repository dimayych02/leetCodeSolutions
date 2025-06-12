func shortestToChar(s string, c byte) []int {
	result := make([]int, len(s))
    n := len(s)
    prevPos := -n
    for i := 0; i < n; i++ {
        if s[i] == c {
            prevPos = i
        }
        result[i] = abs(i - prevPos)
    }
    nextPos := 2*n
    for i := n-1; i >=0; i-- {
        if s[i] == c {
            nextPos = i
        }
        rightDiff := abs(nextPos - i)
        if abs(rightDiff) < result[i] {
             result[i] = rightDiff
        }
    } 
	return result
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
