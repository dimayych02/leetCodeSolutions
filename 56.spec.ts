function merge(arr: number[][]): number[][] {
    const n = arr.length;

    if (n === 1) return;
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
 /**   @param  arrLeft - left array after dividing @param arr*/
 /** @param arrRight - right array after dividing @param arr */
 
const findIntersections = (arr: number[][], arrLeft: number[][], arrRight: number[][]): number[][] => {
    const left: number = arrLeft.length;
    const right: number = arrRight.length;
    let i: number = 0;
    let j: number = 0;
    let accArr: number[][] = [];

    while (i < left && j < right) {
        // If intervals intersect - accumulate them
        if (arrLeft[i][1] >= arrRight[j][0]) {
            accArr.push([arrLeft[i++][0], arrRight[j++][1]]);
        }
        // Otherwise - move leftBorder
        else
            accArr.push(arrLeft[i++]);
    }
    // Fill accArr in case if didn't reach certain border(left/right) 
    for (let ll = i; ll < left; ll++)
        accArr.push(arrLeft[ll]);
    for (let rr = j; rr < right; rr++)
        accArr.push(arrRight[rr]);

    return arr = accArr;
}
console.log(String(merge([[1, 3], [2, 6], [8, 10], [15, 18]])));