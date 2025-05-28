// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome.
// https://leetcode.com/problems/longest-palindrome/

func longestPalindrome(s string) int {
	var longest int
	runeMap := make(map[rune]int, len(s))

	for _, r := range s {
		runeMap[r]++
	}
	for _, v := range runeMap {
		if v%2 == 0 {
			longest += v
		} else if v%2 == 1 {
			odd := longest % 2
			longest -= odd
			longest += int(math.Max(float64(odd), float64(v)))
		}
	}
	return longest
}
