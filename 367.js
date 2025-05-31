// Given a positive integer num, return true if num is a perfect square or false otherwise.
// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
// You must not use any built-in library function, such as sqrt. 

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num == 1) {
        return true
    }
    
    let left = 2
    let right = Math.floor(num / 2)

    while (left <= right) {
        let midNum = Math.floor((left + right) / 2)
        let numsSquare = midNum*midNum

        if (numsSquare == num) {
            return true
        }
        if (numsSquare < num) {
            left = midNum + 1
        } 
        else {
            right = midNum - 1
        }
        
    }
    return false
};

// 25 : [2,3,4,5,6,7,8,9,10,11,12]
//
