// -----------------------------
// Variablen
// -----------------------------
var alteVariable = "Ich bin alt"; // alte Art, vermeide var
let variable = "Ich kann geändert werden";
const konstante = "Ich kann nicht geändert werden";

// -----------------------------
// Datentypen
// -----------------------------
let string = "Hallo";
let zahl = 123;
let boolean = true; // oder false
let array = [1, 2, 3];
let objekt = { name: "Max", alter: 25 };
let undefiniert;
let leer = null;

// -----------------------------
// Operatoren
// -----------------------------
let x = 10;
let y = 5;

let summe = x + y;
let differenz = x - y;
let produkt = x * y;
let quotient = x / y;
let modulo = x % y;

let gleich = x == "10"; // true
let streng = x === 10;  // true
let ungleich = x != y;
let groesser = x > y;

let logischUnd = (x > 5 && y < 10); // true
let logischOder = (x < 5 || y < 10); // true
let nicht = !true; // false

// -----------------------------
// Funktionen
// -----------------------------
function sagHallo(name) {
    console.log("Hallo " + name);
}

sagHallo("Max");

// Arrow Function
const sagHalloArrow = (name) => {
    console.log(`Hallo ${name}`);
};
sagHalloArrow("Anna");

// -----------------------------
// Kontrollstrukturen
// -----------------------------
let zahlTest = 7;

// if / else
if (zahlTest > 10) {
    console.log("Größer als 10");
} else {
    console.log("Kleiner oder gleich 10");
}

// switch
let tag = "Montag";
switch(tag) {
    case "Montag":
        console.log("Start der Woche");
        break;
    case "Freitag":
        console.log("Fast Wochenende");
        break;
    default:
        console.log("Andere Tage");
}

// for Schleife
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// while Schleife
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}

// -----------------------------
// Arrays
// -----------------------------
let zahlen = [1,2,3];
zahlen.push(4); // Element hinzufügen
zahlen.pop();   // letztes Element entfernen
console.log(zahlen[0]); // Zugriff auf erstes Element

// -----------------------------
// Objekte
// -----------------------------
let person = { name:"Max", alter:25 };
console.log(person.name);
person.alter = 26;

// -----------------------------
// Template Strings
// -----------------------------
let name = "Max";
console.log(`Hallo ${name}`);

// -----------------------------
// Console Methoden
// -----------------------------
console.log("Normale Ausgabe");
console.warn("Warnung");
console.error("Fehler");

// -----------------------------
// Kommentare
// -----------------------------
// Einzeilig

/*
Mehrzeiliger
Kommentar
*/
