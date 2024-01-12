function alertFunction(){
    alert("You have arrived at the chaos");
}
function patriotsFunction(buttonPressed){
    if(buttonPressed == 1){
        alert("Those are the Patriots.");
        return "Those are the Patriots.";
    }
    else if(buttonPressed == 2){
        alert("Those are the La-Li-Lu-Le-Lo.");
        return "Those are the La-Li-Lu-Le-Lo.";
    }
    else{
        alert("You do not know who they are, do you?");
        return "You do not know who they are, do you?";
    }
}
let correctA = 0;
function jsTest() {
    let response = "";
    let points = 0;
    let q1 = "What company developed JavaScript?";
    let a1 = "NETSCAPE";
    let q2 = "Using JavaScript operator precedence,\n what is the result of the following expression? 2 + 4 * 6";
    let a2 = 26;
    let q3 = "With what object-oriented programming language\n is JavaScript often compared and confused?";
    let a3 = "JAVA";
    response = prompt(q1, "");
    if (response) points = runningTotal(response.toUpperCase() == a1 ? 1 : 0);
    alert(points);
    response = prompt(q2, "");
    if (response) points = runningTotal(response == a2 ? 1 : 0);
    alert(points);
    response = prompt(q3, "");
    if (response) points = runningTotal(response.toUpperCase() == a3 ? 1 : 0);
    alert("You answered a total of " + points + " correctly.");
    correctA = 0;
    points = 0;
}
function runningTotal(i) {
    correctA += i;
    return correctA;
}
function vote() {
    let t = "Your favorite sport is: ";
    for (i = 0; i < document.myform.sports.length; i++) {
        if (document.myform.sports[i].checked == true) {
            t = t + document.myform.sports[i].value;
        }
    }
    if (t == "Your favorite sport is: ") {
        document.getElementById("txt").value = "Choose a sport";
    } else {
        document.getElementById("txt").value = t;
        document.getElementById("txt1").value = t;
        document.getElementById("txt2").value = t;
    }
}
function upperCase() {
    let x = document.getElementById("txt").value;
    document.getElementById("txt").value = x.toUpperCase();
}
function SayHello() {
    alert("Your mouse is over the text!");
}
function SayGoodbye() {
    alert("Your mouse has left the text!");
}
function getCheckedValue(radioObj) {
    if (!radioObj) 
        return "";
    let radioLength = radioObj.length;
    if (radioLength == undefined)
        if (radioObj.checked) 
            return radioObj.value;
        else return "";
    for (let i = 0; i < radioLength; i++) {
        if (radioObj[i].checked) {
            return radioObj[i].value;
        }
    }
    return "";
}
function setCheckedValue(radioObj, newValue) {
    if (!radioObj) 
        return;
    let radioLength = radioObj.length;
    if (radioLength == undefined) {
        radioObj.checked = radioObj.value == newValue.toString();
        return;
    }
    for (let i = 0; i < radioLength; i++) {
        radioObj[i].checked = false;
        if (radioObj[i].value == newValue.toString()) {
            radioObj[i].checked = true;
        }
    }
}
function addNumbers(arg1, arg2) {
    let result = arg1 + arg2;
    return result;
}
alert("Please enter a numerical value in each of the following prompt dialog boxes. \nThe two numbers will be added together.");
let num1 = prompt("Please enter a numerical value.","");
let num2 = prompt("Please enter a numerical value.","");
document.write("<p>The result of the addNumbers() function is: <strong>" + addNumbers( parseFloat(num1), parseFloat(num2)) + "</strong></p>");