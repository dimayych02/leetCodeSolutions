function merge(arr: number[][]): number[][] {

    if (arr.length === 1)
        return arr;

    arr.sort((a, b) => a[0] - b[0]);
    const rs: number[][] = [arr[0]];
    for (const interval of arr) {
        const last: number = rs.length - 1;
        const prev: number[] = rs[last];

        if (prev[1] >= interval[0])
            // Update length
            rs[last][1] = Math.max(prev[1], interval[1]);

        else
            rs.push(interval);
    }

    return rs;
}
