const mergeSortInversions = (arr: number[]): number => {
    let result: number = 0;
    const n: number = arr.length;

    if (n === 1) return result

    const mid: number = Math.floor(n / 2);
    let leftArr: number[] = new Array(mid);
    let rightArr: number[] = new Array(n - mid);

    for (let i = 0; i < mid; i++)
        leftArr[i] = arr[i];
    for (let j = mid; j < n; j++)
        rightArr[j - mid] = arr[j];

    result += mergeSortInversions(leftArr);
    result += mergeSortInversions(rightArr);
    result += findInversions(arr, leftArr, rightArr);
    return result;
}


const findInversions = (arr: number[], arrLeft: number[], arrRight: number[]): number => {
    let counter: number = 0;
    let i: number = 0;
    let j: number = 0;
    let idx: number = 0;
    let left: number = arrLeft.length;
    let right: number = arrRight.length;
    let mid: number = Math.floor(arr.length / 2);

    while (i < left && j < right) {
        if (arrLeft[i] <= arrRight[j])
            arr[idx++] = arrLeft[i++];

        else {
            arr[idx++] = arrRight[j++];
            counter += (mid - i);
        }

    }

    for (let ll = i; ll < left; ll++)
        arr[idx++] = arrLeft[ll];
    for (let rr = j; rr < right; rr++)
        arr[idx++] = arrRight[rr];

    return counter;
}