console.log("tedfgdfgst");
//Codeflow_uebung_lvl_1_8: Arrays slice()

const lieblingsreiseziele = ["Paris", "Rom", "New York", "Tokio", "London"];
console.log("Ursprüngliches Array:", lieblingsreiseziele);
const extrahierenReiseziele = lieblingsreiseziele.slice(1, 3);
console.log(extrahierenReiseziele);
console.log(lieblingsreiseziele);
//Codeflow_uebung_lvl_1_10: Arrays/String split()
const text =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";
const schritte = text.split(".");

console.log(schritte);
console.log("test1:", schritte[0]);
console.log("test2:", schritte[1]);
console.log("test3:", schritte[2]);
//zweitenteil aufgabe 1
let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];
getraenke.sort();
console.log(getraenke);
// Funktion, um Elemente in Konsole und HTML-Seite auszugeben
function drinks(elt) {
  console.log(elt);
  document.write(elt + "<br>");
}
getraenke.forEach(drinks);
//zweitenteil aufgabe 2
let upperdrinks = getraenke.map((parameter) => {
  return parameter.toUpperCase();
});
console.log(upperdrinks);

//zweitenteil aufgabe 3 //map() eine Array-Methode, die verwendet wird, um ein neues Array zu erstellen
let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

let verdoppelteWerte = array.map(function (multi) {
  return multi * 2;
});

console.log(verdoppelteWerte);

//zweitenteil aufgabe 4
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
function fahrenheitToCelsius(ftc) {
  return ftc.map(function (fahrenheit) {
    return (fahrenheit - 32) / 1.8;
  });
}
let celsius = fahrenheitToCelsius(fahrenheit);
console.log(celsius);
//zweitenteil aufgabe 5
let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];
let modifiedNumbers = checkNumber.map(function (number) {
  if (number % 3 === 0) {
    return number + 100;
  } else {
    return number;
  }
});
console.log(modifiedNumbers);
//zweitenteil aufgabe 6
let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];
let cleanedAlbum = album.map(function (filename) {
  filename = filename.toLowerCase();

  if (filename.includes(".")) {
    let entferne = filename.split(".");
    return entferne[0];
  } else {
    return "invalid";
  }
});

console.log(cleanedAlbum);
// BSP
let numbers = [20, 25, 12, 10, 100000, 400, 56, 18];
numbers.sort();
console.log(numbers);

//Drittenteil  aufgabe 1 / Sort() alphabetisch sortiert,
let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

languages.sort();
console.log(languages);

//Drittenteil  aufgabe 2  sort() und reverse() (von z to A)

function sortierung2() {
  languages.sort();
  languages.reverse();
}

sortierung2();

console.log(languages);
//Drittenteil  aufgabe 3

let name = "Sergio";
let word1 = "Hannah";
let word2 = "Regallager";
let word3 = "Reliefpfeiler";
let word4 = "Rentner";
let sentence1 = "Ella mag alle Bohnen";
let sentence2 = "han nesaH has ennaH";
function reverseString(input) {
  let characters = input.split("");
  let reversedCharacters = characters.reverse();
  let reversedString = reversedCharacters.join("");
  return reversedString;
}

console.log(reverseString(name));
console.log(reverseString(word1));
console.log(reverseString(word2));
console.log(reverseString(word3));
console.log(reverseString(word4));
console.log(reverseString(sentence1));
console.log(reverseString(sentence2));
//Drittenteil  aufgabe 4
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

numArray2.sort(function (a, b) {
  return a - b;
});

console.log(numArray2);
