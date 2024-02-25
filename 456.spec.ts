/*
https://leetcode.com/problems/132-pattern/

Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.
*/


function find132pattern(nums: number[]): boolean {

    const stack: number[] = [];
    let midValue: number = Math.pow(-10, 9);

    for (let i = nums.length - 1; i >= 0; i--) {
        const curValue: number = nums[i];
        if (curValue < midValue)
            return true;

        else
            while (stack.length && stack[stack.length - 1] < curValue)
                midValue = Math.max(midValue, stack.pop()!);

        stack.push(curValue);
    }

    return false;
}
