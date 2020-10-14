/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

// window.onload = function() {
//   console.log("Hello Rigo from the console!");
// };

// El Ejercicio empieza aquí

var submitbutton = document.querySelector("#form-submit");
console.log(submitbutton);
submitbutton.onclick = function() {
  pepe();
};

function pepe() {
  var nameImput = document.querySelector("#first-name").value;
  var lastnameImput = document.querySelector("#last-name").value;
  var cardImput = document.querySelector("#cardNumber").value;
  var holaquetal = document.querySelector("#inputCVV").value;
  var amountImput = document.querySelector("#imputAmount").value;
  var cityImput = document.querySelector("#city-name").value;
  var postalImput = document.querySelector("#postal-code").value;

  if (
    nameImput == "" ||
    lastnameImput == "" ||
    cardImput == "" ||
    holaquetal == "" ||
    amountImput == "" ||
    cityImput == "" ||
    postalImput == ""
  ) {
    alert("Rellenar datos vacios!");
  } else {
    alert("Ya esta completo!");
  }
  console.log(36);
}
