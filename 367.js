// Given a positive integer num, return true if num is a perfect square or false otherwise.
// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
// You must not use any built-in library function, such as sqrt. 

var isPerfectSquare = function(num) {
    if (num == 1) {
        return true
    }
    
    let left = 2
    let right = Number(num / 2).toFixed() + 1

    while (left <= right) {
        let midNum = Number((left + right) / 2).toFixed()
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
