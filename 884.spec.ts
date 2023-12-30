884. Uncommon Words from Two Sentences


const uncommonFromSentences = (s1: string, s2: string): string[] => {
    const strArrOne: string[] = s1.split(' ');
    const strArrTwo: string[] = s2.split(' ');
    const unCommonOne = strArrOne.filter(
        (x, index) => !strArrTwo.includes(x) && strArrOne.indexOf(x) === strArrOne.lastIndexOf(x)
    );
    const unCommonTwo = strArrTwo.filter(
        (y, index) => !strArrOne.includes(y) && strArrTwo.indexOf(y) === strArrTwo.lastIndexOf(y)
    );
    return [...unCommonOne, ...unCommonTwo];
}
