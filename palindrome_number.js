function isPalindrome(x) {
  let arr = String(x);

  arr = arr.split('').reverse().join('');
  if (String(x) === arr) return true;
  else return false;
}

console.log(isPalindrome(122));
