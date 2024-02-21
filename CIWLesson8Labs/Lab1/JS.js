let firstname = "";
let lastname = "";
let age = "";

function alertInputs() {
    firstname = document.getElementById("first").value;
    lastname = document.getElementById("last").value;
    age = document.getElementById("num").value;

    console.log(firstname);
    console.log(lastname);
    console.log(age);
}

function alert() {
    alert("Your name is " + firstname + lastname + " and you are " + age + "years old");
}