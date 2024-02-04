179. Largest Number

// Quick Sort
function largestNumber(nums: number[]): string {
    const compare = (a: number, b: number): number => {
        const num1: string = `${a}${b}`;
        const num2: string = `${b}${a}`;
        return num1 < num2 ? 1 : -1;
    }
    const rs: number[] = nums.sort(compare);
    if (rs[0] === 0) return '0';
    return rs.sort(compare).join('');
};




// TODO: Modifying Method using Merge Sort
/** @param arr -array */
function largestNumber(nums: number[]): string {
    const n: number = nums.length;

    if (n === 1)
        return nums.join('');

    if (nums.every(val => val === 0))
        return '0';

    const mid = Math.floor(n / 2);
    let l: number[] = new Array(mid);
    let r: number[] = new Array(n - mid);

    for (let i = 0; i < mid; i++)
        l[i] = nums[i];
    for (let i = mid; i < n; i++)
        r[i - mid] = nums[i];

    largestNumber(l);
    largestNumber(r);
    findMaxNumber(nums, l, r);
    return  nums.join('')
}

const findMaxNumber = (arr: number[], arrLeft: number[], arrRight: number[]): void => {

    const left = arrLeft.length;
    const right = arrRight.length;

    let i: number = 0;
    let j: number = 0;
    let idx: number = 0;

    while (i < left && j < right) {

        if (parseInt(`${arrLeft[i]}${arrRight[j]}`) > parseInt(`${arrRight[j]}${arrLeft[i]}`))
            arr[idx++] = arrLeft[i++];

        else
            arr[idx++] = arrRight[j++];

    }
    for (let ll = i; ll < left; ll++)
        arr[idx++] = arrLeft[ll];

    for (let rr = j; rr < right; rr++)
        arr[idx++] = arrRight[rr];

}
