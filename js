Задание 6.6.1

const word1 = "Довод";
const word2 = "Сантимент";

isPalindrome(word1);
isPalindrome(word2);

function isPalindrome(word) {
  word = word.toLowerCase();

  let isPal = true;

  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      isPal = false;
      break;
    }
  }

  if (isPal) {
    console.log(`Слово "${word}" является палиндромом`);
  } else {
    console.log(`Слово "${word}" не является палиндромом`);
  }
}

Задание 6.6.2

