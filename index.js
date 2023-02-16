var firstLoad = nameParser();
var pageStruct = pageConstruct();
var celsiusResult = celsiusConvert();

function pageConstruct(){
    document.write ('<h1 style= "text-align:center;">WELCOME TO MY SIMPLE CALCULATOR</h1>')
}

function nameParser(){
    var firstName = prompt("please enter your first name");
    var secondName = prompt("please enter your middle name");
    var thirdName = prompt("please enter your last name ");
    var result = firstName + " " + secondName + " " +  thirdName;
    document.write("<h1 class='name' >Good day,"," ", result, "</h1><br>");
}

function celsiusConvert(){
    let x = prompt ("please enter a number")
    let celsius = (x - 32) * 5/9;
    document.write(
        "<div class='InitialInputOutput-container'><p class='initialInputOut'>",x , " " , "is the first number <br>" , y , " " , "is the second number </p></div>"
    )
    document.write(
        "<div class='celsius-container'><p class='celsius'>",celsius , " " , "is the celsius conversion of the first number</p></div>"
    )

    
}

