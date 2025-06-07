func findKthPositive(arr []int, k int) int {
	missingValues := make([]int, 0, k)
	lastElement := arr[len(arr)-1]

	for i := 1; i < lastElement; i++ {
		if _, found := slices.BinarySearch(arr, i); !found {
			missingValues = append(missingValues, i)
		}
        if len(missingValues) == k {
			return missingValues[k-1]
		}
	}
	return lastElement - len(missingValues) + k
}
