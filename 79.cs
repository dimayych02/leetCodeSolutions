/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
https://leetcode.com/problems/letter-combinations-of-a-phone-number/
*/

public class Solution
{
    
    public IList<string>LetterCombinations(string digits)
    {
        var result = new List<string>();
        if (digits.Length == 0)
            return result;

        var mapping = new Dictionary<char, string>()
        {

        { '2', "abc" },
        { '3', "def" },
        { '4', "ghi" },
        { '5', "jkl" },
        { '6', "mno" },
        { '7', "pqrs" },
        { '8', "tuv" },
        { '9', "wxyz" }
    };

        Backtracking(digits, 0, new StringBuilder(), mapping, result);
        return result;
    }

    void Backtracking(string digits, int idx, StringBuilder combination, Dictionary<char, string> mapping,  List<string> result)
    {
        if(idx == digits.Length)
        {
            result.Add(combination.ToString());
            return;
        }

        char digit = digits[idx];
        string letters = mapping[digit];

        foreach(var letter in letters)
        {
            combination.Append(letter);
            Backtracking(digits, idx + 1, combination, mapping, result);
            combination.Remove(combination.Length - 1, 1);
        }
    }
    
}
