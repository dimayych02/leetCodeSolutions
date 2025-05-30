// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.
// https://leetcode.com/problems/long-pressed-name/description/

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if (name.length > typed.length) {
        return false
    }
    let i = 0
    let j = 0
    
    while( (i < name.length) && (j < typed.length) ) {
        if (name[i] != typed[j]) {
            return false
        }
        let nameIdx = i + 1
        let typedIdx = j + 1

        while (nameIdx < name.length && name[i] == name[nameIdx]) 
            nameIdx++
        while (typedIdx < typed.length && typed[j]== typed[typedIdx])
            typedIdx++

        let diffNameIdx = nameIdx - i
        let diffTypedIdx = typedIdx - j 

        if (diffTypedIdx < diffNameIdx) 
            return false
          
        i = nameIdx
        j = typedIdx
    }
    if ( (i != name.length) || (j != typed.length) )
        return false
    return true
};
// alex
// aaleex
