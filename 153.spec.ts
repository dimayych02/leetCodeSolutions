function findMin(nums: number[]): number {
    
    let min: number = nums[0];

    if (nums.length === 1)
        return min

    let l: number = 0;
    let r: number = nums.length - 1;


    while (l <= r) {

        const middle: number = l + Math.floor((r - l) / 2);
        const midEl: number = nums[middle];
        min = Math.min(min, midEl, nums[l], nums[l]);

        if (midEl >= nums[l])
            l = middle + 1;

        else
            r = middle - 1;
    }

    return min;
}
