
387. First Unique Character in a String



const firstUniqChar = (s: string): number => {
    const charMap = new Map();
    for (const el of s) {
        const mapEl = charMap.get(el);
        const index = mapEl ? mapEl : 0;
        charMap.set(el, index + 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (charMap.get(s[i]) === 1)
            return i;
    }
    return -1;
};