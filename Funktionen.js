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
