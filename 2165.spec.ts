/*
You are given an integer num. Rearrange the digits of num such that its value is minimized and it does not contain any leading zeros.

Return the rearranged number with minimal value.

Note that the sign of the number does not change after rearranging the digits.
*/

function smallestNumber(num: number): string {

    const lessZero: boolean = String(num)[0] == '-';

    let sortArr: number[] = String(num)
        .replace('-', '')
        .split('')
        .map(Number)
        .sort((a, b) => lessZero ? b - a : a - b);
    findAccEl(sortArr);

    return lessZero
        ? '-'.concat(sortArr.join(''))
        : sortArr.join('')
}

const findAccEl = (arr: number[]): void => {
    let l: number = 0;
    let r: number = arr.length - 1;
    if (arr[0] !== 0)
        return;

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        if (arr[mid] > 0)
            r = mid;
        else
            l = mid + 1;
    }

    const temp = arr[r];
    arr[0] = temp;
    arr[r] = 0;
}
