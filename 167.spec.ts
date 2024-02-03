/** Description */
/** Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice. */


/** @param numbers -array */
/** @param target - what we need to find */
// Binary search
function twoSum(numbers: number[], target: number): number[] {
    let endIndex: number = numbers.length - 1;
    while (endIndex >= 0) {
        const middleIndex: number = Math.floor(endIndex / 2);

        if (target < numbers[middleIndex])
            endIndex  = middleIndex - 1;
        else
            return;
    }
    return findSum(numbers, target);
};

// Sliding window
const findSum = (arr: number[], target: number): number[] => {
    let interval: number[] = [];
    let l: number = 0;
    let r: number = arr.length - 1;

    while (l <= r) {

        if (arr[l] + arr[r] === target)
            return interval = [l + 1, r + 1];

        if (arr[l] + arr[r] > target)
            r--;
        if (arr[l] + arr[r] < target)
            l++;
    }

    return interval;
}
