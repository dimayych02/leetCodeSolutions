/*
Given an array of integers temperatures represents the daily temperatures,
return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
If there is no future day for which this is possible, keep answer[i] == 0 instead.
*/


function dailyTemperatures(temperatures: number[]): number[] {

    const res: number[] = new Array(temperatures.length).fill(0);
    const stack: number[][] = [];

    for (let i = 0; i < temperatures.length; i++) {
        const t = temperatures[i];
        while (stack.length > 0 && t > stack[stack.length - 1][1]) {
            const stackIdx: number = stack[stack.length - 1][0];
            res[stackIdx] = i - stackIdx
            stack.pop();
        }

        stack.push([i, t]);
    }
    return res;
}
