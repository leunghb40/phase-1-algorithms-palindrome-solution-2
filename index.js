function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase();

  // initialize two pointers, one at the beginning of the word, and the other at the end
  let left = 0;
  let right = lowerCaseWord.length - 1;

  // loop through the characters in the word
  while (left < right) {
    // if the characters at the left and right pointers are different, return false
    if (lowerCaseWord[left] !== lowerCaseWord[right]) {
      return false;
    }

    // move the pointers towards each other
    left++;
    right--;
  }

  // if we make it to this point, the word is a palindrome
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
