let username = "Axel";
document.getElementById("name").addEventListener('keyup', function enterName() {
let name = document.getElementById("name").value;
if (username == name){
    document.getElementById("name").style.borderColor="green";
    document.getElementById("message").innerHTML="<div class=\"alert alert-success\" role=\"alert\">Bien joué !</div>";
}
else {
document.getElementById("name").style.borderColor="red";
document.getElementById("message").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Raté !</div>";
}
})