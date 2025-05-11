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

_____________
Задание 6.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const uniqueArr = [];
for (const item of arr) {
  if (!uniqueArr.includes(item)) {
    uniqueArr.push(item);
  }
}
console.log(uniqueArr);

_____________
Задание 6.6.3
const input = prompt("Введите любое число:");
const num = Number(input);
const arr = [];
for (let i = 0; i <= num; i++) {
  arr.push(i);
}
console.log(arr);

_____________
Задание 6.6.4

let counter = 0;

for (let i = 0; i < 3; i++) {
  let row = '';
  for (let j = 0; j < 3; j++) {
    row += (counter % 2 === 0) ? 'x' : 'o';
    row += ' ';
    counter++;
  }
  console.log(row.trim());
}

_____________
Задание 6.6.5
  
const obj = {
  some: "some",
  dom: "text",
  arr: [1, 2, 3, 4, 5],
  tom: "there",
};

const arrValues = [];
for (const key in obj) {
  const value = obj[key];

  if (Array.isArray(value)) {
    for (const item of value) {
      arrValues.push(item);
    }
  } else {
    arrValues.push(value);
  }
}
console.log(arrValues);


