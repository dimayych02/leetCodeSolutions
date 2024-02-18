402. Remove K Digits


/** @param num - non-negative integer */
/** @param k - removing k-digits */
function removeKdigits(num: string, k: number): string {

    const stack: string[] = [];

    for (const digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    const res = stack.join('').replace(/^0+/, '');
    return res.length > 0 ? res : '0';
};
