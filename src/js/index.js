/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

const cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const cardPalo = ["\2660FE0F", "\2665FE0F", "\2666FE0F", "\2663FE0F"];
//  u picaus = "\u2660\uFE0F";
//  u corauzon = "\u2665\uFE0F";
//  u diamuantes = "\u2666\uFE0F";
//  u trebuol = "\u2663\uFE0F";

window.onload = () => {
  function generadorCartas(index) {
    return index[Math.round(Math.random() * (index.length - 1))];
  }

  document.querySelector("#numero").innerHTML = generadorCartas(cardNumber);
  document.querySelectorAll("#pagina-palo").innerHTML = generadorCartas(
    cardPalo
  );

  //   let palo = generadorCartas(cardPalo);

  //   function cambioColor() {
  //     if (palo == "\u2660\uFE0F" || palo == "\u2663\uFE0F") {
  //       palo.classList.add("text-dark");
  //     } else {
  //       palo.classList.add("text-danger");
  //     }
  //     return;
  //   }
  //   document.querySelector("#cabecera-palo").innerHTML = cambioColor(palo);

  //    = palofinal;

  console.log(generadorCartas(cardPalo));
  console.log(generadorCartas(cardNumber));
  //   console.log(paloFinal);
};
