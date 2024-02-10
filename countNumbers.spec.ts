// You need to count how much the number is appeared in arr using complexity O(log n)

const countNumbers = (arr: number[], x: number): number => {

    const findMinPos = (arr: number[], x: number): number => {
        let l: number = 0;
        let r: number = arr.length - 1;

        while (l < r) {
            const mid: number = l + Math.floor((r - l) / 2);
            if (arr[mid] < x)
                l = mid + 1;
            else
                r = mid;
        }
        return l;
    }

    const findMaxPos = (arr: number[], x: number): number => {
        let l: number = 0;
        let r: number = arr.length - 1;

        while (l < r) {
            const mid: number = l + Math.floor((r - l) / 2);
            if (arr[mid] <= x)
                l = mid + 1;
            else
                r = mid;
        }
        return r;
    }

    return findMaxPos(arr, x) - findMinPos(arr, x);
}
