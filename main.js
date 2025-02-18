//Задание №1
console.log('Hello, World!');

//Задание №2
//You know nothing, Jon Snow!

//Задание №3
console.log('Robert');
console.log('Stannis');
console.log('Renly');

//Задание №4
console.log('9780262531962');

//Задание №5
console.log('What Is Dead May Never Die');

//Задание №6
console.log(81 / 9);

//Задание №7
console.log(6 - -81);

//Задание №8
console.log(3 ** 5);
console.log(-8 / -4);

//Задание №9
console.log(8 / 2 + 5 - -3 / 2);

//Задание №10
console.log(70 * (3 + 4) / (8 + 2));

//Задание №11
console.log(0.39 * 0.22);

//Задание №12
console.log((Infinity + Infinity) / 10);

//Задание №13
console.log(NaN);

//Задание №14
console.log(5 ** 2 - 3 * 7);

//Задание №15
console.log("\"Khal Drogo's favorite word is \"athjahakar\"\"");

//Задание №16
console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".')

//Задание №17
console.log('Winter ' + 'came ' + 'for ' + 'the ' + 'House ' + 'of ' + 'Frey.');

//Задание №18
console.log(String.fromCharCode(126));
console.log(String.fromCharCode(94));
console.log(String.fromCharCode(37));

//Задание №19
let motto = 'What Is Dead May Never Die!'
console.log(motto)

//Задание №20
let name = 'Brienna';
name = 'anneirB';
console.log(name);

//Задание №21
const theNumberOfMyBrothers = '2';
console.log(theNumberOfMyBrothers);

//Задание №22
let family = 'Targaryen';
let pet = 'Dragon';
console.log(family);
console.log('and');
console.log(pet);

//Задание №23
let eurosCount = 100;
let dollarsCount = eurosCount * 1.25;
let yuansPerDollar = 6.91;
let yuansCount = dollarsCount * yuansPerDollar;
console.log(dollarsCount);
console.log(yuansCount);

//Задание №24
let info = "We couldn't verify your mother's maiden name.";
let intro = 'Here is important information about your account security.';
let firstName = 'Joffrey';
let greeting = 'Hello';
console.log(greeting + ', ' + firstName + '!');
console.log(intro + '\n' + info);

//Задание №25
let theFirstNumber = 11;
let theSecondNumber = -100;
console.log(theFirstNumber * theSecondNumber);

//Задание №26
let king = 'King Balon the 6th';
let roomsInARow = 17;
let rows = 6;
console.log(king + ' has ' + (rows * roomsInARow) + ' rooms.');

//Задание №27
const army = 'the white walkers';
console.log(army);

//Задание №28
const stark = 'Arya';
console.log(`Do you want to eat, ${stark}?`);

//Задание №29
const name = 'Na\nharis';
console.log(name[7]);

//Задание №30
console.log(-0.304);

//Задание №31
console.log(undefined);

//Задание №32
const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';
console.log(one[2] + two[1] + three[3] + two[4] + two[2]);

//Задание №33
console.log(7 - (-8 - -2));

//Задание №34
import { length } from 'hexlet-basics/string';

const company1 = length('Apple');
const company2 = length('Samsung');
console.log(company1 + company2);

//Задание №35
const soldiersCount = Math.abs(-2309);
console.log(soldiersCount);

//Задание №36
const number =Math.ceil(923.2238);
console.log(number);

//Задание №37
import { round } from 'hexlet-basics/math';

const number =round(10.1234, 2);
console.log(number);

//Задание №38
import { length } from 'hexlet-basics/string';

const text = 'Never forget what you are, for surely the world will not';
console.log(`First: ${text[0]}\nLast: ${text[length(text) - 1]}`);

//Задание №39
console.log( Math.min(3,10,22,-3,0))

//Задание №40
console.log(Math.round(Math.random() * 10))

//Задание №41
const motto = 'Family, Duty, Honor';
console.log(typeof motto);

//Задание №42
const text = 'a mind needs books as a sword needs a whetstone, if it is to keep its edge.';
console.log(text.length);

//Задание №43
const text = 'a MIND needs Books as a Sword needS a WHETSTONE, if it is to keep its edge.';
console.log(text.toLowerCase());

//Задание №44
let firstName = '  Grigor   \n';
console.log(firstName.trim());

//Задание №45
const text = 'Never forget what you are, for surely the world will not';
console.log(`First: ${text[0]}`);
console.log(`Last: ${text[text.length - 1]}`);

//Задание №46
const text = 'When \t\n you play a \t\n game of thrones you win or you die.';
console.log(text.slice(5,15).trim().length);

//Задание №47
const printMotto = () => {
    const text = 'Winter is coming';
    console.log(text);
  }
  printMotto()

//Задание №48
const sayHurrayThreeTimes = () => {
    const word = 'hurray!';
    return `${word} ${word} ${word}`;
  };
  export default sayHurrayThreeTimes;

//Задание №49
const truncate = (text, length) => {
    const result = `${text.slice(0, length)}...`;
    return result;
  };
  
  export default truncate;

//Задание №50
const getHiddenCard = (cardNumber, starsCount = 4) => {
    const visibleDigitsLine = cardNumber.slice(12);
    return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
  };
  
  export default getHiddenCard;

//Задание №51
const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

export default capitalize;

//Задание №52
const isPensioner = (age) => age >= 60;
console.log(isPensioner(65));

export default isPensioner;

//Задание №53
const isMister = (man) => man === 'Mister'
console.log(isMister('Mister'))

export default isMister;

//Задание №54
const isInternationalPhone = (Phone) => Phone[0] === '+';
 
isInternationalPhone('+79602223423');
export default isInternationalPhone;

//Задание №55
const  isLeapYear = (year) => {
    const result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    return result;
  };
  isLeapYear(2016);
  export default isLeapYear;
  

//Задание №56
const reverse = (s) => s.split('').reverse().join('');

const isPalindrome = (word) => {
  const lowerWord = word.toLowerCase();
  return lowerWord === reverse(lowerWord);
};
const isNotPalindrome = (word) => !isPalindrome(word);

export default isNotPalindrome;
//Задание №57
const getLetter = (name, numLetter) => name[numLetter - 1] || '';

export default getLetter;

//Задание №58
const guessNumber = (number) => {
    if (number === 42) {
      return 'You win!';
  }
    return 'Try again!';
  };
  export default guessNumber;

//Задание №59
const normalizeUrl = (site) => {
    let normalizedUrl;
  
    if (site.startsWith('https://')) {
      normalizedUrl = site;
    } else {
      normalizedUrl = `https://${site}`;
    }
    return normalizedUrl;
  };
  
  export default normalizeUrl;

//Задание №60
const whoIsThisHouseToStarks = (houseName) => {
    let status;
  
    if (houseName === 'Karstark' || houseName === 'Tally') {
      status = 'friend';
    } else if (houseName === 'Lannister' || houseName === 'Frey') {
      status = 'enemy';
    } else {
      status = 'neutral';
    }
  
    return status;
  };
  
  export default whoIsThisHouseToStarks;

//Задание №61
import { reverse } from '../../../src/hexlet/string.js';

// BEGIN
const convertText = (text) => {
  if (text === '') {
    return '';
  }

  const reversable = text[0] !== text[0].toUpperCase();
  return reversable ? reverse(text) : text;
};
// END

export default convertText;

//Задание №62
const getNumberExplanation = (number) => {
    switch (number) {
      case 666: 
        return 'devil number';
      case 7: 
        return 'prime number';
      case 42: 
        return 'answer for everything';
      default: 
        return 'just a number';
    }
  };
  export default getNumberExplanation;

//Задание №63
const printNumbers = (initialNumber) => {
  let i = initialNumber;
  while (i >= 1) {
    console.log(i);
    i = i - 1;
  }
  console.log('finished!');
};

export default printNumbers;

//Задание №64
const multiplyNumbersFromRange = (start, finish) => {
  let i = start;
  let result = 1;

  while (i <= finish) {
    result = result * i;
    i = i + 1;
  }

  return result;
};

export default multiplyNumbersFromRange;


//Задание №65
const joinNumbersFromRange = (start, finish) => {
  let i = start;
  let result = '';

  while (i <= finish) {
    result = `${result}${i}`;
    i = i + 1;
  }

  return result;
};

export default joinNumbersFromRange;


//Задание №66
const printReversedWordBySymbol = (word) => {
  let i = word.length - 1;
  while (i >= 0) {
    console.log(word[i]);
    i = i - 1;
  }
};

export default printReversedWordBySymbol;


//Задание №67
const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count = count + 1;
    }
    i = i + 1;
  }

  return count;
};

export default countChars;

//Задание №68
const even = (str) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    if (i % 2 !== 0) {
      result = `${result}${str[i]}`;
    }
    i = i + 1;
  }

  return result;
};


export default even;


//Задание №69
const filterString = (str, char) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const currentChar = str[i];
    if (currentChar !== char) {
      result = `${result}${currentChar}`;
    }
    i += 1;
  }

  return result;
};

export default filterString;


//Задание №70
const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const current = str[i];
    if ((i + 1) % n === 0) {
      result = `${result}${current.toUpperCase()}`;
    } else {
      result = `${result}${current}`;
    }
    i++;
  }

  return result;
};

export default makeItFunny;


//Задание №71
const hasChar = (str, char) => {
  let i = 0;
  while (i < str.length) {
    if (str[i] === char) {
      return true;
    }

    i += 1;
  }

  return false;
};

export default hasChar;

//Задание №72
const encrypt = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    const nextSymbol = str[i + 1] || '';
    result = `${result}${nextSymbol}${str[i]}`;
  }

  return result;
};

export default encrypt;



