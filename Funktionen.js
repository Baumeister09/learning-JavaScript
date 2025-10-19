//Eine Funktion ist ein Block von Anweisungen, der beliebig oft ausgeführt werden kann
//Funktionen können Parameter (Eingabewerte) und Rückgabewerte haben
//Funktionen kann man mit verschiedenen Schlüsselwörtern deklarieren (z.B. "function", "const", "let", "var")
//Funktionen werden mit geschweiften Klammern {} definiert

//Funktion deklarieren mit dem Schlüsselwort "function"
function farbe(){             //Funktionsname: farbe
    return "grün";           //return = Rückgabewert der Funktion. Anweisungen nach return werden nicht mehr ausgeführt
}
let ergebnis = farbe();     //Funktion aufrufen und Rückgabewert in Variable speichern

//parameter (Eingabewerte) in Funktionen
function Obst(eingabe){
    return eingabe;        
}
let ergebnis2 = Obst("Apfel"); //eingabe besitzt jetzt den Wert "Apfel", genau wie die Variable ergebnis2
//Parameter können beliebig bennant werden außer wie die Funktion selbst

/*
logge() Funktion
*/

function logge() {
    console.log("Hello World!"); //gibt "Hello World!" in der Konsole aus
}
function logge(wert) {
    console.log(wert); //gibt den Wert des Parameters in der Konsole aus
}
function logge(wert) {
    let wert = wert + wert;    //Variable wert wird deklariert und besitzt jetzt den verdoppelten Wert des Parameters
    console.log(wert);        //gibt den verdoppelten Wert in der Konsole aus
    return wert;             //gibt den verdoppelten Wert als Rückgabewert der Funktion zurück
}

/*
if-Anweisungen in Funktionen
*/

//if-else-Anweisung, die eine Bedingung überprüft und je nach Ergebnis unterschiedlichen Code ausführt
if(x === y) {
    console.log("x ist gleich y");
} else if (x > y) {
    console.log("x ist größer als y");
} else {
    console.log("x ist nicht gleich y");
}


/*
Switch-Anweisungen in Funktionen
*/

//Switch-Anweisung, die den Wert einer Variable überprüft und je nach Ergebnis unterschiedlichen Code ausführt
let farbe = "rot";
switch(farbe) {
    case "rot":
        console.log("Die Farbe ist rot");
        break;
    case "blau":
        console.log("Die Farbe ist blau");
        break;
    default:
        console.log("Die Farbe ist weder rot noch blau");
        break;
}

/*
Arrays
*/

//Array sind Datenstrukturen, die mehrere Werte in einer einzigen Variablen speichern können
//Array deklarieren mit eckigen Klammern []
let obst = ["Apfel", "Banane", "Orange"]; //Array mit drei Elementen

//Auf Elemente in einem Array zugreifen mit dem Index (Position des Elements im Array, beginnt bei 0)
let erstesObst = obst[0]; //erstesElement besitzt jetzt den Wert "Apfel"
let zweitesObst = obst[1]; //zweitesElement besitzt jetzt den Wert "Banane"
let drittesObst = obst[2]; //drittesElement besitzt jetzt den Wert "Orange"

//Array Elemente schreiben
obst[0] = "Mango"; //erstes Element im Array wird auf "Mango" geändert

//Array length = gibt die Anzahl der Elemente im Array zurück
let anzahlObst = obst.length; //anzahlObst besitzt jetzt den Wert 3

//Arrays sortieren in aufsteigender Reihenfolge (Zahlen)
function sortiereArray(arr) {
    return arr.sort(function(a, b) {
        return a - b; 
    });
}

//Arrays sortieren Alphabetisch (Strings)
function sortiereArrayAlphabetisch(arr) {
    return arr.sort();
}

//Arrays sortieren der Länge nach (Strings)
function sortiereArrayNachLaenge(arr) {
    return arr.sort(function(a, b) {
        return a.length - b.length; 
    });
}

//Array Methoden

