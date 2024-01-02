917. Reverse Only Letters


/** @param s - string */
const reverseOnlyLetters = (s: string): string => {
    const isLetter = (el: string) => /[a-zA-Z]/.test(el);
    const reverseString: string[] = s.split('').filter(val => isLetter(val)).reverse();
    let result: string = '';
    for (let i = 0, j = 0; i < s.length; i++) {
        if (isLetter(s[i])) {
            result = result.concat(reverseString[j]);
            j++;
        }
        else result = result.concat(s[i]);
    }
    return result;
}