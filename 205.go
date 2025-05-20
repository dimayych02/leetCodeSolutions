// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
// https://leetcode.com/problems/isomorphic-strings/description/
func isIsomorphic(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	sMap := make(map[byte]byte, len(s))
	tMap := make(map[byte]byte, len(t))

	for i := range s {
		val, ok := sMap[s[i]]
		if ok && val != t[i] {
			return false
		}
		if !ok {
			sMap[s[i]] = t[i]
		}
	}
	for i := range t {
		val, ok := tMap[t[i]]
		if ok && val != s[i] {
			return false
		}
		if !ok {
			tMap[t[i]] = s[i]
		}
	}
	return len(sMap) == len(tMap)
}
