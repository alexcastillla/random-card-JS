/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
//

const cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suitCard = ["\u2666", "\u2660", "\u2665", "\u2663"];
//  DIAMOND SUIT = "\u2666";
//  SPADE SUIT = "\u2660";
//  u corauzon = "\u2665";
//  u trebuol = "\u2663";

window.onclick = () => {
  function generadorCartas(index) {
    return index[Math.round(Math.random() * (index.length - 1))];
  }

  let suitDisplay = generadorCartas(suitCard);
  let numberDisplay = generadorCartas(cardNumber);

  if (suitDisplay == "\u2666" || suitDisplay == "\u2665") {
    document.querySelector("#top-suit").style.color = "red";
    document.querySelector("#bottom-suit").style.color = "red";
  }

  document.querySelector("#body-number").innerHTML = numberDisplay;
  document.querySelector("#top-suit").innerHTML = suitDisplay;
  document.querySelector("#bottom-suit").innerHTML = suitDisplay;
};
