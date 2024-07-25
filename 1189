// https://leetcode.com/problems/maximum-number-of-balloons/
*/
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.
/*

public class Solution {
    public int MaxNumberOfBalloons(string text) {
        var word = new List<char>(){ 'b', 'a', 'l', 'o', 'n' };
        var txt = text.ToCharArray();

        if (word.Intersect(txt).Count() != word.Count())
            return 0;
        

        var rs = txt
            .GroupBy(c => c)
            .Where(c => word.Contains(c.Key))
            .Select(c => c.Key == 'l' || c.Key == 'o' ? c.Count() / 2 : c.Count())
            .Min();
        return rs;    
    }
}
