const word = "abba"
function isPalindrome(word) {
  // Write your algorithm here
  if (word==word){
    return true;
  }
  else if(word !==word){
    return false;
  }
console.log(isPalindrome(word))
}
isPalindrome('robot')
/* 
  Add your pseudocode here
  recall conditional statements
  use if else statement 
  concantnation too
  for the last two tests we use else if statements
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("ab");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
