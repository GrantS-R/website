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