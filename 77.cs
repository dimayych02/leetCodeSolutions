// https://leetcode.com/problems/combinations/

public IList<IList<int>> Combine(int n, int k)
{
    var result = new List<IList<int>>();
    var combinations = new List<int>();
    FindAllCombination(1, n, k, combinations, result);
    return result;
}



void FindAllCombination(int start, int n, int k, List<int> combinations, List<IList<int>> result)
{
    if(combinations.Count == k)
    {
        result.Add(new List<int>(combinations));
        return;
    }

    for(int i = start; i <= n; i++)
    {
        combinations.Add(i);
        FindAllCombination(i + 1, n , k, combinations, result);
        combinations.RemoveAt(combinations.Count - 1);
    }
    
}
