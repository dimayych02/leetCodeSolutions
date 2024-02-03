const searchInsert = (nums: number[], target: number): number => {
    let startIndex: number = 0;
    let endIndex: number = nums.length - 1;
    let middleIndex: number = 0;
    while (startIndex <= endIndex) {
        middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (nums[middleIndex] === target)
            return middleIndex;

        if (nums[middleIndex] > target)
            endIndex = middleIndex - 1;
        else
            startIndex = middleIndex + 1;
    }

    const rs: number =
        (target > nums[middleIndex - 1] && target < nums[middleIndex])
            ? middleIndex :
        (target < nums[middleIndex])
            ? Math.max(0, middleIndex - 1)
            : middleIndex + 1
    return rs;
};
