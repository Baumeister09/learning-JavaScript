//jede Zeile wird mit einem Semikolon abgeschlossen
//Variablen sind Platzhalter für Werte
//Variablen müssen deklariert werden (mit dem Schlüsselwort "var", "let" oder "const")
//Variablen können verschiedene Datentypen speichern (Zahlen, Strings, Booleans, Objekte, etc.)
//Variablen können verändert werden (außer bei "const")

let stadt = "Berlin"; //stadt = Variablen name, "Berlin" = Wert, let = deklaration

//variablen können verändert werden mit dem Zuweisungsoperator "="
//let, const und var werden dabei nicht wiederholt
let land = "Deutschland";
land = "Österreich";

//Variablen können auch mit anderen Variablen kombiniert werden oder ersetzt werden
let stadtLand = stadt + ", " + land; //Kombination von Variablen
let name1 = "Max";
let name2 = "Moritz";
name1 = name2; //Ersetzung von Variablen 

let stadt = "Berlin";
let ausgabe = stadt.length; //length = Eigenschaft, die die Anzahl der Zeichen in einem String zurückgibt
console.log(ausgabe); //gibt 6 in der Konsole aus, da "Berlin" 6 Zeichen hat

let stadt = "Berlin";
let ausgabe = stadt.toUpperCase(); //toUpperCase() = Methode, die einen String in Großbuchstaben umwandelt
console.log(ausgabe); //gibt "BERLIN" in der Konsole aus

let n1 = "Maria".charAt(2); //charAt() = Methode, die das Zeichen an der angegebenen Position zurückgibt (Positionen beginnen bei 0)
console.log(n1); //gibt "r" in der Konsole aus, da "r" an der 2. Position in "Maria" steht

let name =" Rosa ";
let n2 = name.trim(); //trim() = Methode, die Leerzeichen am Anfang und Ende eines Strings entfernt
console.log(n2); //gibt "Rosa" in der Konsole aus, ohne die Leerzeichen

let name = "Anna";
let n3 = name.indexOf("n"); //indexOf() = Methode, die die Position des ersten Vorkommens eines Zeichens oder einer Zeichenkette zurückgibt
console.log(n3); //gibt 1 in der Konsole aus, da "n" an der 1. Position in "Anna" steht
let name = "Anna";
let n4 = name.indexOf("n", 2); //zweiter Parameter gibt die Startposition für die Suche an
console.log(n4); //gibt 2 in der Konsole aus, da "n" an der 2. Position in "Anna" steht und die Suche ab der 2. Position beginnt

let name = "Alexander";
let x = name.substring(0, 5); //substring() = Methode, die einen Teilstring zurückgibt (erster Parameter = Startposition, zweiter Parameter = Endposition)
console.log(x); //gibt "Alexa" in der Konsole aus, da die Zeichen von Position 0 bis 4 (5-1) zurückgegeben werden

let name = "Sophia" ;
let y = name.replace("ph", "f"); //replace() = Methode, die ein Zeichen oder eine Zeichenkette durch ein anderes ersetzt


/*
Zahlen und mathematische Operationen
*/


let x = 6; //Zahlen (number) können mit mathematischen Operatoren (+, -, *, /, %) kombiniert werden
let y = 3;
let ergebnis = x + y; //Addition
let ergebnis2 = x - y; //Subtraktion
let ergebnis3 = x * y; //Multiplikation
let ergebnis4 = x / y; //Division
let ergebnis5 = x % y; //Modulo (Restwert der Division)

let a = Math.sqrt(16); //Math.sqrt() = Methode, die die Quadratwurzel einer Zahl berechnet
let b = Math.pow(2, 3); //Math.pow() = Methode, die eine Zahl potenziert (erster Parameter = Basis, zweiter Parameter = Exponent)
let c = Math.round(4.6); //Math.round() = Methode, die eine Zahl auf die nächste Ganzzahl rundet
let d = Math.ceil(4.1); //Math.ceil() = Methode, die eine Zahl auf die nächste Ganzzahl aufrundet
let e = Math.floor(4.9); //Math.floor() = Methode, die eine Zahl auf die nächste Ganzzahl abrundet
let f = Math.random(); //Math.random() = Methode, die eine zufällige Zahl zwischen 0 (inklusive) und 1 (exklusive) zurückgibt
let g = Math.max(1, 5, 3, 9, 2); //Math.max() = Methode, die die größte Zahl aus einer Liste von Zahlen zurückgibt
let h = Math.min(1, 5, 3, 9, 2); //Math.min() = Methode, die die kleinste Zahl aus einer Liste von Zahlen zurückgibt
let i = Math.abs(-7); //Math.abs() = Methode, die den Absolutwert (Betrag) einer Zahl zurückgibt
let j = Math.PI; //Math.PI = Konstante, die den Wert von Pi (3.14159...) repräsentiert
let k = Math.E; //Math.E = Konstante, die den Wert der Eulerschen Zahl (2.71828...) repräsentiert
let l = Math.log(10); //Math.log() = Methode, die den natürlichen Logarithmus (zur Basis e) einer Zahl zurückgibt
let m = Math.log10(100); //Math.log10() = Methode, die den Logarithmus zur Basis 10 einer Zahl zurückgibt
let n = Math.sin(Math.PI / 2); //Math.sin() = Methode, die den Sinus eines Winkels (in Radiant) zurückgibt
let o = Math.cos(0); //Math.cos() = Methode, die den Kosinus eines Winkels (in Radiant) zurückgibt
let p = Math.tan(Math.PI / 4); //Math.tan() = Methode, die den Tangens eines Winkels (in Radiant) zurückgibt
let q = Math.asin(1); //Math.asin() = Methode, die den Arkussinus (Inverse des Sinus) einer Zahl zurückgibt
let r = Math.acos(0); //Math.acos() = Methode, die den Arkuskosinus (Inverse des Kosinus) einer Zahl zurückgibt
let s = Math.atan(1); //Math.atan() = Methode, die den Arkustangens (Inverse des Tangens) einer Zahl zurückgibt
let t = Math.hypot(3, 4); //Math.hypot() = Methode, die die Länge der Hypotenuse eines rechtwinkligen Dreiecks berechnet (Pythagoras)
let u = Math.cbrt(27); //Math.cbrt() = Methode, die die Kubikwurzel einer Zahl berechnet
let v = Math.clz32(1); //Math.clz32() = Methode, die die Anzahl der führenden Nullen in der 32-Bit-Binärdarstellung einer Zahl zurückgibt
let w = Math.imul(2, 3); //Math.imul() = Methode, die die 32-Bit-Ganzzahl-Multiplikation zweier Zahlen durchführt
let z = Math.fround(1.5); //Math.fround() = Methode, die eine Zahl auf die nächstgelegene 32-Bit-Gleitkommazahl rundet
let aa = Math.sign(-5); //Math.sign() = Methode, die das Vorzeichen einer Zahl zurückgibt (-1 für negative Zahlen, 1 für positive Zahlen, 0 für null)
let bb = Math.expm1(1); //Math.expm1() = Methode, die e^x - 1 berechnet, wobei x der übergebene Wert ist
let cc = Math.log1p(1); //Math.log1p() = Methode, die den natürlichen Logarithmus von 1 + x berechnet, wobei x der übergebene Wert ist
let dd = Math.sinh(0); //Math.sinh() = Methode, die den hyperbolischen Sinus einer Zahl berechnet
let ee = Math.cosh(0); //Math.cosh() = Methode, die den hyperbolischen Kosinus einer Zahl berechnet
let ff = Math.tanh(1); //Math.tanh() = Methode, die den hyperbolischen Tangens einer Zahl berechnet
let gg = Math.asinh(1); //Math.asinh() = Methode, die den inversen hyperbolischen Sinus einer Zahl berechnet
let hh = Math.acosh(2); //Math.acosh() = Methode, die den inversen hyperbolischen Kosinus einer Zahl berechnet
let ii = Math.atanh(0.5); //Math.atanh() = Methode, die den inversen hyperbolischen Tangens einer Zahl berechnet
let jj = Math.trunc(4.9); //Math.trunc() = Methode, die die Nachkommastellen einer Zahl entfernt und nur den Ganzzahlanteil zurückgibt

parseInt("42"); //parseInt() = Funktion, die einen String in eine Ganzzahl (Integer) umwandelt
parseFloat("3.14"); //parseFloat() = Funktion, die einen String in eine Gleitkommazahl (Float) umwandelt
Number("123"); //Number() = Funktion, die einen String oder anderen Wert in eine Zahl umwandelt. Gibt NaN zurück, wenn der String keine gültige Zahl darstellt
isNaN("abc"); //isNaN() = Funktion, die überprüft, ob ein Wert "Not-a-Number" (NaN) ist. Gibt true zurück, wenn der Wert keine gültige Zahl ist

toString(123); //toString() = Methode, die eine Zahl in einen String umwandelt
String(456); //String() = Funktion, die einen Wert in einen String umwandelt
Boolean(1); //Boolean() = Funktion, die einen Wert in einen Boolean (true oder false) umwandelt. 0, null, undefined, NaN und "" werden zu false, alle anderen Werte zu true

let x = 7.25;
let y = x.toFixed(); //toFixed() = Methode, die eine Zahl auf eine bestimmte Anzahl von Dezimalstellen rundet und als String zurückgibt (Standard ist 0 Dezimalstellen)


/*
Booleans und Vergleichsoperatoren
*/


let wahr = true; //Booleans (true oder false) werden oft in Bedingungen verwendet
let falsch = false;

let a = 5;
let b = 10;
let ergebnis1 = a < b; //Kleiner als
let ergebnis2 = a > b; //Größer als
let ergebnis3 = a <= b; //Kleiner oder gleich
let ergebnis4 = a >= b; //Größer oder gleich
let ergebnis5 = a == b; //Gleich (Wertvergleich)
let ergebnis6 = a === b; //Strikt gleich (Wert- und Typvergleich)
let ergebnis7 = a != b; //Ungleich (Wertvergleich)
let ergebnis8 = a !== b; //Strikt ungleich (Wert- und Typvergleich)

let x = 5;
let y = 10;
let und = (x < 10 && y > 5); //Logisches UND (beide Bedingungen müssen wahr sein)
let oder = (x < 10 || y < 5); //Logisches ODER (mindestens eine Bedingung muss wahr sein)
let nicht = !(x < 10); //Logisches NICHT (kehrt den Wahrheitswert um)

NAND-Gatter =   !(A && B)  //Gibt true zurück, wenn mindestens eine der Bedingungen false ist
NOR-Gatter =    !(A || B)  //Gibt true zurück, wenn beide Bedingungen false sind
XOR-Gatter =    (A || B) && !(A && B) //Gibt true zurück, wenn genau eine der Bedingungen true ist
XNOR-Gatter =   !( (A || B) && !(A && B) ) //Gibt true zurück, wenn beide Bedingungen den gleichen Wahrheitswert haben (beide true oder beide false)

let a = 5;
let b = "5";
let vergleich1 = (a == b); //true, da nur der Wert verglichen wird
let vergleich2 = (a === b); //false, da auch der Typ verglichen wird (number vs. string)

let a = 5;
let b = "5";
let vergleich = (a != b); //false, da die Werte gleich sind
let vergleichStrikt = (a !== b); //true, da die Typen unterschiedlich sind

let a = 5;
let b = 10;
let vergleich1 = (a < b); //true, da 5 kleiner als 10 ist
let vergleich2 = (a > b); //false, da 5 nicht größer als 10 ist
let vergleich3 = (a <= b); //true, da 5 kleiner oder gleich 10 ist
let vergleich4 = (a >= b); //false, da 5 nicht größer oder gleich 10 ist

//if-else-Anweisung, die eine Bedingung überprüft und je nach Ergebnis unterschiedlichen Code ausführt
if(x === y) {
    console.log("x ist gleich y");
} else if (x > y) {
    console.log("x ist größer als y");
} else {
    console.log("x ist nicht gleich y");
}
