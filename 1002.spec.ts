/** @param words - all words */
const commonChars = (words: string[]): string[] => {
    const smallestWord: string = words.reduce((prev, cur) => prev.length >= cur.length ? prev : cur, '');
    const hasCommonLetter = (symbol: string) => words.every(val => val.includes(symbol));
    const commonSymbols: string[] = [];
    for (const symbol of smallestWord) {
        if (hasCommonLetter(symbol)) commonSymbols.push(symbol);
        words = words.map(word => word.replace(symbol, ''));
    }
    return commonSymbols;
}