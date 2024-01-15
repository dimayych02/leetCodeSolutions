// 20. Valid Parentheses

/** @param s - string */
const isValid = (s: string): boolean => {

    const stack: string[] = [];
    const hashTable: Record<string, string> = {
        '}': '{',
        ')': '(',
        ']': '['
    }

    for (const char of s) {
        if (char in hashTable)
            if (stack[stack.length - 1] == hashTable[char])
                stack.pop();
            else
                return false;
        else
            stack.push(char);
    }

    return stack.length === 0;

}
