// Sliding window
// 674. Longest Continuous Increasing Subsequence
/** @param nums - array */
const findLengthOfLCIS = (nums: number[]): number => {

    const allValues: number[] = [];
    let longestValue: number = 1;

    while (nums.length > 0) {
        let start: number = 0;
        let end: number = start + 1;
        let counter: number = 1;

        while (nums[start] < nums[end]) {
            counter++;
            start++;
            end++;
        }

        allValues.push(counter);
        longestValue = Math.max(...allValues);
        nums = nums.slice(end);
    }

    return longestValue;
}