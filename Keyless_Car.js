alert("WELCOME TO THE KEYLESS CAR !");
var age = prompt("Please enter your age");
if (Number(age) < 18){
    alert("Sorry, you are too young to drive this car. Powering off !");
}
else if (Number(age) === 18){
    alert("Congratulations on your first year of driving ! Enjoy the ride.");
}
else if (Number(age) > 18) {
    alert("Powering on. Enjoy the ride !");
}
else {
    alert("PLEASE ENTER A NUMBER !");
}