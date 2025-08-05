/**
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
https://leetcode.com/problems/merge-intervals/description/
*/

class Solution {
   
    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) {
            return intervals;
        }
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        var result = new ArrayList<int[]>();
        result.add(intervals[0]);

        for (int i = 1; i < intervals.length; i++) {
            if (result.get(result.size()-1)[1] >= intervals[i][0]) {
                int leftBorder = result.get(result.size()-1)[0];
                int rightBorder = Math.max(result.get(result.size()-1)[1], intervals[i][1]);
                result.set(result.size() - 1, new int[]{leftBorder, rightBorder});
            } else {
                result.add(intervals[i]);
            }
        }
        return convertToIntArr(result);
    }

    private static int[][] convertToIntArr(List<int[]> arrList) {
        var result = new int[arrList.size()][];
        for (int i = 0; i < arrList.size(); i++) {
            result[i] = arrList.get(i);
        }
        return  result;
    }
}
