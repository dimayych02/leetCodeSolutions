func sumZero(n int) []int {
	
	result := make([]int, n)
  l, r, value := 0, n-1, n-1
	for l < r {
        result[l] = -value
        result[r] = value
        l++
        r--
        value--
    }
	return result
}
// n = 1: [0]
// n = 2: [-1, 1]
// n = 3: [-2, 0, 2]
// n = 4: [-3, -2, 2, 3]
// n = 5: [-4, -3, 0, 3, 4]
// n = 6: [-5, -4, -3, 3, 4, 5]
