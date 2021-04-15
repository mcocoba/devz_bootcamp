function isPalindrome(str) {
  if (!str) {
    return false;
  }

  // Sanity check / regex to remove ",", " ", "."
  // Split to convert string into array
  let chars = str.toLowerCase().replace(/[ ,.]/g, '').split('');

  let i = 0;
  let j = chars.length - 1;

  while (i < j) {
    if (chars[i] !== chars[j]) return false;
    ++i;
    --j;
  }

  return true;
}

console.log(isPalindrome(''), false);
console.log(isPalindrome('Amor a Roma'), true);
console.log(isPalindrome('Ana lava lana'), true);
console.log(isPalindrome('La ruta natural'), true);
console.log(isPalindrome('Esto no es un palindromo'), false);
console.log(isPalindrome('Esto es el pasito perron'), false);
console.log(isPalindrome('Lana sube, lana baja'), false);
console.log(isPalindrome('Claramente, esto no es un palíndromo'), false);
