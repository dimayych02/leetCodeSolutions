// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
// https://leetcode.com/problems/excel-sheet-column-title/description/


func convertToTitle(columnNumber int) string {

	if columnNumber < 1 {
		return ""
	}

	var result string
	var sheets = map[int]rune{
		1:  'A',
		2:  'B',
		3:  'C',
		4:  'D',
		5:  'E',
		6:  'F',
		7:  'G',
		8:  'H',
		9:  'I',
		10: 'J',
		11: 'K',
		12: 'L',
		13: 'M',
		14: 'N',
		15: 'O',
		16: 'P',
		17: 'Q',
		18: 'R',
		19: 'S',
		20: 'T',
		21: 'U',
		22: 'V',
		23: 'W',
		24: 'X',
		25: 'Y',
		26: 'Z',
	}
	for columnNumber > 0 {
		column := (columnNumber - 1) % 26
		val, ok := sheets[column+1]
		if !ok {
			return ""
		}
		result += string(val)
		columnNumber = (columnNumber - 1) / 26
	}
	return reverseString(result)
}

func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}
