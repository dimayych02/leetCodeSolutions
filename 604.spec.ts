647. Palindromic Substrings


/** @param s - string */
function countSubstrings(s: string): number {
    const allPalindromes: string[] = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substr = s.substring(i, j);
            if (substr == substr.split('').reverse().join('')) allPalindromes.push(substr);
        }
    }
    return allPalindromes.length;
};