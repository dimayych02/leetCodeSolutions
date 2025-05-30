// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
// https://leetcode.com/problems/excel-sheet-column-number/description/
func titleToNumber(columnTitle string) int {
	var sheets = map[rune]int{
		'A': 1,
		'B': 2,
		'C': 3,
		'D': 4,
		'E': 5,
		'F': 6,
		'G': 7,
		'H': 8,
		'I': 9,
		'J': 10,
		'K': 11,
		'L': 12,
		'M': 13,
		'N': 14,
		'O': 15,
		'P': 16,
		'Q': 17,
		'R': 18,
		'S': 19,
		'T': 20,
		'U': 21,
		'V': 22,
		'W': 23,
		'X': 24,
		'Y': 25,
		'Z': 26,
	}
	var result int
    var power int = len(columnTitle) - 1 

    for _, r:= range columnTitle {
        val, ok := sheets[r]
        if !ok {
            return 0
        }
        result += val* int(math.Pow(26, float64(power)))
        power--
    }
	return result
}
