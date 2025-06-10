// Given a balanced parentheses string s, return the score of the string.
// The score of a balanced parentheses string is based on the following rule:
// "()" has score 1.
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.
// https://leetcode.com/problems/score-of-parentheses/description/

func scoreOfParentheses(s string) int {
	if len(s) <= 1 {
		return 0
	}

	var (
		stack []int = make([]int, 0, len(s))
	)
    stack = append(stack, 0)
    for _, r := range s {
        switch r {
            case '(':
                stack = append(stack, 0)
            case ')':
                    if len(stack) > 0 {
                        top := stack[len(stack)-1]
                        stack = stack[:(len(stack)-1)]
                        
                        if top == 0 && len(stack) > 0 {
                            stack[len(stack)-1] += 1
                        }  else if len(stack)> 0 {
                            stack[len(stack)-1] += 2*top
                        }
                    }      
            default: 
                return -1                
        }
    }
    if len(stack) == 0 {
        return -1
    }
	return stack[0]
}
