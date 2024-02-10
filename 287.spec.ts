/* Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
complexity - O(n)
 */ 

function findDuplicate(nums: number[]): number {
    
    const set = new Set();

    for (const val of nums) {

        const prevL: number = set.size;
        set.add(val);
        const curL: number = set.size;
        if (prevL === curL)
            return val;
    }
    return -1;
}
