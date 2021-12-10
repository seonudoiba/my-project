// document.querySelector(".One").
// function Clicker(clicked){
// if (clicked.typeof )
// }
let Nine = document.getElementById("Nine")
Nine.addEventListener("click", converter9);
let Eight = document.getElementById("Eight")
Eight.addEventListener("click", converter8);
let Seven = document.getElementById("Seven")
Seven.addEventListener("click", converter7);
let Six = document.getElementById("Six")
Six.addEventListener("click", converter6);
let Five = document.getElementById("Five")
Five.addEventListener("click", converter5);
let Four = document.getElementById("Four")
Four.addEventListener("click", converter4);
let Three = document.getElementById("Three")
Three.addEventListener("click", converter3);
let Two = document.getElementById("Two")
Two.addEventListener("click", converter2);
let One = document.getElementById("One")
One.addEventListener("click", converter1);
let Zero = document.getElementById("Zero")
Zero.addEventListener("click", converter0);
// Other Signs
let Clear = document.getElementById("Clear")
Clear.addEventListener("click", Clearer);
let Cancel = document.getElementById("Cancel")
Cancel.addEventListener("click", Canceler);
// real Sign
let Divide = document.getElementById("Divide")
Divide.addEventListener("click", Divider);
let Equal = document.getElementById("Equal")
Equal.addEventListener("click", Equalto);
let Plus = document.getElementById("Plus")
Plus.addEventListener("click", Pluser);
let Minus = document.getElementById("Minus")
Minus.addEventListener("click", Minuser);
let Multiply = document.getElementById("Multiply")
Multiply.addEventListener("click", Multiplyer);
let Percentage = document.getElementById("Percentage")
Percentage.addEventListener("click", Percent);
let Dot = document.getElementById("Dot")
Dot.addEventListener("click", converterDot);

/// Fuctions
let number = ""; 

 function converter1() {
    number = number + 1 ;
    document.querySelector(".Answer").value = number;
}
 function converter2() {
    number = number + 2 ;
    document.querySelector(".Answer").value = number;
}
 function converter3() {
    number = number + 3 ;
    document.querySelector(".Answer").value = number;
}
 function converter4() {
    number = number + 4 ;
    document.querySelector(".Answer").value = number;
}
 function converter5() {
    number = number + 5 ;
    document.querySelector(".Answer").value = number;
}
 function converter6() {
    number = number + 6 ;
    document.querySelector(".Answer").value = number;
}
 function converter7() {
    number = number + 7 ;
    document.querySelector(".Answer").value = number;
}
 function converter8() {
    number = number + 8 ;
    document.querySelector(".Answer").value = number;
}
 function converter9() {
    number = number + 9 ;
    document.querySelector(".Answer").value = number;
}
 function converter0() {
    number = number + 0 ;
    document.querySelector(".Answer").value = number;

}
 function converterDot() {
    number = number + "." ;
    document.querySelector(".Answer").value = number;

}

//functioner
function Clearer(){
    number = "";
    document.querySelector(".Answer").value = number;
}
function Canceler(){
    number = number.slice(0, number.length-1);
    document.querySelector(".Answer").value = number;
}
//Boss equal to
function Equalto(){
    let numbercheck = number.split("");
    for (let i=0; i< numbercheck.length; i++){
        if (numbercheck[i] == "/"){
            let numberD = number.split("/");
            let numberD1 = numberD[0];
            let numberD2 = numberD[1];
            number = numberD1 / numberD2;
            document.querySelector(".Answer").value = number;
        } else if(numbercheck[i] == "+"){
            let numberD = number.split("+");
            let numberD1 = numberD[0]/1;
            let numberD2 = numberD[1]/1;
            number = `${numberD1 + numberD2}`;
            document.querySelector(".Answer").value = number;
        } else if(numbercheck[i] == "-"){
            let numberD = number.split("-");
            let numberD1 = numberD[0];
            let numberD2 = numberD[1];
            number = numberD1 - numberD2;
            document.querySelector(".Answer").value = number;
        }else if(numbercheck[i] == "*"){
            let numberD = number.split("*");
            let numberD1 = numberD[0];
            let numberD2 = numberD[1];
    
            number = numberD1 * numberD2;
            document.querySelector(".Answer").value = number;
        } else if(numbercheck[i] == "%"){
            let numberD = number.split("%");
            let numberD1 = numberD[0];
            let numberD2 = numberD[1];
    
            number = numberD1 % numberD2;
            document.querySelector(".Answer").value = number;
        } 
    }
    
}
function Divider(){
    number += "/";
    document.querySelector(".Answer").value = number;
}
function Pluser(){
    number += "+";
    document.querySelector(".Answer").value = number;
}
function Minuser(){
    number += "-";
    document.querySelector(".Answer").value = number;
}
function Multiplyer(){
    number += "*";
    document.querySelector(".Answer").value = number;
}
function Percent(){
    number += "%";
    document.querySelector(".Answer").value = number;
}
