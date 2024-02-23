/*
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
*/

function removeDuplicates(s: string, k: number): string {
  
  if(k > s.length)
      return s;
    
  let res: string = '';
  const stack: [string,number][] = [];  
  for(const letter of s) {
      if(stack.length && stack[stack.length-1][0] == letter)
          stack[stack.length-1][1]+=1;    
      else
          stack.push([letter, 1]);
      
      if(stack.length && stack[stack.length-1][1]===k)
          stack.pop();
  }
    
  for(const pairs of stack) {
      res+= pairs[0].repeat(pairs[1]);
  }  
return res
}
