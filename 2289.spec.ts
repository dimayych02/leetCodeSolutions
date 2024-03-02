/*
You are given a 0-indexed integer array nums. In one step, remove all elements nums[i] where nums[i - 1] > nums[i] for all 0 < i < nums.length.

Return the number of steps performed until nums becomes a non-decreasing array.
*/

/** @param nums - array of numbers */
const totalSteps = (nums: number[]): number => {

    const stack: number[][] = [];

    for (let idx = nums.length - 1; idx >= 0; idx--) {
        const value: number = nums[idx];
        let stp: number = 0;

        while (stack.length && stack[stack.length - 1][1] < value) 
            stp = Math.max(stp + 1, stack.pop()[0]);
        
        stack.push([stp, value]);
    }

    let ans: number = 0;
    while (stack.length)
        ans = Math.max(ans, stack.pop()[0]);

    return ans;
}
