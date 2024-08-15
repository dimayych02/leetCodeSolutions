// https://leetcode.com/problems/roman-to-integer/
func romanToInt(s string) int {
	res := 0
	keys := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}
	values := []string{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"}

	for idx, val := range values {
		for strings.HasPrefix(s, val) {
			res += keys[idx]
			s = s[len(val):]
		}
	}
	return res
}
