/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 
*/


function maxArea(height: number[]): number {

    let l: number = 0;
    let r: number = height.length - 1;
    let volume: number = 0;

    while (l < r) {

        volume = Math.max(volume, (r - l) * Math.min(height[l], height[r]));

        if (height[l] < height[r])
            l++;
        else
            r--;
    }
    return volume;
}
