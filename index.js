var firstLoad = nameParser();
var pageStruct = pageConstruct();
var celsiusResult = tempConvert();

function pageConstruct() {
    document.write('<h1 style= "text-align:center;">WELCOME TO MY SIMPLE CALCULATOR</h1>')
}

function nameParser() {
    var firstName = prompt("please enter your first name");
    var secondName = prompt("please enter your middle name");
    var thirdName = prompt("please enter your last name ");
    var result = firstName + " " + secondName + " " + thirdName;
    document.write("<h1 class='name' >Good day,", " ", result, "</h1><br>");
}

function tempConvert() {
    let x = prompt("please enter a number");
    let y = prompt("please enter another number");
    let celsius = (parseInt(x) - 32) * 5 / 9;
    let farenheit = parseInt(y) * 9 / 5 + 32;
    document.write(
        "<div class='container'><div class='container'><p class='initialInputOut'>", x, " ", "is the first number <br>", y, " ", "is the second number </p></div>"
    );
    document.write(
        "<div class='container'><p class='celsius'>", celsius, " ", "is the celsius conversion of the first number</p></div>"
    );

    document.write(
        "<div class='container'><p class='celsius'>", farenheit, " ", "is the farenheit conversion of the second number</p></div>"
    );
}

