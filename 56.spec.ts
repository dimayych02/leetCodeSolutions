function merge(arr: number[][]): number[][] {

    if (arr.length === 1)
        return arr;

    arr.sort((a, b) => a[0] - b[0]);
    const rs: number[][] = [arr[0]];
    for (const interval of arr) {
        let prev: number[] = rs[rs.length - 1];
        if (prev[1] >= interval[0])
            prev[1] = Math.max(prev[1], interval[1]);
            
        else
            rs.push(interval);    
    }
    return rs;
}
