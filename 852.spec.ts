//852. Peak Index in a Mountain Array

/*
An array arr is a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity. */

function peakIndexInMountainArray(arr: number[]): number {

    let max: number = arr[0];

    if (arr.length === 1)
        return max;

    let l: number = 0;
    let r: number = arr.length - 1;

    while (l <= r) {
        const middle: number = l + Math.floor((r - l) / 2);
        const midEl: number = arr[middle];
        const prev: number = arr[Math.max(0, middle - 1)];
        const next: number = arr[Math.min(arr.length - 1, middle + 1)];

        max = Math.max(max, arr[middle]);

        if (midEl > next && midEl < prev)
            r = middle - 1;
        else
            l = middle + 1;
    }
    return arr.indexOf(max);
}
