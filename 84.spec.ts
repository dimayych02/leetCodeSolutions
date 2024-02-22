/**
https://leetcode.com/problems/largest-rectangle-in-histogram/

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
**/

function largestRectangleArea(heights: number[]): number {
    let res: number = 0;

    const stack: number[][] = [];

    for (let i = 0; i < heights.length; i++) {
        let val: number = heights[i];
        let prevIdx: number = i;
        while (stack[stack.length - 1][1] > val) {
            const preValues: number[] = stack.pop();
            res = Math.max(res, (i - preValues[0]) * preValues[1]);
            prevIdx = preValues[0];
        }

        stack.push([prevIdx, val]);
    }

    for (let idx = 0; idx < stack.length; idx++)
        res = Math.max(res, (heights.length - stack[idx][0]) * stack[idx][1]);

    return res;
}
