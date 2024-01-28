function merge(arr: number[][]): number[][] {
    // Sort arr by left interval border: 1-> 2 -> ...
    // he might be unsorted
    arr = arr.sort((a, b) => a[0] - b[0]);
    const n = arr.length;
    if (n === 1) return arr;
    // middle element
    const mid = Math.floor(n / 2);
    let arrLeft: number[][] = new Array(mid);
    let arrRight: number[][] = new Array(n - mid);
    // Divide arr into 2 sub arrays: leftArr, rightArr
    for (let i = 0; i < mid; i++)
        arrLeft[i] = arr[i];
    for (let j = mid; j < n; j++)
        arrRight[j - mid] = arr[j];
    // Recursively calling leftArr
    merge(arrLeft);
    // Recursively calling rightArr
    merge(arrRight);
    return arr = findIntersections(arr, arrLeft, arrRight);
}


/** @param arr - our Array */
/** @param  arrLeft - left array after dividing @param arr*/
/** @param arrRight - right array after dividing @param arr */

const findIntersections = (arr: number[][], arrLeft: number[][], arrRight: number[][]): number[][] => {
    const left: number = arrLeft.length;
    const right: number = arrRight.length;
    let i: number = 0;
    let j: number = 0;
    let idx: number = 0;


    while (i < left && j < right) {
        // If intervals intersect - accumulate them
        if (arrLeft[i][1] >= arrRight[j][0]) {
            arr[idx++] = [Math.min(arrLeft[i][0], arrRight[j][0]), Math.max(arrLeft[i][1], arrRight[j][1])];
            i++;
            j++;
        }

        // Otherwise - move leftBorder
        else
            arr[idx++] = arrLeft[i++]
        // Remove the next element after adding
        arr.splice(idx, 1);

    }
    // Fill accArr in case if didn't reach certain border(left/right) 
    for (let ll = i; ll < left; ll++)
        arr[idx++] = arrLeft[ll];
    for (let rr = j; rr < right; rr++)
        arr[idx++] = arrRight[rr];

    return arr;
}
