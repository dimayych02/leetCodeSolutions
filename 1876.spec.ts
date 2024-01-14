// Sliding Window
/** @param s - string */

function countGoodSubstrings(s: string): number {
    const set = new Set<string>();
    let counter: number = 0;
    while (s.length > 0) {
        let leftBorder: number = 0;
        const rightBorder: number = 3;

        while (rightBorder - leftBorder >= 1) {
            set.add(s[leftBorder]);
            leftBorder++;
        }
        counter = (set.size === 3) ? counter + 1 : counter;
        set.clear();
        s = s.substring(1);
        if (s.length < 3)
            break;
    }
    return counter;

}