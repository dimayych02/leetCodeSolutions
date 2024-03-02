/*
You are given a 0-indexed integer array nums. In one step, remove all elements nums[i] where nums[i - 1] > nums[i] for all 0 < i < nums.length.

Return the number of steps performed until nums becomes a non-decreasing array.
*/

/** @param nums - array of numbers */
const totalSteps = (nums: number[]): number => {

    let ans: number = 0;
    const stack: number[][] = [];
    
    for (const val of nums) {
        let stp: number = 0;
        
        while (stack.length && stack[stack.length - 1][1] > val) {
            stp = Math.max(stp + 1, stack.pop()[0]);
        }

        stack.push([stp, val]);
    }

    while (stack.length)
        ans = Math.max(ans, stack.pop()[0]);

    return ans;
}
