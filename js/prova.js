//VARIABILI

var name;
name = "Giacomo";

var surname = "Carratù"; //string

var eta = 20; //int

var active = true; //boolean

var list = ["Gino", "Pino", 123, true]; //array

console.log(list[3])

var person = {
    name: "Gino",
    age: 33
}


//FUNZIONI

//messaggio
function sayHello(a) {
    alert(a)
}
sayHello("Pippo");

//somma
var sum = function(a, b) {
    var summ = a + b;
    return summ;
}
sum(10, 5);

//divisione
var div = function(a, b) {

    var _div = (parseInt(a) / parseInt(b));
    return _div;
}

div(10, 5);

//temperatura
function getTemperatura(temp, weekday) {
    if (temp >= 37) {
        console.log("Febbre");
    } else if ((temp == 37) && (weekday != "domenica")) {
        console.log(("Prendi la tachipirina"));
    } else {
        console.log("Vai a scuola");
    }
}

getTemperatura(37, "domenica");