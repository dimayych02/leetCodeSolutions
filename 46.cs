/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
https://leetcode.com/problems/permutations/
*/

public class Solution
{ 
public IList<IList<int>> Permute(int[] nums)
 {
     var result = new List<IList<int>>();
     Backtracking(nums, nums.Length, result);
     return result;
 }


 void Backtracking(int[] nums, int n,  List<IList<int>> result)
 {
    
     if (n < 2)
     {
         result.Add(new List<int>(nums));
         return;
     }
         
     for(int i = n - 1; i >= 0; i--)
     {
         (nums[i], nums[n - 1]) = (nums[n - 1], nums[i]);
         perm(nums, n - 1, result);
         (nums[i], nums[n - 1]) = (nums[n - 1], nums[i]);
     }
 }
}
