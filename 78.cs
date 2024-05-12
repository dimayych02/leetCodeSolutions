/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
https://leetcode.com/problems/subsets/
*/
public class Solution {
    public IList<IList<int>> Subsets(int[] nums) {
        var result = new List<IList<int>>();
        var subset = new List<int>();
        GetAllSubsets(nums, 0, subset,  result);
        return result;
    }
    
    void  GetAllSubsets(int[] nums, int idx, List<int> subset, List<IList<int>> result)
    {
    

    if(idx >= nums.Length)
    {
        result.Add(new List<int>(subset));
        return;
    }
    subset.Add(nums[idx]);
    GetAllSubsets(nums, idx + 1, subset, result);
    subset.RemoveAt(subset.Count - 1);
    GetAllSubsets(nums, idx + 1, subset,  result);
    }
}
