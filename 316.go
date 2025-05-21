// https://leetcode.com/problems/remove-duplicate-letters/description/
// Given a string s, remove duplicate letters so that every letter appears once and only once.
// You must make sure your result is the smallest in lexicographical order among all possible results.

func removeDuplicateLetters(s string) string {
	stack := make([]rune, 0, len(s))
	hashMap := make(map[rune]int, len(s))

	for _, r := range s {
		hashMap[r]++
	}
	for _, r := range s {
		if !slices.Contains(stack, r) {
			for len(stack) > 0 && stack[len(stack)-1] > r && hashMap[stack[len(stack)-1]] > 0 {
				stack = stack[:len(stack)-1]
			}
			stack = append(stack, r)
		}
		hashMap[r]--
	}
	return string(stack)
}
