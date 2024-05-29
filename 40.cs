public class Solution
{
    public IList<IList<int>> CombinationSum2(int[] candidates, int target)
    {
       var result = new List<IList<int>>();
       var targetSums = new List<int>();
       Array.Sort(candidates);
       GetTargetSum2(0, target, candidates, targetSums, result);
       return result;
    }
    
    
    void GetTargetSum2(int start, int target, int[] candidates, List<int> targetSums, List<IList<int>> result)
    {

       if (target == 0)
       {
          result.Add(new List<int>(targetSums));
          return;
       }

       if (target < 0)
           return;


       int prev = -1;

       for(int i = start; i < candidates.Length; i++)
       {
           if (candidates[i] == prev)
               continue;

           targetSums.Add(candidates[i]);
           GetTargetSum2(i + 1, target - candidates[i], candidates, targetSums, result);
           targetSums.RemoveAt(targetSums.Count - 1);
           prev = candidates[i];
       }
    } 
}
