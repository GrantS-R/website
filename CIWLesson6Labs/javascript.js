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