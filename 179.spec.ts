179. Largest Number


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