/**
https://leetcode.com/problems/happy-number/

Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/


func isHappy(n int) bool {

	arr := []int{}
	for !contains(arr, n) {
        arr = append(arr, n)
		n = countSquare(n)
		if n == 1 {
			return true
		}
	}
	return false

}

func countSquare(num int) int {
	ans := 0
	for num > 0 {
		digit := num % 10
        ans += int(math.Pow(float64(digit), 2))
		num /= 10
	}
	return ans
}

func contains(arr []int, el int) bool {
	for _, item := range arr {
		if el == item {
			return true
		}
	}
	return false
}
