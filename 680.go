// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
// https://leetcode.com/problems/valid-palindrome-ii/description/

func validPalindrome(s string) bool {

	var (
		left  int = 0
		right int = len(s) - 1
	)

	for left < right {
		if s[left] != s[right] {
	
			isPalindrome := func(str string) bool {
				var (
					left  int = 0
					right int = len(str) - 1
				)
				for left < right {
					if str[left] != str[right] {
						return false
					}
					left++
					right--
				}
				return true
			}

			leftSubStr := s[:left] + s[left+1:]
			rightSubStr := s[:right] + s[right+1:]
			return isPalindrome(leftSubStr) || isPalindrome(rightSubStr)
		}
		left++
		right--
	}
	return true
}
