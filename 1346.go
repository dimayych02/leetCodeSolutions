func checkIfExist(arr []int) bool {
    slices.Sort(arr)
    doubleArr := make([]int, len(arr))
    for i, v := range arr {
        doubleArr[i] = 2*v
    }
    for i, v := range doubleArr {
        if idx, found := binarySearch(arr, v); found && i != idx {
            return true
        }
    }
    return false 
}

func binarySearch(arr []int, val int) (int, bool) {
    left :=0;
    right := len(arr) - 1
    for left <= right {
        middle := (left+right) / 2
        if arr[middle] == val {
            return middle, true
        }
        if arr[middle] > val {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1, false
}
